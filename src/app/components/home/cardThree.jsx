import React from "react";
import Image from "next/image";

export default function CardThree() {
    return (
        <>
            <div className="relative mt-36 grid grid-cols-4 gap-16 xl:w-10/12">
                <Image
                    src="/assets/images/ma_cherry/el 10.png"
                    className="absolute blur-[300px] -translate-x-32 inset-0  rotate-35"
                    alt="Another logo"
                    width={800}
                    height={800}
                />
                <Image
                    src="/assets/images/ma_cherry/el 10.png"
                    className="absolute translate-x-72 translate-y-56 blur-[600px] bottom-0 right-0  rotate-180"
                    alt="Another logo"
                    width={800}
                    height={800}
                />
                {/*Card One */}
                <div className="flex flex-row glassy p-8 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/umt-logo/logo.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            University of Montana (2024)
                        </h3>
                        <h4 className="">
                            Freshman studying Computer Science – Software Engineering B.A.
                        </h4>
                        <p className="">

                        </p>
                    </div>
                </div>
                <div className="flex flex-row glassy p-8 col-start-2 col-span-3 justify-items-end">
                    <Image
                        src="/assets/images/certs/coursera-cyber-cert.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                           Google Cybersecurity Certificate 
                        </h3>
                        <h4 className="">
                           ≈160 Hrs. 
                        </h4>
                        <p className="">
                        </p>
                    </div>
                </div>
                
                {/*Card Two */}
                <div className="flex flex-row glassy p-8 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/certs/intermediate_python_cert_Trevor_Nei.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                           Intermediate Python – Front End Masters 
                        </h3>
                        <h4 className="">
                            Subtitle
                        </h4>
                        <p className="">

                        </p>
                    </div>
                </div>
                
                {/*Card Three */}
                <div className="flex flex-row glassy p-8 col-start-2 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/certs/promineo-trevor-nei.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                           Front End Developer Bootcamp 
                        </h3>
                        <h4 className="">
                            Promineo
                        </h4>
                        <p className="">

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}