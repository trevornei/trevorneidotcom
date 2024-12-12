"use client";
import Nav from "../components/Nav.jsx";
import "./notes.css";
import Image from "next/image.js";

import blogPosts from "./posts.json";
export default function Notes() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 flex-col items-end justify-center">
          <div className="relative flex h-auto w-full items-center justify-center">
            <Image
              src="/assets/images/ma_cherry/el 1.png"
              className="absolute inset-0 object-cover"
              alt="Shoshone"
              width={1000}
              height={1000}
            />
          </div>
          <div className="relative flex h-auto w-full items-center justify-center">
            <Image
              src="/assets/images/ma_cherry/el 5.png"
              className="blr absolute inset-0 -z-30 hidden object-cover"
              alt="Shoshone"
              width={1000}
              height={1000}
            />
          </div>

          <div className="relative mb-20 font-bold">
            <h1>Welcome.</h1>
            <div className="flex flex-row">
              <h4>Tech</h4>
              <h4>Travel</h4>
              <h4>Languages</h4>
              <h4>Culture</h4>
            </div>
          </div>

          {blogPosts.map((posts) => (
            <div
              className="glassy-mid relative flex w-full flex-col gap-2 overflow-clip"
              key={posts.id}
            >
              <h1 className="">{posts.title}</h1>
              <p>{posts.description}</p>
              <p>{posts.date}</p>
              <button className="button">Click Here.</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
