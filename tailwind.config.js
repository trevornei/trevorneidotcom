/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text Primary
        tp: "#9cfcc0",
        // Text Secondary
        ts: "#56966e",
        // Text Pink
        tpink: "#d44179",
        // Background Light Green
        bgdg: "#0b1a17",
      },
      animation: {
        // Existing
        "spin-slow": "spin 5s ease infinite",
        "spin-slow-md": "spin 8s ease-in-out infinite",

        // New Animations
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "bounce-slow": "bounce 4s infinite",
        "slide-right": "slideRight 8s ease-in-out infinite",
        "zoom-in": "zoomIn 2s ease-in-out forwards",
        "fade-in": "fadeIn 2.5s ease-out forwards",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        "rotate-y": "rotateY 3s ease infinite",
        tilt: "tilt 3s ease-in-out infinite",
        shake: "shake 1s ease-in-out infinite",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000",
          secondary: "#ff00ff",
          accent: "#00ff00",
          neutral: "#ff00ff",
          "base-100": "#000000",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#fe3849",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
