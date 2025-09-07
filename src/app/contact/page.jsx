import Nav from "../components/Nav";
import "./contact.css";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Contact() {
  return (
    <>
      <Nav className="" />
      <div className="relative z-10 flex min-h-screen items-start justify-start">
      <div className="absolute w-screen h-screen -z-10 left-0">      
        <Spline
          scene="https://prod.spline.design/pbWHDlUueOTih3lo/scene.splinecode" 
        />
      </div>
        <div className="p-4 rounded-md flex w-1/3 flex-row items-center justify-center bg-gradient-to-r from-purple-900/50 to-transparent sm:flex-col">
          <h3 className="text-white text-3xl font-bold">You can find me on</h3>
          <div className="m-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <div className="flex flex-row items-center justify-center">
              <a
                href="https://www.linkedin.com/in/trevornei-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/linkedin-logos/LI-In-Bug.png"
                  alt="LinkedIn"
                  width={100}
                  height={100}
                  className=""
                />
              </a>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a
                href="https://www.github.com/trevornei"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/github-mark/github-mark-white.png"
                  alt="GitHub"
                  width={75}
                  height={75}
                />
              </a>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a
                href="https://x.com/trevv_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/x-logo/logo-white.png"
                  alt="X.com"
                  width={75}
                  height={75}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
