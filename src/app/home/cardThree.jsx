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
      <div className="relative xl:h-[1000px] xl:w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="glassy indicator flex-col items-start justify-center rounded-md border-[1px] border-white/20 xl:p-4">
            <span className="indicator-item rotate-12 rounded-full text-3xl">
              📍
            </span>
            <h1 className="text-tp">Missoula MT</h1>
            <h2 className="">University of Montana</h2>
            <h3 className="">Studying Computer Science</h3>
          </div>
        </div>
      </div>
    </>
  );
}
