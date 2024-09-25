"use client";
import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="z-50 flex flex-row items-center justify-between xl:px-10 navbar bg-bgdg">
        <div className="">
          <Image
            src="/images/CirclesAndSpheres/SVG/circles_79_white.svg"
            width={80}
            height={80}
            alt="Logo"
          />
        </div>
        <div className=" font-silkscreen">
          <ul className="flex flex-row gap-10">
            <li className="">
              <h1 className="text-3xl text-tp font-silkscreen">Blog</h1>
            </li>
            <li className="">
              <h1 className="text-3xl text-tp font-silkscreen">About</h1>
            </li>
            <li className="">
              <h1 className="text-3xl text-tp font-silkscreen">Contact</h1>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
