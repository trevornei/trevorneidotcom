import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col xl:flex-row items-start justify-start p-0 h-[500px] xl:my-28">
                {/* First container for the profile picture */}
                <div className="relative flex items-end xl:w-[500px] xl:h-[500px] overflow-hidden bg-white/10 backdrop-blur-md rounded-badge shadow-lg mx-16">
                    <Image
                        src="/assets/images/ma_cherry/image_2.png"
                        className="absolute inset-0 object-cover blur-2xl -z-10 animate-rotateAndScale"
                        alt="Shoshone"
                        width={500}
                        height={500}
                    />
                    <Image
                        src="/assets/images/profile_pictures/profile_picture.png"
                        className="relative z-10 translate-y-6"
                        alt="Shoshone"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Second container for the blurred DSV2-36 image */}
                <div className="flex flex-col items-start justify-start">
                    <div className="">
                        <h1 className="font-bold xl:text-7xl">WELCOME.</h1>
                        <h1 className="font-bold xl:text-4xl">안녕하세요</h1>

                    </div>

                    <div className="relative flex xl:w-[700px] xl:h-[500px] overflow-hidden bg-white/10 backdrop-blur-md rounded-badge shadow-lg">
                        <div className="relative z-10 p-20">
                            <h3 className="bg-black">
                                Crafting Interconnected Experiences
                            </h3>
                            <p className="text-xl text-ts">
                                I’m Trevor, a front-end developer, cybersecurity enthusiast, and passionate explorer of how technology can connect us in meaningful ways. With a strong foundation in full-stack web development and an ever-growing fascination for ethical hacking, I blend creativity and security into every project I undertake.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
