import Nav from "../../src/app/components/Nav.jsx";
import Footer from "../../src/app/components/Footer.jsx";
import "./notes.css";

export default function NotesLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
