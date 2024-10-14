import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex flex-row items-center justify-center blur-sm">
                <Image src="/assets/images/climbing/shoshone.jpeg" alt="Shoshone" width={500} height={500} />
                <Image src="/assets/images/climbing/perry_shoshone.jpeg" alt="Shoshone" width={500} height={500} />
                <Image src="/assets/images/climbing/blodgett_creek.jpeg" alt="Shoshone" width={500} height={500} />
            </div>
            <div className="flex flex-row items-center justify-center">

            </div>
        </>
    )
}