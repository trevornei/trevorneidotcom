import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardTwo() {
    return (
        <>
            <Image
                className="absolute overflow-x-hidden inset-0 -z-20 blur-[200px] -rotate-55 " // Added opacity to make it subtle
                src="/assets/images/ma_cherry/image_8.png"
                alt="Decorative Background"
                width={3000}
                height={3000}
            />
            <div className="relative flex flex-row items-center overflow-visible mt-24 justify-center">

                {/* Decorative Background Image */}

                {/* Foreground Icons */}
                <div className="flex xl:space-x-24">
                    <a href="https://www.github.com/trevornei" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/assets/images/github-mark/github-mark-white.png"
                            alt="Github logo"
                            width={100}
                            height={100}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/trevornei-dev/" target="_blank" rel="noopener noreferrer" >
                        <Image
                            src="/assets/images/linkedin-logos/LI-In-Bug.png"
                            alt="LinkedIn logo"
                            width={100}
                            height={100}
                        />
                    </a>
                    <a href="https://x.com/trevv_dev" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/assets/images/x-logo/logo-white.png"
                            alt="Another logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
            </div>
        </>
    )
}
