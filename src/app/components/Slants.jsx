"use client";
import { useEffect, useRef, useState } from "react";
import Slant from "./Slant.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Slants() {
  const [slantComponents, setSlantComponent] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const numberOfSlants = 1500;
    const componentsArrary = [];

    for (let i = 0; i < numberOfSlants; i++) {
      componentsArrary.push(<Slant key={i} />);
    }
    setSlantComponent(componentsArrary);
  }, []);

  useEffect(() => {
    // Ensure the container and its children have been rendered.
    if (containerRef.current) {
      const children = containerRef.current.children;
      Array.from(children).forEach((child) => {
        let color = ["tp"];
        // let randomColor = Math.floor(Math.random() * color.length);

        // child.classList.add(`${color[randomColor]}`);
        child.classList.add("bg-teal-300");

        const max = 1800;
        const random = Math.floor(Math.random() * max);
        gsap.to(child, { y: random, duration: 10, stagger: 150, delay: 0 });
      });
    }
  }, [slantComponents]);

  return (
    <>
      {/* Parent Div*/}
      <div
        ref={containerRef}
        className="absolute inset-x-0 -top-[100px] -z-10 flex rotate-12 flex-wrap xl:m-0 xl:flex xl:h-auto xl:w-[2900px] xl:flex-row"
        id="slantPop"
      >
        {/* Each Child Div's */}
        {slantComponents}
      </div>
    </>
  );
}
