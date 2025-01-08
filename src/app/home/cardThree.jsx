import React from "react";

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
