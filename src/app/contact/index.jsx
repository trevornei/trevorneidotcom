import Nav from "../../src/app/components/Nav";
import Footer from "../../src/app/components/Footer";
import "./contact.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Nav className="2x:mb-96 mb-20" />
      <div className="chop relative z-10 mt-24 flex min-h-screen items-center justify-center">
        <div className="contact-box flex w-10/12 flex-row items-center justify-center sm:flex-col 2xl:w-10/12 2xl:py-24">
          <Image
            src="/assets/images/ma_cherry/el 10.png"
            width={500}
            height={500}
            className="blr-img absolute -z-10"
          />
          <h3 className="font-bold">You can find me on</h3>
          <div className="flex flex-col items-center justify-between sm:flex-row">
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
                  className="sm:m-20"
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
        <Footer />
      </div>
    </>
  );
}
