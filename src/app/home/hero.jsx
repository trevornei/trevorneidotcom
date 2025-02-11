"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

export default function Hero() {
  gsap.registerPlugin(ScrambleTextPlugin);
  useEffect(() => {
    gsap.to("#scrmbl-one", {
      duration: 2,
      scrambleText: {
        text: "Trevor Nei",
        chars: "${whoami}who ami ${whoami}}",
        revealDelay: 1.2,
        speed: 0.2,
      },
    });
    gsap.to("#scrmbl-two", {
      duration: 2,
      scrambleText: {
        text: "Software Engineer",
        chars: "학상101110니다010011학상학상101110니다010011학상",
        revealDelay: 0,
        speed: 0.5,
      },
    });
  });
  return (
    <>
      <div className="absolute z-30 mb-20 hidden -rotate-[10deg] overflow-hidden bg-tp sm:left-[215px] sm:top-[497px] sm:block md:left-[200px] md:top-[500px] md:mb-32 md:block lg:left-[450px] lg:top-[680px] lg:block lg:-rotate-[15deg] xl:block 2xl:block">
        <h1
          className="z-30 font-bold text-black sm:px-2 sm:py-px sm:text-xl md:px-2 md:py-1 md:text-2xl lg:px-4 lg:py-2 lg:text-4xl"
          id="scrmbl-one"
        >
          Trevor Nei
        </h1>
      </div>
      <div className="b-36 moveHero relative mb-36 mt-16 flex h-1/2 w-10/12 flex-col items-center justify-end overflow-hidden rounded-3xl border-[1px] border-white sm:h-[300px] sm:w-10/12 sm:flex-row md:h-auto md:w-10/12 md:flex-row lg:h-[500px] lg:w-10/12 xl:h-[500px] xl:w-10/12 xl:flex-row 2xl:w-10/12">
        {/* PROFILE EXTENDING THE LENGTH OF THE SCREEN. */}
        <div
          className="sm:border-b-none relative -z-0 flex h-full w-full flex-row items-start justify-center overflow-hidden border-b-2 border-tpink/20 backdrop-blur-md sm:-z-10 sm:h-full sm:w-[600px] sm:border-b-0 md:absolute md:left-0 md:-z-10 md:h-full md:w-full md:items-start md:justify-start md:rounded-r-none md:border-b-0 lg:absolute lg:left-0 lg:-z-10 lg:w-full lg:flex-row lg:items-start lg:justify-start lg:border-b-0 xl:absolute xl:h-full xl:w-full xl:border-b-0 2xl:w-full 2xl:border-b-0"
          id="mvHero"
        >
          <Image
            src="/assets/images/ma_cherry/image_2.png"
            className="absolute inset-0 -z-10 animate-rotateAndScale7s object-cover blur-[80px]"
            alt="Shoshone"
            width={800}
            height={800}
          />
          <Image
            src="/assets/images/profile_pictures/profile_picture.png"
            className="relative z-10 translate-y-6 border-r-0 grayscale md:h-full md:w-auto"
            alt="A png illustration that aids in the visual representation of the website."
            width={500}
            height={500}
          />
        </div>
        <div className="relative z-10 my-0 flex h-full w-full flex-col items-center justify-end overflow-hidden rounded-t-none sm:h-[300px] sm:w-full md:w-1/2 md:items-end md:rounded-3xl md:rounded-l-none lg:h-full lg:w-96 lg:items-center lg:justify-center lg:rounded-l-none xl:w-1/2 xl:items-end xl:justify-center xl:rounded-l-none 2xl:w-1/2 2xl:rounded-l-none">
          <div className="m-0 my-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-black/50 p-10 backdrop-blur-md sm:m-0 sm:my-0 sm:h-full sm:items-center sm:rounded-none sm:py-10 md:w-full md:rounded-l-none md:py-10 lg:m-0 lg:h-full lg:w-full lg:items-center lg:justify-center lg:rounded-l-none lg:px-8 lg:py-10 xl:h-full xl:w-full xl:items-center xl:justify-center xl:rounded-l-none xl:py-16 2xl:rounded-l-none">
            <h1
              className="scrambleName z-30 font-bold text-tp sm:hidden sm:px-2 sm:py-px sm:text-xl md:hidden md:px-2 md:py-1 md:text-2xl lg:hidden lg:px-4 lg:py-2 lg:text-4xl xl:hidden 2xl:hidden"
              id="scrmbl-one"
            >
              Trevor Nei
            </h1>
            <div className="flex flex-row items-start justify-start gap-x-2 sm:flex-col">
              <h1
                className="mx-none software text-2xl font-extrabold text-white md:text-5xl lg:text-6xl xl:mx-8 xl:pb-5 xl:text-6xl"
                id="scrmbl-two"
              >
                SOFTWARE
              </h1>
            </div>
            <div className="flex h-full w-full flex-row items-center justify-center">
              <div className="relative mt-10 flex flex-row items-center justify-center overflow-visible md:mt-24">
                {/* Foreground Icons */}
                <div className="flex items-center justify-center space-x-4 sm:space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-20">
                  <a
                    href="https://www.github.com/trevornei"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/images/github-mark/github-mark-white.png"
                      alt="Github logo"
                      className="pt-2 sm:h-auto sm:w-10 md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-16"
                      width={100}
                      height={100}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/trevornei-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/images/linkedin-logos/LI-In-Bug.png"
                      alt="LinkedIn logo"
                      className="pt-2 sm:h-auto sm:w-10 md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-20"
                      width={100}
                      height={100}
                    />
                  </a>
                  <a
                    href="https://x.com/trevv_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/images/x-logo/logo-white.png"
                      alt="Another logo"
                      className="pt-2 sm:h-auto sm:w-10 md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-16 lg:pt-2"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
