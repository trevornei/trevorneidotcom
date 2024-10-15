"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGsap } from "gsap/dist/ScrollTrigger";

export default function Nav() {
  const logoRef = useRef(null); // Reference for the logo

  useEffect(() => {
    const logoElement = logoRef.current;

    const rotateLogo = (e) => {
      const rect = logoElement.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      // Calculate the angle based on mouse position relative to the logo
      const angle =
        Math.atan2(e.clientY - logoCenterY, e.clientX - logoCenterX) *
        (180 / Math.PI);

      // Apply the rotation using GSAP
      gsap.to(logoElement, { rotation: angle, duration: 0.5, ease: "power3.out" });
    };

    // Add the mousemove event listener
    window.addEventListener("mousemove", rotateLogo);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", rotateLogo);
    };
  }, []);

  return (
    <>
      <nav className="z-50 flex flex-row items-center justify-between xl:px-10 navbar bg-bgdg">
        <div className="">
          <Image
            src="/assets/images/CirclesAndSpheres/SVG/circles_79_white.svg"
            width={80}
            height={80}
            alt="Logo"
            priority={true}
            ref={logoRef} // Set the ref to target the logo
          />
        </div>
        <div className="font-chakra">
          <ul className="flex flex-row gap-10">
            <li className="">
              <h1 className="text-3xl text-tp font-chakra">Blog</h1>
            </li>
            <li className="">
              <h1 className="text-3xl text-tp font-chakra">About</h1>
            </li>
            <li className="">
              <h1 className="text-3xl text-tp font-chakra">Contact</h1>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
