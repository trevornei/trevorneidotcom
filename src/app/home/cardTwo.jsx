import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardTwo() {
  return (
    <>
      <div className="lg:px-10/12 relative flex w-screen flex-row flex-wrap overflow-hidden border-[1px] border-white sm:flex-row md:flex-row lg:flex-row xl:my-72 xl:rounded-none xl:backdrop-blur-3xl">
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <Image
            src="/assets/images/CirclesAndSpheres/SVG/circles_100.svg"
            alt="A new generated image"
            className="absolute right-0 top-0 h-auto w-[150px] animate-rotate-y object-cover sm:right-0 sm:top-0 sm:h-auto sm:w-[280px] md:right-0 md:top-0 md:h-auto md:w-[390px] lg:right-0 lg:top-0 lg:h-auto lg:w-[500px] xl:-right-20 xl:top-0 xl:h-auto xl:w-[500px] 2xl:right-0 2xl:top-0"
            width={800}
            height={800}
          />
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-black">
          <Image
            src="/assets/images/ma_cherry/image_8.png"
            alt="A new image"
            className="absolute inset-0 -z-10 object-cover sm:h-auto sm:w-[200px] md:h-full md:w-full xl:bottom-10 2xl:right-0 2xl:h-auto 2xl:w-full 2xl:-rotate-55"
            width={1700}
            height={1700}
          />
        </div>
        <Image
          src="/assets/images/illustrator/2xl_grid.svg"
          alt="2xl grid"
          className="absolute inset-0 -z-10"
          width={1700}
          height={1700}
        />
        <div className="xl:px-18 x glassy relative z-0 flex-col items-start justify-center gap-6 px-12 py-16 text-white sm:flex-col sm:items-start sm:justify-center sm:gap-6 sm:px-16 sm:py-24 md:flex-col md:items-start md:justify-center md:gap-6 md:px-16 md:py-24 lg:w-1/2 lg:flex-col lg:items-start lg:justify-center lg:gap-6 lg:px-16 lg:py-24 lg:text-8xl xl:flex-col xl:items-start xl:justify-center xl:gap-24 xl:py-28 2xl:gap-24">
          <h1 className="font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            Developer.
          </h1>
          <h1 className="sm: font-extrabold md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            Comedy Nerd.
          </h1>
          <h1 className="sm: font-extrabold md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            Climber.
          </h1>
          <h1 className="sm: font-extrabold md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            River Surfer.🏄‍♂️
          </h1>
        </div>
      </div>
    </>
  );
}
