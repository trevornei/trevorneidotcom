import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardTwo() {
  return (
    <>
      <div className="flex w-10/12 flex-row flex-wrap overflow-hidden xl:my-72">
        <Image
          src="/assets/images/Climbing/Shoshone.jpeg"
          alt="Profile picture of a snake"
          className="h-fit max-w-none object-cover grayscale"
          width={600}
          height={200}
        />
        <Image
          src="/assets/images/Climbing/perry_shoshone.jpeg"
          alt="Profile picture of a snake"
          className="object-none grayscale"
          width={600}
          height={200}
        />
        <Image
          src="/assets/images/Climbing/climbing_shoshone.png"
          alt="Profile picture of a snake"
          className="object-cover grayscale"
          width={600}
          height={200}
        />
      </div>
      <div className=""></div>
    </>
  );
}
