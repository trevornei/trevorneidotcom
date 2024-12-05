"use client";
import Nav from "../../src/app/components/Nav.jsx";
import Footer from "../../src/app/components/Footer.jsx";
import "./notes.css";
import Image from "next/image.js";

import blogPosts from "./posts.json";
export default function Notes() {
  return (
    <>
      <Nav className="" />

      <div className="flex flex-col items-center justify-center">
        <div className="glassy flex w-10/12 flex-col items-start justify-center">
          <div className="relative flex h-auto w-full items-center justify-center">
            <Image
              src="/assets/images/ma_cherry/el 1.png"
              className="absolute inset-0 object-cover"
              alt="Shoshone"
              width={1000}
              height={1000}
            />
          </div>

          <div className="relative mb-20 font-bold">
            <h1>Welcome.</h1>
            <h4>I write about technology, culture, and travel.</h4>
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
      <Footer />
    </>
  );
}
