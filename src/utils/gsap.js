import gsap from "gsap";

export default function initGSAP() {
  gsap.config({ token: process.env.NEXT_PUBLIC_TOKEN });
}
