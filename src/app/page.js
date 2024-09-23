import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <Footer />
      </div>
    </>
  );
}
