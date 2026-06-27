import { chromium } from "playwright-core";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viewports = [
  { name: "desktop", width: 1440, height: 1200 },
  { name: "laptop", width: 1280, height: 900 },
  { name: "tablet", width: 768, height: 1100 },
  { name: "mobile", width: 390, height: 950 },
];

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

const failures = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({
    path: `.checks/${viewport.name}-verified.png`,
    fullPage: true,
  });

  const layout = await page.evaluate(() => {
    const heroHeading = document.querySelector("h1");
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      heroText: heroHeading?.textContent ?? "",
      heroVisible:
        !!heroHeading &&
        getComputedStyle(heroHeading).opacity !== "0" &&
        heroHeading.getBoundingClientRect().width > 0,
    };
  });

  if (layout.scrollWidth > layout.clientWidth) {
    failures.push(
      `${viewport.name}: horizontal overflow ${layout.scrollWidth} > ${layout.clientWidth}`,
    );
  }

  if (!layout.heroVisible || !layout.heroText.includes("Mukund Raj")) {
    failures.push(`${viewport.name}: hero heading is not visibly rendered`);
  }

  if (consoleErrors.length) {
    failures.push(`${viewport.name}: console errors: ${consoleErrors.join(" | ")}`);
  }

  if (pageErrors.length) {
    failures.push(`${viewport.name}: page errors: ${pageErrors.join(" | ")}`);
  }

  await page.close();
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 950 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobile.getByLabel("Open menu").click();
await mobile.getByRole("link", { name: "About" }).click();
await mobile.waitForTimeout(350);
const menuClosed = await mobile
  .getByLabel("Open menu")
  .evaluate((button) => button.getAttribute("aria-expanded") === "false");

if (!menuClosed) {
  failures.push("mobile: menu did not close after selecting an item");
}

await mobile.getByLabel("Open menu").click();
await mobile
  .locator("select[aria-label='Select color theme']")
  .filter({ visible: true })
  .selectOption("cyber-cyan");
const themeState = await mobile.evaluate(() => ({
  domTheme: document.documentElement.dataset.theme,
  storedTheme: window.localStorage.getItem("portfolio-theme"),
}));

if (
  themeState.domTheme !== "cyber-cyan" ||
  themeState.storedTheme !== "cyber-cyan"
) {
  failures.push("theme: switcher did not update DOM and localStorage");
}

await mobile.getByLabel("Close menu").click();
await mobile.waitForTimeout(350);
await mobile.getByRole("link", { name: "Contact Me" }).click();
await mobile.waitForTimeout(400);
const smoothScrollWorked = await mobile.evaluate(() => window.scrollY > 100);
if (!smoothScrollWorked) {
  failures.push("scroll: contact navigation did not move the page");
}

await mobile.close();
await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Viewport, mobile menu, theme switching, and scrolling checks passed.");
