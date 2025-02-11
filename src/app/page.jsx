import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CardTwo from "./home/cardTwo";
import Hero from "./home/hero";
import Slants from "./components/Slants.jsx";

export default function Home() {
  return (
    <>
      <div className="display-none relative overflow-hidden">
        <Nav />
        <Slants className="absolute right-96 -rotate-55" />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Hero />
          <CardTwo />
          <Footer />
        </div>
      </div>
    </>
  );
}
