"use client";
import React from "react";
import Image from "next/image";

export default function Nav() {
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
          />
        </div>
        <div className=" font-chakra">
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
