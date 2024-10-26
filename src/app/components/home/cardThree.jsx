import React from "react";
import Image from "next/image";

export default function CardThree() {
    return (
        <>
            <div className="mt-36 grid grid-cols-4 gap-16 xl:w-10/12">
                <div className="flex flex-row glassy p-8 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/x-logo/logo-white.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            Title
                        </h3>
                        <h4 className="">
                            Subtitle
                        </h4>
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row glassy p-8 col-start-2 col-span-3 justify-items-end">
                    <Image
                        src="/assets/images/x-logo/logo-white.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            Title
                        </h3>
                        <h4 className="">
                            Subtitle
                        </h4>
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row glass p-8 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/x-logo/logo-white.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            Title
                        </h3>
                        <h4 className="">
                            Subtitle
                        </h4>
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row glass p-8 col-start-2 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/x-logo/logo-white.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            Title
                        </h3>
                        <h4 className="">
                            Subtitle
                        </h4>
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}