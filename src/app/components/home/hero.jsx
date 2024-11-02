import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="absolute left-[400px] top-[700px] z-30 -rotate-[10deg] bg-tp">
        <h1 className="px-4 py-2 text-4xl font-bold text-black">TREVOR NEI</h1>
      </div>
      <div className="relative mt-28 flex h-1/2 w-10/12 flex-col items-center justify-end rounded-3xl border-2 border-tpink p-0 md:h-auto md:w-10/12 md:flex-row lg:h-[500px] lg:w-10/12 xl:h-[500px] xl:w-10/12 xl:flex-row 2xl:w-10/12">
        {/* PROFILE EXTENDING THE LENGTH OF THE SCREEN. */}
        <div className="2xl:full -z-10 flex h-full w-full flex-col items-end overflow-hidden rounded-3xl rounded-l-3xl shadow-lg backdrop-blur-md sm:h-1/5 md:absolute md:left-0 md:-z-10 md:h-full md:w-full md:items-start md:justify-center lg:absolute lg:left-0 lg:-z-10 lg:w-full lg:flex-row lg:items-start lg:justify-start xl:absolute xl:h-full xl:w-full">
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
            className="relative z-10 translate-y-6 border-r-0 grayscale md:h-full md:w-auto"
            alt="Shoshone"
            width={500}
            height={500}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-end rounded-3xl rounded-l-none md:w-1/2 md:items-end md:rounded-l-none lg:h-full lg:w-96 lg:justify-center lg:rounded-l-none xl:w-1/2 xl:items-end xl:justify-center xl:rounded-l-none 2xl:w-1/2 2xl:rounded-l-none">
          <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-black/60 p-0 shadow-lg backdrop-blur-md md:w-full md:rounded-l-none lg:m-0 lg:h-full lg:w-full lg:items-center lg:justify-center lg:rounded-l-none xl:h-full xl:w-full xl:items-center xl:justify-center xl:rounded-l-none 2xl:rounded-l-none">
            <div className="py-none lg:py-auto xl:py-auto relative z-10 flex flex-col items-center justify-center md:p-4 lg:gap-x-4">
              <h1 className="mx-none font-extrabold text-white md:text-5xl lg:text-6xl xl:mx-8 xl:pb-5 xl:text-6xl">
                SOFTWARE
              </h1>
              <h1 className="font-extrabold text-tp md:text-5xl lg:text-6xl xl:mx-8 xl:text-6xl">
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
                  <div className="flex md:space-x-8 lg:space-x-8 xl:space-x-20">
                    <a
                      href="https://www.github.com/trevornei"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/images/github-mark/github-mark-white.png"
                        alt="Github logo"
                        className="pt-2 md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-16"
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
                        className="pt-2 md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-20"
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
                        className="md:h-auto md:w-16 md:pt-2 lg:h-auto lg:w-16 lg:pt-2"
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
