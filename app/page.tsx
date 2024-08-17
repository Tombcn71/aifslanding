import Features from "@/components/Features";
import Prijzen from "@/components/Prijzen";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 ">
        <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-7xl text-slate-800 font-extrabold tracking-normal ">
          Laat{" "}
          <span className="relative whitespace-nowrap  text-sky-600">
            <span className="relative">je klanten</span>
          </span>{" "}
          Professionele Portetfoto's maken met AI✨
        </h1>
        <h2 className="mx-auto mt-12 mb-12 max-w-xl text-lg sm:text-gray-800  text-gray-800 leading-7">
          Blijf vooroplopen en laat je klanten online AI Portetfoto's genereren
          in HD studio kwaliteit met de app van AI fotosesie, makkelijk door ons
          in 1 week geintegreerd.
        </h2>
        <Link href="/login">
          {" "}
          <button className="border rounded-lg  h-14 px-10 m-2 text-xl text-white hover:bg-sky-600 bg-sky-600">
            Start jouw AI transitie
          </button>
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col"></div>
          </div>
        </div>
      </main>
      <Features />
      <div>
        {" "}
        <Prijzen />
      </div>
    </div>
  );
}
