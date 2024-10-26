import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/home/hero";
import CardTwo from "./components/home/cardTwo";
import CardThree from "./components/home/cardThree";


export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <Nav />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Hero />
          <CardTwo />
          <CardThree />
          <Footer />
        </div>
      </div>
    </>
  );
}
