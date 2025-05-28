"use client";
import { useEffect, useRef, useState } from "react";
import Slant from "./Slant.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Slants() {
  const [slantComponents, setSlantComponent] = useState([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    const numberOfSlants = 10;
    const componentsArrary = [];

    for (let i = 0; i < numberOfSlants; i++) {
      componentsArrary.push(<Slant key={i} />);
    }
    setSlantComponent(componentsArrary);
  }, []);

  useGSAP(() => {
    // Ensure the container and its children have been rendesky.
    if (containerRef.current) {
      const children = containerRef.current.children;
      Array.from(children).forEach((child) => {
        let color = [
          "bg-sky-500/40",
          "bg-sky-300",
          "bg-sky-100/30",
          "bg-sky-900",
          "bg-sky-700",
        ];
        let randomColor = Math.floor(Math.random() * color.length);
        child.classList.add('blur-[70px]')
        child.classList.add(`${color[randomColor]}`);
        // child.classList.add("");

        const max = 1800;
        const random = Math.floor(Math.random() * max);
        gsap.to(child, { y: random, duration: 6, stagger: 1000, delay: 0 });
      });
    }
  }, [slantComponents]);

  return (
    <>
      {/* Parent Div*/}
      <div
        ref={containerRef}
        className="absolute inset-0 -z-10 flex flex-row flex-wrap overflow-visible sm:h-[760px] sm:w-[850px] md:-top-[100px] md:w-[1200px] xl:m-0 xl:h-auto xl:w-[2900px]"
        id="slantPop"
      >
        {/* Each Child Div's */}
        {slantComponents}
      </div>
    </>
  );
}
