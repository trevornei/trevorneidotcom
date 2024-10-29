import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col xl:flex-row items-start justify-start p-0 xl:h-[500px] xl:w-10/12 xl:my-28">
                {/* First container for the profile picture */}
                <div className="relative flex items-end xl:w-[500px] xl:h-[500px] overflow-hidden bg-white/10 backdrop-blur-md shadow-lg  rounded-tl-full rounded-bl-full border-2 border-tp">
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
                        className="relative z-10  grayscale"
                        alt="Shoshone"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Second container for the blurred DSV2-36 image */}
                <div className="flex flex-col items-start justify-start ml-8">


                    <div className="relative border-2 border-tp p-8 flex flex-col xl:w-[700px] xl:h-[500px] overflow-hidden bg-white/10 backdrop-blur-md rounded-r-badge shadow-lg">
                        <div className="relative z-10 flex gap-x-4 flex-col items-start justify-start">
                            <div className="">
                                <h1 className="font-bold xl:pb-4 xl:text-7xl">WELCOME.</h1>
                            </div>
                            <h3 className=" font-semibold">
                                👋 I’m Trevor -----&gt;
                            </h3>
                            <h3 className="text-tp font-bold">
                                Developer. Climber. Nerd.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
