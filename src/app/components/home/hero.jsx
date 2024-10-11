import Image from "next/image";

export default function Hero() {
    return (
        <>
        <div className="flex flex-row items-center justify-center">
            <div className="absolute inset-x-0 inset-y-0 flex flex-row items-center justify-center -z-10">
                <div className="absolute flex flex-row items-center justify-center inset-y-28 inset-x-96">
                    <Image
                        src="/images/Dread-Shapes-Volume-2/Dread Shapes Vol 2/PNG/DSV2-36.png"
                        width={75}
                        height={75}
                        alt="Picture of the author"
                        className=" animate-slide-right"
                    />
                </div>
                <Image
                    src="/images/Dread-Shapes-Volume-2/Dread Shapes Vol 2/PNG/DSV2-07.png"
                    width={700}
                    height={700}
                    alt="Picture of the author"
                    className=""
                />
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                    <Image
                        src="/images/CirclesAndSpheres/SVG/circles_26_white.svg"
                        width={210}
                        height={210}
                        alt="Picture of the author"
                        className="animate-spin-slow-md"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-row items-center justify-center">
                    <Image
                        src="/images/CirclesAndSpheres/SVG/circles_57_white.svg"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="-translate-x-96 animate-pulse-fast"
                    />
                </div>
            </div>
        </div>
        </>
    )
}
