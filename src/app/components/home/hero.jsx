import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex flex-row items-center justify-center blur-sm">
                <Image src="/assets/images/climbing/shoshone.jpeg" alt="Shoshone" width={500} height={500} />
                <div className="w-40 h-500 bg-green-500 rotate-90"></div>
                <Image src="/assets/images/climbing/perry_shoshone.jpeg" alt="Shoshone" width={500} height={500} />
                <div className="w-40 h-500 bg-green-500 rotate-90"></div>
                <Image src="/assets/images/climbing/blodgett_creek.jpeg" alt="Shoshone" width={500} height={500} />
                <div className="w-40 h-500 bg-green-500 rotate-90"></div>
            </div>
            <div className="flex flex-row items-center justify-center">

            </div>
        </>
    )
}