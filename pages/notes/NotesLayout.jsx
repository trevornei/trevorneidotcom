import Nav from "../../src/app/components/Nav.jsx";
import Footer from "../../src/app/components/Footer.jsx";

export default function NotesLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
