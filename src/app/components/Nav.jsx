"use client";
import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between border-2 border-solid xl:px-10 border-error navbar bg-bgdg">
        <div className="">
          <Image
            src="/CirclesAndSpheres/SVG/circles_40.svg"
            width={80}
            height={80}
            alt="Logo"
          />
        </div>
        <div className="">
          <ul className="flex flex-row gap-10">
            <li className="">
              <h1 className="text-tp">Blog</h1>
            </li>
            <li className="">
              <h1 className="text-tp">About</h1>
            </li>
            <li className="">
              <h1 className="text-tp">Contact</h1>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
