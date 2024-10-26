"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Modal from './modal' 

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="z-50 flex sticky flex-row items-center justify-between xl:px-10 navbar ">
        <div className="">
          {/* Logo */}
          <Image
            src="/assets/images/CirclesAndSpheres/SVG/circles_79_white.svg"
            width={100}
            height={100}
            alt="Logo for trevor nei dot com"
            priority={true}
            ref={logoRef} // Set the ref to target the logo
          />
        </div>
        <div>
          {/* Haystack button */}
          <button onClick={openModal} className="relative">
          <Image
            src="/assets/images/ma_cherry/3.png"
            className="absolute top-0 right-0 blur-xl animate-pulse-slow animate-spin-slow"
            width={100}
            height={100}
            alt="Absract shape for button styling"
          /> 
            <div className="w-12 h-12 rounded-full glassy bg-ts flex flex-col items-center justify-center">
              <div className="w-4 h-1  bg-white"></div>
              <div className="w-4 h-1 my-1 bg-white"></div>
              <div className="w-4 h-1  bg-white"></div>
            </div>
          </button>
        </div>
      </nav>
      {/* Line at the bottom of the nav bar. */}
      <div className="flex items-center justify-center">
        <div className="h-px w-10/12 bg-white"></div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p>This is the content inside the modal.</p>
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Close Modal
        </button>
      </Modal>
    </>
  );
}
