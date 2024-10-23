import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/Nav"

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Trevor Nei - Software Engineer",
  description: "Trevor Nei is a software engineer based out of Missoula Montana.",
  icons: {
    icon: "/images/CirclesAndSpheres/SVG/circles_79_white.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <head /> 
      <body>
        {children}
      </body>
    </html>
  )
}
