import "./notes.css";
import Nav from "../components/Nav";

export default function NotesLayout({ children }) {
  return (
    <>
      <main>
        <Nav className="" />
        {children}
      </main>
    </>
  );
}
