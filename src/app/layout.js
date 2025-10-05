import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "General Academy | Learn, Grow, and Achieve Excellence",
  description:
    "Welcome to General Academy — your trusted platform for quality education, skill development, and lifelong learning. Explore our wide range of courses, expert instructors, and learning resources to help you reach your full potential.",
  keywords: [
    "General Academy",
    "online learning",
    "education",
    "courses",
    "skill development",
    "e-learning",
    "student success",
    "training programs",
  ],
  openGraph: {
    title: "General Academy | Learn, Grow, and Achieve Excellence",
    description:
      "Empowering learners worldwide with expert-led courses and personalized education paths. Join General Academy today and start your journey toward success.",
    url: "https://www.generalacademybd.com",
    siteName: "General Academy",
    images: [
      {
        url: "https://www.generalacademybd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "General Academy Home Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Academy | Learn, Grow, and Achieve Excellence",
    description:
      "Join General Academy for expert-led courses and skill-building programs that empower learners worldwide.",
    images: ["https://www.generalacademybd.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* Navbar stays at the top */}
        <Navbar />
        <Analytics/>

        {/* Inner content wrapper with max width */}
        <div className="w-full ">
          {children}
        </div>
      </body>
    </html>
  );
}
