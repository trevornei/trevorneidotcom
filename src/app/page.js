import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <div className="flex flex-row items-center justify-center animate-spin-slow-md">
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/images/CirclesAndSpheres/SVG/circles_26_white.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="animate-spin-slow-md"
            />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <Image
              src="/images/CirclesAndSpheres/SVG/circles_57_white.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="animate-spin-slow"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
