"use client";
import Nav from "../../src/app/components/Nav.jsx";
import Footer from "../../src/app/components/Footer.jsx";
import "./notes.css";

import blogPosts from "./posts.json";
export default function Notes() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 flex-col items-center justify-center">
          {blogPosts.map((posts) => (
            <div
              className="flex flex-col gap-2 border-2 border-tp"
              key={posts.id}
            >
              <h1 className="text-green-400">{posts.title}</h1>
              <p>{posts.description}</p>
              <p>{posts.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
