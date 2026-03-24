"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Initial load ──
      gsap.from(".hero-header", {
        y: -60,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.to("#scrmbl-name", {
        duration: 2.2,
        scrambleText: {
          text: "Trevor Nei",
          chars: "THEINTERNETISAFAD",
          speed: 100,
        },
      });

      gsap.to("#scrmbl-title", {
        duration: 2,
        delay: 0.4,
        scrambleText: {
          text: "Developer. Builder. Co-Founder.",
          chars: "110111001001110111001001",
          delimiter: " ",
          speed: 30,
        },
      });

      // ── Bento cards ──
      gsap.from(".card-amsterdam", { x: 220, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.2 });
      gsap.from(".card-hcarego",   { x: 120, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.4 });
      gsap.from(".card-climbing",  { x: -220, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.5 });
      gsap.from(".card-backpacking", { y: 120, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.6 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 pb-32 pt-20 md:px-10 lg:px-20 max-w-7xl mx-auto"
    >
      {/* ── HEADER ── */}
      <div className="hero-header mb-24 flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-12">
        {/* Profile photo — replaces AI illustration */}
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-white/10 md:h-44 md:w-44">
          <Image
            src="/images/photos/hero.webp"
            alt="Trevor Nei"
            width={400}
            height={400}
            priority
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-y-2 text-center md:items-start md:text-left">
          <h1
            id="scrmbl-name"
            className="font-silkscreen text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Trevor Nei
          </h1>
          <p id="scrmbl-title" className="font-mono text-base text-white/60 md:text-xl">
            Developer. Builder. Co-Founder.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
            Missoula, MT
          </p>
          <div className="mt-3 flex items-center gap-x-6">
            <a href="https://www.github.com/trevornei" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/icons/github-mark-white.webp"
                alt="GitHub"
                width={24}
                height={24}
                className="opacity-50 transition-opacity hover:opacity-100"
              />
            </a>
            <a href="https://www.linkedin.com/in/trevornei-dev/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/icons/LI-In-Bug.webp"
                alt="LinkedIn"
                width={24}
                height={24}
                className="opacity-50 transition-opacity hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* ── Amsterdam — slides from RIGHT, spans 2 cols ── */}
        <div className="card-amsterdam col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md lg:col-span-2">
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src="/images/photos/amsterdam.webp"
              alt="React Summit Amsterdam 2025"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
              className="amsterdam-img object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">
              React Summit · Amsterdam, 2025
            </p>
            <h3 className="mt-3 text-xl font-bold leading-relaxed text-white md:text-2xl">
              IT, Cybersecurity,<br />& Web Development.
            </h3>
          </div>
        </div>

        {/* ── HcareGo — slides from RIGHT ── */}
        <a
          href="https://hcarego.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card-hcarego group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10"
        >
          <div className="absolute inset-8">
            <Image
              src="/images/icons/risorsa-hcarego.webp"
              alt="HcareGo"
              fill
              className="object-contain object-center opacity-20"
            />
          </div>
          <p className="relative font-mono text-xs uppercase tracking-widest text-white/40">Co-Founder</p>
          <div className="relative mt-6">
            <h3 className="text-3xl font-bold text-white">HcareGo.com</h3>
            <p className="mt-2 text-white/60">Healthcare staffing for rural Montana.</p>
          </div>
          <span className="relative mt-8 font-mono text-sm text-white/30 transition-colors group-hover:text-white/70">
            hcarego.com →
          </span>
        </a>

        {/* ── Climbing — slides from LEFT ── */}
        <div className="card-climbing col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src="/images/photos/climbing.webp"
              alt="Rock climbing in Montana"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="climbing-img object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold leading-relaxed text-white">
              I build software the same way I play outside.
            </h3>
          </div>
        </div>

        {/* ── Backpacking — rises from BOTTOM, spans 2 cols ── */}
        <div className="card-backpacking col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md md:col-span-1 lg:col-span-2">
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src="/images/photos/backpacking.webp"
              alt="Backpacking in the mountains"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
              className="backpacking-img object-cover object-bottom grayscale"
            />
            <div
              className="absolute inset-0 backdrop-blur-[2px]"
              style={{
                maskImage: "radial-gradient(circle, transparent 60%, black 95%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 95%)",
              }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold leading-relaxed text-white">
              ...a marathon of sprints 🔄
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
