'use client'
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="flex flex-row border-2 border-solid border-error navbar bg-bgdg">
        <div className=""></div>
        <ul className="">
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
      </nav>
    </>
  );
}
