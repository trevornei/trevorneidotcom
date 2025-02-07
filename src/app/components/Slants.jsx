"use client";
import { useEffect, useRef, useState } from "react";
import Slant from "./Slant.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Slants() {
  const [slantComponents, setSlantComponent] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const numberOfSlants = 40;
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
        const max = 400;
        const random = Math.floor(Math.random() * max);
        gsap.to(child, { y: random, duration: 0.75 });
      });
    }
  }, [slantComponents]);

  useGSAP(() => {
    // Instead of iterating an undefined variable or a number, you should target the actual DOM elements.
    // One way is to select the children of the container:
  }, []);

  return (
    <>
      {/* Parent Div*/}
      <div
        ref={containerRef}
        className="absolute right-0 -z-10 block -rotate-35 xl:m-0 xl:flex xl:flex-row"
        id="slantPop"
      >
        {/* Each Child Div's */}
        {slantComponents}
      </div>
    </>
  );
}
