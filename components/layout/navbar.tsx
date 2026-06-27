"use client";

import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui";
import { navItems, RESUME_URL } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        isScrolled
          ? "border-border bg-background/70 shadow-[0_12px_50px_rgb(0_0_0_/_0.24)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                className={cn(
                  "text-sm font-semibold text-muted outline-none transition hover:text-foreground focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  isActive && "text-accent",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
          <ThemeSwitcher />
          <a
            className={buttonClasses({
              size: "sm",
              className: "gap-2",
            })}
            href={RESUME_URL}
          >
            Resume
            <Download aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground outline-none backdrop-blur-xl transition hover:border-[var(--border-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border bg-background/94 px-5 pb-6 pt-2 shadow-[0_30px_80px_rgb(0_0_0_/_0.35)] backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    className={cn(
                      "rounded-lg px-3 py-3 font-display text-base font-semibold text-muted outline-none transition hover:bg-[var(--accent-soft)] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                      isActive && "bg-[var(--accent-soft)] text-accent",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ThemeSwitcher />
                <a
                  className={buttonClasses({ size: "md", className: "gap-2" })}
                  href={RESUME_URL}
                  onClick={closeMenu}
                >
                  Resume
                  <Download aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
