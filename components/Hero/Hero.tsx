"use client";

import Image from "next/image";
import Button from "../Button";
import CategoryHero from "./CategoryHero";
import CategoriesHero from "./CategoriesHero";

function Hero() {
  return (
    <div>
      <section className="bg-transparent">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <Image
              className="mx-auto p-5"
              src={`${process.env.NEXT_PUBLIC_SITEURL}/images/disney-plus-logo-white.png`}
              alt="Disney+"
              width={500}
              height={400}
            />
            <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Tus historias favoritas, todas en un mismo lugar.
            </h1>

            <div className="flex justify-center gap-5 p-5">
              <Button
                label="EXPLORAR"
                onClick={() => console.log("explorar")}
              />
              <Button
                label="SUSCRIBITE AHORA"
                onClick={() => console.log("explorar")}
              />
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <CategoriesHero />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
