// import Metadata from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
// import { Icons } from "../components/Icons"; // Fixed with Copilot
import SearchBar from "../components/SearchBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


{ /* children are needed later */ }

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen isolate overflow-hidden border-b border-grey-200 bg-white text-slate-900">
          { /* Grid SVG Background layer */ }
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'>
            <defs>
              <pattern
                id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'>
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
            />
          </svg>
          { /* Tailwindclasses sm = Small devices and upwards / lg = large device //<Icons.Sparkles className="h-16 w-16" />
          // This here will be the major background design */ }
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
            <div className="h-full w-full flex flex-col items-center gap-4">
              
              <Image src="/my-icon.png" alt="Logo" width={340} height={84} className="h-26 w-106" />

              
              <h1 className="tracking-tight text-4xl sm:text-6xl font-bold">FindYourModelcar</h1>
              <h2 className="tracking-tight text-1xl sm:text-2xl font-bold">Does your car exist as a 1:64-scaled Hot Wheels model?</h2>
            <p className="max-w-xl text-center test-1xl text-slate-700">
              Test our specially developped modelcar hybrid search engine prototype that enhances search accuracy by 
              querying semantically related results:
            </p>
            {/* SearchBar custom component */}
            <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col">
            <SearchBar />

            {/* children are needed later for page content */}
              {children}
            </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
