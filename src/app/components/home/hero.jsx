import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="flex flex-row items-center justify-center blur-sm">
                <Image src="/assets/images/ma_cherry/image_2.png" alt="Shoshone" width={500} height={500} />
            </div>
        </>
    )
}