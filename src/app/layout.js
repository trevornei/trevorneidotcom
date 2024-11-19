import "./globals.css";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initGSAP from "../utils/gsap";

export const metadata = {
  title: "Trevor Nei - Software Engineer",
  description:
    "Trevor Nei is a software engineer based out of Missoula Montana.",
  icons: {
    icon: "/images/CirclesAndSpheres/SVG/circles_79_white.svg",
  },
};

initGSAP();
gsap.config({ token: process.env.NEXT_PUBLIC_TOKEN });
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <head />
      <body className="overflow-x-hidden">
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
