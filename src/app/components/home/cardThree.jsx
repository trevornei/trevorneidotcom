import React from "react";
import Image from "next/image";

export default function CardThree() {
    return (
        <>

            <div className="relative mt-36 grid grid-cols-4 grid-rows-5 gap-16 xl:w-10/12 xl:mb-20">
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
                <div className="row-start-2">
                    <h1 className="font-extrabold text-tpink">
                       EDUCATION 
                    </h1>
                </div>
                <div className="row-start-3">
                    <h1 className="font-extrabold text-tpink">
                       CERTIFICATES 
                    </h1>
                </div>
                <div className="flex flex-row glassy row-start-2 col-start-2 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/umt-logo/logo.png"
                        alt="Another logo"
                        className="object-contain"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            University of Montana (2024)
                        </h3>
                        <h4 className="">
                            Studying Computer Science – Software Engineering B.A.
                        </h4>
                        <p className="">
                        I am currently pursuing a comprehensive education in various programming languages and frameworks, including JavaScript, Python, Go, GSAP, React, NextJS, and Vite. My focus is on mastering both front-end and back-end development to enhance my skills as a software engineer. Through these studies, I aim to build a solid foundation to tackle complex software engineering challenges.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row glassy row-start-3 col-start-2 col-span-3 justify-items-end">
                    <Image
                        src="/assets/images/certs/coursera-cyber-cert.png"
                        alt="Another logo"
                        className="object-none"
                        width={300}
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
                        The Google Cybersecurity Certificate provided me with a solid foundation in cybersecurity principles and practices. Through approximately 160 hours of intensive coursework, I gained hands-on experience in identifying and mitigating security threats. This certification has significantly enhanced my understanding of cybersecurity, preparing me to tackle real-world challenges in the field.
                        </p>
                    </div>
                </div>

                {/*Card Two */}
                <div className="flex flex-row glassy row-start-4 col-span-3 col-start-2 justify-items-start">
                    <Image
                        src="/assets/images/certs/intermediate_python_cert_Trevor_Nei.png"
                        alt="Another logo"
                        className="object-none"
                        width={300}
                        height={100}
                    />
                    <div className="flex flex-col">
                        <h3 className="">
                            Intermediate Python
                        </h3>
                        <h4 className="">
                            Front End Masters
                        </h4>
                        <p className="">

                        </p>
                    </div>
                </div>

                {/*Card Three */}
                <div className="flex flex-row glassy row-start-5 col-start-2 col-span-3 justify-items-start">
                    <Image
                        src="/assets/images/certs/promineo-trevor-nei.png"
                        alt="Another logo"
                        className="object-none"
                        width={300}
                        height={100}
                    />
                    {/* Text Area */}
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