import React from "react";
import Image from "next/image";

export default function CardTwo() {
    return (
        <>
            <Image className="-rotate- opacity-80"
                src="/assets/images/climbing/montana-out-line.png"
                alt="e"
                width={2000} height={2000}
            />
            <div className="flex flex-row items-center justify-center">
                <Image className="blur-3xl -rotate-55"
                    src="/assets/images/ma_cherry/image_8.png"
                    alt="e"
                    width={1000} height={1000}
                />
            </div>
        </>
    )
}