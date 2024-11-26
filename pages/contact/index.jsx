import Nav from "../../src/app/components/Nav";
import Footer from "../../src/app/components/Footer";
import "./contact.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Nav className="2x:mb-96" />
      <div className="flex min-h-screen items-center justify-center">
        <div className="glassy flex w-10/12 flex-col items-center justify-center 2xl:w-10/12 2xl:py-24">
          <h1 className="text-5xl font-bold">You can find me on</h1>
          <div className="flex flex-row gap-x-16">
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
                />
              </a>
            </div>
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
        <Footer />
      </div>
    </>
  );
}
