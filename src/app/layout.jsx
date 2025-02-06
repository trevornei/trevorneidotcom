import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <head />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <body className="overflow-x-hidden">
            <div id="smooth-content">{children}</div>
            <SpeedInsights />
            <Analytics />
          </body>
        </div>
      </div>
    </html>
  );
}
