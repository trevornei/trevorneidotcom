"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Nav() {
  const logoRef = useRef(null); // Reference for the logo

  const navUt = useRef(null); // Reference for the logo
  
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

  useEffect(() => {
    const navBtn = navUt.current;

    const rotateLogo = (e) => {
      const rect = navBtn.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      // Calculate the angle based on mouse position relative to the logo
      const angle =
        Math.atan2(e.clientY - logoCenterY, e.clientX - logoCenterX) *
        (180 / Math.PI);

      // Apply the rotation using GSAP
      gsap.to(navBtn, { rotation: angle, duration: 0.5, ease: "power3.out" });
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
      <nav className="z-50 flex sticky flex-row items-center justify-between xl:px-10 navbar ">
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
        <div>
          <button priority={true} ref={navUt}>
            <div className="w-8 h-8 rounded-full bg-ts flex items-center justify-center">
              <div className="w-4 h-4 rounded-tl-full rounded-tr-full -rotate-[130deg] rounded-br-full from-bg-tp to-bg-ts bg-gradient-to-b "></div>
            </div>
          </button>
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <div className="xl:h-px w-10/12 bg-white"></div>
      
      </div>
    </>
  );
}
