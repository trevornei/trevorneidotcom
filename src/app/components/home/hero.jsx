import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col xl:flex-row items-start justify-start p-0 h-[500px] xl:my-28"> 
                <div className="relative flex items-end xl:w-[500px] -rotate-6 xl:h-[500px] overflow-hidden bg-white/20 backdrop-blur-md rounded-badge shadow-lg mx-16"> 
                    <Image
                        src="/assets/images/ma_cherry/image_2.png"
                        className="absolute inset-0 object-cover blur-2xl -z-10 animate-rotateAndScale" 
                        alt="Shoshone"
                        width={500}
                        height={500}
                    />
                    <Image
                        src="/assets/images/profile_pictures/profile_picture.png"
                        className="relative z-10 translate-y-6 rotate-6" 
                        alt="Shoshone"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="">
                    <h1 className="font-bold xl:text-7xl">WELCOME.</h1>
                    <h1 className="font-bold xl:text-4xl">안녕하세요</h1>
                </div>
            </div>
        </>
    );
}
