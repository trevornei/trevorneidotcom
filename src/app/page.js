import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <div className="flex flex-row bg-tp/50 ">
          <div className="flex flex-row items-center justify-center backdrop-blur-x">
            <Image
              src="/CirclesAndSpheres/SVG/circles_35.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <Image
              src="/CirclesAndSpheres/SVG/circles_26.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <Image
              src="/CirclesAndSpheres/SVG/circles_57.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
