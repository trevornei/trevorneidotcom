"use client";
import Nav from "../components/Nav.jsx";
import "./notes.css";

import blogPosts from "./posts.json";
export default function Notes() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto flex w-10/12 flex-col items-start justify-center xl:mt-8 2xl:mt-10">
          <div className="sm: px-2 font-bold xl:mb-4">
            <h1>Welcome.</h1>
            <div className="flex h-full w-full flex-row">
              <p className="bg-gradient-to-r from-purple-300 to-slate-200 bg-clip-text text-transparent">
                Notes is my blog where I talk about technology, travel, & living
                in the modern era.
              </p>
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
              <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-slate-600 to-slate-900 blur-[100px] hover:from-pink-500 hover:to-orange-500"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
