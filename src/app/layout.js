import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/Nav"

export const metadata = {
  title: "Trevor Nei - Software Engineer",
  description: "Trevor Nei is a software engineer based out of Missoula Montana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
