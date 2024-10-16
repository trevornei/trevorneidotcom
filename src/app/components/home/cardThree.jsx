import React from "react";
import Image from "next/image";

export default function CardTwo() {
    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <Image className="blur-sm rotate-45"
                    src="/assets/images/ma_cherry/image_8.png" 
                    alt="Shoshone" 
                    width={1000} height={1000} 
                 />
            </div>
        </>
    )
}