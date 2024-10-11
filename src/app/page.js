import Nav from "./components/Nav";
// import Image from "next/image";
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
