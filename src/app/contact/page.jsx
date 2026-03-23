import Nav from "../components/Nav";
import "../globals.css";
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
        <div className="p-4 rounded-md w-1/3 flex-col items-center justify-center">
            <div className="flex flex-col p-6 items-center justify-center">
              <a
                href="https://www.linkedin.com/in/trevornei-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/LI-In-Bug.png"
                  alt="LinkedIn"
                  width={100}
                  height={100}
                  className=""
                />
              </a>
            </div>
            <div className="flex flex-row p-6 items-center justify-center">
              <a
                href="https://www.github.com/trevornei"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github-mark-white.png"
                  alt="GitHub"
                  width={75}
                  height={75}
                />
              </a>
            </div>
            <div className="flex flex-row p-6 items-center justify-center">
              <a
                href="https://x.com/trevv_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/x-white.png"
                  alt="X.com"
                  width={75}
                  height={75}
                />
              </a>
            </div>
        </div>
      </div>
    </>
  );
}
