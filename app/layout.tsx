import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mukund Raj | Software Engineer",
    template: "%s | Mukund Raj",
  },
  description:
    "Premium software engineering portfolio for Mukund Raj, final year student at IIT Bombay.",
  openGraph: {
    title: "Mukund Raj | Software Engineer",
    description:
      "Software engineer portfolio featuring projects, skills, and contact information.",
    type: "website",
    locale: "en_US",
    siteName: "Mukund Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukund Raj | Software Engineer",
    description:
      "Software engineer portfolio featuring projects, skills, and contact information.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark-purple"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
