import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./home/hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <Nav />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}
