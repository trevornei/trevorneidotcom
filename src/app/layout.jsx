"use client";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import _GSDevTools from "gsap/GSDevTools";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function RootLayout({ children }) {
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

  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <head />
      <body className="overflow-x-hidden">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div>{children}</div>
            <SpeedInsights />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
