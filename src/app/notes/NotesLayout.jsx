import "./notes.css";
import Nav from "../../src/app/components/Nav";

export default function NotesLayout({ children }) {
  return (
    <>
      <Nav className="" />
      <main>{children}</main>
    </>
  );
}
