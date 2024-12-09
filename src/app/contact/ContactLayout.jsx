import "./contact.css";
import Head from "next/head";
import "./index.jsx";

export const metadata = {
  title: "Contact Trevor Nei - Software Engineer",
  description:
    "Trevor Nei is a software engineer based out of Missoula Montana. You can contact me on LinkedIn, GitHub, or X.",
  icons: {
    icon: "/images/CirclesAndSpheres/SVG/circles_79_white.svg",
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <body className="">{children}</body>
    </>
  );
}
