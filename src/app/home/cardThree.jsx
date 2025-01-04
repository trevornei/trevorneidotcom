import React from "react";
import Image from "next/image";
import meClimb from "../../../public/assets/images/Climbing/climbing.jpeg";
import pets from "../../../public/assets/images/Climbing/pets.jpeg";
import action from "../../../public/assets/images/Climbing/action.jpeg";
import rafting from "../../../public/assets/images/Climbing/rafting.jpeg";
import wr from "../../../public/assets/images/Climbing/wr.jpeg";

export default function CardThree() {
  return (
    <>
      <div className="relative items-center justify-center xl:h-[1000px] xl:w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="glassy indicator flex-col items-center justify-center rounded-md border-[1px] border-white/20 xl:left-[500px] xl:px-4 xl:py-8">
            <span className="badge indicator-item badge-secondary">SYN</span>
            <h1 className="text-tp">Missoula MT📍</h1>
            <h2 className="">University of Montana</h2>
            <h3 className="">Studying Computer Science</h3>
          </div>
          <div className="glassy mockup-code">
            <pre data-prefix="$">
              <code>npm i daisyui</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
        <div className="relative h-[300px] w-[300px] bg-transparent">
          <Image
            src={meClimb}
            alt="Climbing"
            className="absolute -z-20 origin-top-left rotate-12 xl:left-[950px] xl:top-[200px]"
            width={300}
            height={300}
          />
          <Image
            src={action}
            alt="Action"
            className="absolute inset-0 -z-10 origin-top-left rotate-12 xl:left-[200px] xl:top-[300px]"
            width={300}
            height={300}
          />
          <Image
            src={pets}
            alt="Pets"
            className="absolute inset-0 top-0 z-0 origin-top-left -rotate-12 xl:left-[1100px]"
            width={300}
            height={300}
          />
          <Image
            src={rafting}
            alt="Rafting"
            className="absolute inset-0 z-10 xl:-top-[300px] xl:left-[500px]"
            width={300}
            height={300}
          />
          <Image
            src={wr}
            alt="WR"
            className="absolute inset-0 z-20 origin-top-left -rotate-[5deg]"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
