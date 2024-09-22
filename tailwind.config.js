/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000",
         
          // Text Primary
          tp: "#9cfcc0",

          // Text Secondary
          ts: "#56966e",

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
