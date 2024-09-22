import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Trevor Nei - Software Engineer",
  description: "Trevor Nei is a software engineer based out of Missoula Montana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav className="border-2 border-red-600 border-solid navbar">

      </nav>
      <body>
        {children}
      </body>
    </html>
  );
}
