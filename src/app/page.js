import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/home/hero";
export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
