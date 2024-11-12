import "./contact.css";
import Nav from "../../src/app/components/Nav.jsx";
import Footer from "../../src/app/components/Footer.jsx";
import Head from "next/head";
import "./index.jsx";

export default function ContactLayout({ children }) {
  return (
    <>
      <Nav />
      <body>{children}</body>
      <Footer />
    </>
  );
}
