import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/layout/CommandPalette";
import InteractiveOverlays from "@/components/ui/InteractiveOverlays";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soham-portfolio.vercel.app"),
  title: "Soham Mangroliya | AI Engineer • Machine Learning • Data Science",
  description: "Official portfolio of Soham Mangroliya — Building AI-powered applications that solve real-world problems through Machine Learning, Data Science, and Modern Web Technologies.",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Soham Mangroliya", "Python", "FastAPI", "React", "Next.js", "Deep Learning", "Portfolio"],
  authors: [{ name: "Soham Mangroliya", url: "https://github.com/soham-1801" }],
  creator: "Soham Mangroliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soham-portfolio.vercel.app",
    title: "Soham Mangroliya | AI Engineer • Machine Learning • Data Science",
    description: "Explore AI projects, machine learning models, and software engineering achievements by Soham Mangroliya.",
    siteName: "Soham Mangroliya AI Portfolio",
    images: [
      {
        url: "/profile/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Soham Mangroliya AI Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Mangroliya | AI Engineer • Machine Learning • Data Science",
    description: "Building AI-powered applications that solve real-world problems through Machine Learning, Data Science, and Modern Web Technologies.",
    images: ["/profile/photo.jpg"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#F8FAFC] selection:bg-[#3B82F6] selection:text-white font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <InteractiveOverlays />
          <CommandPalette />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
