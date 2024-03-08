import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="container mx-auto px-5 my-0">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/abc.png"
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            <Link
              href="https://nextjs.org/"
              className="underline hover:text-success duration-200 transition-colors"
            >
              Next.js
            </Link>
          </h4>
        </section>
      </div>

      <div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Arise Business Club
        </h1>
      </div>
    </main>
  );
};
