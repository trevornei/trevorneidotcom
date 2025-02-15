"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router

import Image from "next/image";
import { gsap } from "gsap";
import Modal from "./modal";

export default function Nav() {
  const router = useRouter();
  const logoRef = useRef(null); // Reference for the logo

  const navUt = useRef(null); // Reference for the nav button

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
      gsap.to(logoElement, {
        rotation: angle,
        duration: 0.5,
        ease: "power3.out",
      });
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

    if (!navBtn) return; // Ensure navBtn is not null

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
      <nav className="navbar sticky z-50 flex flex-row items-center justify-between xl:px-10">
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
              className="absolute right-0 top-0 animate-spin-slow blur-xl saturate-200"
              width={100}
              height={100}
              alt="Absract shape for button styling"
            />
            <div
              className="glassy flex h-12 w-12 transform flex-col items-center justify-center rounded-full transition-transform duration-500 ease-linear hover:scale-110"
              onClick={(e) =>
                e.currentTarget.classList.add("animate-pulse-once")
              }
            >
              <div className="flex flex-col items-start">
                <div className="h-1 w-4 transform bg-white transition-transform duration-500 ease-in-out hover:translate-x-1"></div>
                <div className="my-1 h-1 w-5 transform bg-white transition-transform duration-500 ease-in-out hover:translate-x-1"></div>
                <div className="h-1 w-4 transform bg-white transition-transform duration-500 ease-in-out hover:translate-x-1"></div>
              </div>
            </div>
          </button>
        </div>
      </nav>
      {/* Line at the bottom of the nav bar. */}

      <div className="absolute right-0 top-0 flex items-center justify-center">
        <Modal isOpen={isModalOpen} onClose={closeModal} className="z-20">
          <img
            src="assets/images/profile_pictures/da_snake.png"
            alt=""
            height={900}
            width={900}
            className="absolute -right-24 bottom-0 h-auto w-36 border-b-2 border-r-2 border-b-purple-600 border-r-purple-600 sm:-right-full md:-right-36 md:h-auto md:w-56 lg:-right-full"
          />
          <ul className="flex flex-col items-start justify-center gap-y-6 font-chakra font-extrabold text-tp">
            <button onClick={() => router.push("/")}>
              <li className="">
                <h3 className="text-6xl">Home</h3>
              </li>
            </button>
            <button onClick={() => router.push("/notes")}>
              <li className="">
                <h3 className="text-6xl">Notes</h3>
              </li>
            </button>
            <li className="">
              <button onClick={() => router.push("/contact")}>
                <h3 className="text-6xl">Contact</h3>
              </button>
            </li>
          </ul>
          <button
            onClick={closeModal}
            className="mt-4 rounded bg-tp/10 px-4 py-2 text-white backdrop-blur-3xl"
          >
            CLOSE
          </button>
        </Modal>
      </div>
    </>
  );
}
