import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative mt-28 flex h-1/2 w-3/4 flex-col items-center justify-end rounded-3xl border-2 border-tpink p-0 md:h-auto md:w-10/12 md:flex-row lg:h-[500px] lg:w-10/12 xl:h-[500px] xl:w-10/12 xl:flex-row">
        {/* First container for the profile picture */}

        {/* Second container for the blurred DSV2-36 image */}
        <div className="-z-10 flex h-full w-1/2 w-full flex-row items-end overflow-hidden rounded-3xl rounded-l-3xl shadow-lg backdrop-blur-md md:absolute md:left-0 md:-z-10 md:h-full md:w-full lg:absolute lg:left-0 lg:-z-10 lg:w-full xl:absolute xl:h-full xl:w-full">
          <Image
            src="/assets/images/ma_cherry/image_2.png"
            className="absolute inset-0 -z-10 animate-rotateAndScale object-cover blur-2xl"
            alt="Shoshone"
            width={800}
            height={800}
          />
          <Image
            src="/assets/images/ma_cherry/image_2.png"
            className="animate-rotateAndScale-7s absolute right-0 -z-10 rotate-90 object-cover blur-2xl saturate-200"
            alt="Shoshone"
            width={600}
            height={600}
          />
          <Image
            src="/assets/images/profile_pictures/profile_picture.png"
            className="relative z-10 border-r-0 grayscale md:h-full md:w-auto"
            alt="Shoshone"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center justify-end rounded-3xl rounded-l-none md:w-1/2 md:items-end md:rounded-l-none lg:h-full lg:w-1/2 lg:justify-center lg:rounded-l-none xl:items-end xl:justify-center xl:rounded-l-none 2xl:rounded-l-none">
          <div className="relative flex w-1/2 flex-col overflow-hidden rounded-3xl bg-black/40 p-8 shadow-lg backdrop-blur-md md:w-full md:rounded-l-none lg:m-0 lg:h-full lg:w-full lg:items-center lg:justify-center lg:rounded-l-none xl:h-full xl:w-full xl:items-center xl:justify-center xl:rounded-l-none 2xl:rounded-l-none">
            <div className="lg:py-auto xl:py-auto relative z-10 flex flex-col items-center justify-center gap-x-4">
              <h1 className="font-extrabold text-white xl:mx-8 xl:pb-5 xl:text-6xl">
                SOFTWARE
              </h1>
              <h1 className="text-grey font-extrabold xl:mx-8 xl:text-6xl">
                ENGINEER
              </h1>
              <div className="flex h-full w-full flex-row items-center justify-center">
                <Image
                  className="absolute inset-0 -z-20 -rotate-55 overflow-x-hidden blur-[200px]" // Added opacity to make it subtle
                  src="/assets/images/ma_cherry/image_8.png"
                  alt="Decorative Background"
                  width={3000}
                  height={3000}
                />
                <div className="relative mt-24 flex flex-row items-center justify-center overflow-visible">
                  {/* Decorative Background Image */}

                  {/* Foreground Icons */}
                  <div className="flex xl:space-x-20">
                    <a
                      href="https://www.github.com/trevornei"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/images/github-mark/github-mark-white.png"
                        alt="Github logo"
                        width={100}
                        height={100}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/trevornei-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/images/linkedin-logos/LI-In-Bug.png"
                        alt="LinkedIn logo"
                        className="pt-2"
                        width={100}
                        height={100}
                      />
                    </a>
                    <a
                      href="https://x.com/trevv_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/images/x-logo/logo-white.png"
                        alt="Another logo"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
