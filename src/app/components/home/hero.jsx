import Image from "next/image";

export default function Hero() {
    return (
        <>

            <div className="relative flex flex-row pt-16 xl:flex-row items-center justify-end w-3/4  rounded-3xl h-1/2 p-0 xl:h-[500px] xl:w-10/12 xl:py-10  xl:my-20">
                {/* First container for the profile picture */}

                {/* Second container for the blurred DSV2-36 image */}
                    <div className="absolute -z-10 flex flex-row items-end w-11/12 h-1/2 xl:w-full xl:h-[500px] overflow-hidden bg-black/10 backdrop-blur-md shadow-lg rounded-l-3xl border-8 border-black/5 ">
                        <Image
                            src="/assets/images/ma_cherry/image_2.png"
                            className="absolute inset-0 object-cover blur-2xl -z-10 animate-rotateAndScale"
                            alt="Shoshone"
                            width={800}
                            height={800}
                        />
                        <Image
                            src="/assets/images/ma_cherry/image_2.png"
                            className="absolute inset-0 rotate-180 object-cover blur-md -z-10 animate-rotateAndScale saturate-200"
                            alt="Shoshone"
                            width={600}
                            height={600}
                        />
                        <Image
                            src="/assets/images/profile_pictures/profile_picture.png"
                            className="relative z-10 border-r-0  grayscale"
                            alt="Shoshone"
                            width={500}
                            height={500}
                        />
                    </div>
                <div className="flex flex-col items-start justify-start ">

                    <div className="relative  p-8 flex flex-col xl:w-[600px] xl:h-[500px] overflow-hidden bg-black/40 backdrop-blur-md  shadow-lg xl:ml-10">
                        <div className="relative z-10 flex gap-x-4 flex-col items-start justify-center">
                            <h1 className=" font-extrabold text-white xl:text-6xl xl:mx-8 xl:pb-5">
                                SOFTWARE
                            </h1>
                            <h1 className="font-extrabold text-grey xl:text-6xl xl:mx-8">
                                ENGINEER
                            </h1>
                            <div className="flex flex-row items-center justify-center w-full h-full ">
                                <Image
                                    className="absolute overflow-x-hidden inset-0 -z-20 blur-[200px] -rotate-55 " // Added opacity to make it subtle
                                    src="/assets/images/ma_cherry/image_8.png"
                                    alt="Decorative Background"
                                    width={3000}
                                    height={3000}
                                />
                                <div className="relative flex flex-row items-center overflow-visible mt-24  justify-center">

                                    {/* Decorative Background Image */}

                                    {/* Foreground Icons */}
                                    <div className="flex xl:space-x-20">
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
                                                className="pt-2"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}