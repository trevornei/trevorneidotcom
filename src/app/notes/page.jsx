/*Next*/
"use client";
import Image from 'next/image';


/*React*/
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import "./notes.css";


/*GSAP*/
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import _GSDevTools from "gsap/GSDevTools";


/*Firebase*/
import { db } from "../../firebase/firebase-config.jsx" 
import { doc, getDoc } from "firebase/firestore"

async function getNotes() {
    /* docRef, docSnap*/
    const docRef = doc(db)
    
}

export default function Notes() {
    const [isHovered, setHovered] = useState(false);
    useEffect(() => {
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

        // Wait for DOM elements
        setTimeout(() => {
            const smoother = ScrollSmoother.create({
                smooth: 5,
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
            });

            return () => smoother.kill();
        }, 0); // Short delay to ensure DOM exists
    }, []);
    useEffect(() => {
        const element = document.querySelector(".hvr");

        if (element) {
            const handleMouseOver = () => {
                element.classList.add(
                    "bg-gradient-to-r",
                    "from-purple-500/20",
                    "to-transparent",
                    "backdrop-blur-2xl",
                );
                setHovered(true);
            };

            const handleMouseOut = () => {
                element.classList.remove(
                    "bg-gradient-to-r",
                    "from-purple-500/20",
                    "to-transparent",
                    "backdrop-blur-2xl",
                );
                setHovered(false);
            };

            element.addEventListener("mouseover", handleMouseOver);
            element.addEventListener("mouseout", handleMouseOut);

            return () => {
                element.removeEventListener("mouseover", handleMouseOver);
                element.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, []);

    
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Nav />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-auto flex w-10/12 flex-col items-start justify-center xl:mt-8 2xl:mt-10">
                        <div className="sm: px-2 font-bold xl:mb-4">
                            <h1>Welcome.</h1>
                            <div className="flex h-full w-full flex-row">
                                <p className="bg-gradient-to-r from-purple-300 to-slate-200 bg-clip-text text-transparent">
                                    Notes: Tech, Travel, Ramblings.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-white rounded-lg w-10/12 h-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 ">
                            
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}
