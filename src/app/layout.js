import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "FitGenie AI — Your Smart Fitness Companion",
  description: "AI-powered fitness companion that provides personalized diet plans, workout routines, BMI tracking, and intelligent health recommendations.",
  keywords: "fitness, AI, diet planner, workout, BMI calculator, health, nutrition",
  openGraph: {
    title: "FitGenie AI",
    description: "Your smart AI fitness companion",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
