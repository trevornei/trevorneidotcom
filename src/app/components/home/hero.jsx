import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col xl:flex-row items-start justify-start p-0 xl:h-[500px] xl:w-10/12 xl:py-10 xl:my-20">
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
                <div className="flex flex-col items-start justify-start  m-y-10">


                    <div className="relative border-2 border-tp p-8 flex flex-col xl:w-[700px] xl:h-[500px] overflow-hidden bg-white/10 backdrop-blur-md  shadow-lg">
                        <div className="relative z-10 flex gap-x-4 flex-col items-start justify-start">
                           <h1 className=" font-extrabold text-white xl:text-8xl">
                            SOFTWARE 
                           </h1> 
                           <h1 className="font-extrabold text-grey xl:text-8xl">
                            ENGINEER 
                           </h1> 
                          <div className="flex flex-row items-center justify-start w-full h-full">
                            <div className="bg-blue-400 m-10 ml-0 xl:w-1/3 xl:h-64 flex flex-col items-center justify-start">
                                
                            </div> 
                            <div className="bg-blue-400/40 m-10 xl:w-1/3 xl:h-64 flex flex-col items-center justify-start">
                                
                            </div>   
                          </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}