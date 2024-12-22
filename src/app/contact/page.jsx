import Nav from "../components/Nav";
import "./contact.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Nav className="" />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="contact-box flex w-10/12 flex-row items-center justify-center bg-gradient-to-r from-purple-500/30 to-tp/40 sm:flex-col">
          <h3 className="font-bold">You can find me on</h3>
          <div className="m-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
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
