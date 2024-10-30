/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white-sm': '0 1px 1px rgba(255, 255, 255, 0.1)',
        'white-md': '0 4px 3px rgba(255, 255, 255, 0.1)',
        'white-lg': '0 10px 8px rgba(255, 255, 255, 0.1)',
        'white-xl': '0 20px 15px rgba(255, 255, 255, 0.1)',
        'white-2xl': '0 25px 25px rgba(255, 255, 255, 0.1)',
      },
      rotate: {
        '35': '35deg',
        '55': '55deg'
      },
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
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
        silkscreen: ['Silkscreen', 'monospace'],
        rubikglitch: ['Rubik Glitch', 'monospace'],
      },
      animation: {
        // Existing
        "spin-slow": "spin 5s ease infinite",
        "spin-slow-md": "spin 8s ease-in-out infinite",

        // New Animations
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-once": "grow 1.5s cubic-bezier(0.4, 0, 0.6, 1) 0",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "bounce-slow": "bounce 4s infinite",
        "slide-right": "slideRight 8s ease-in-out infinite",
        "zoom-in": "zoomIn 2s ease-in-out forwards",
        "fade-in": "fadeIn 2.5s ease-out forwards",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        "rotate-y": "rotateY 3s ease infinite",
        tilt: "tilt 3s ease-in-out infinite",
        shake: "shake 1s ease-in-out infinite",
        rotateAndScale: 'rotateAndScale 8s linear infinite',
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
        rotateAndScale: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '20%': { transform: 'rotate(72deg) scale(1.2)' },
          '40%': { transform: 'rotate(144deg) scale(1.5)' },
          '60%': { transform: 'rotate(216deg) scale(1.3)' },
          '80%': { transform: 'rotate(288deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
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
