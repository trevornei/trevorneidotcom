import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Trevor Nei - Software Engineer",
  description: "Trevor Nei is a software engineer based out of Missoula Montana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav className="border-2 border-solid border-error navbar">
        <ul className="">
          <li className="">
            <h1 className="text-tp">Blog</h1> 
          </li> 
          <li className="">
            <h1 className="text-tp">About</h1> 
          </li> 
          <li className="">
            <h1 className="text-tp">Contact</h1> 
          </li> 
        </ul>
      </nav> 
        {children}
      </body>
    </html>
  );
}
