import Image from "next/image";
import React from "react";

import MeImg from "@/assets/me.webp";
import { Motion } from "@/components/common/utils";

export const IntroductionSection = () => {
  return (
    <div className="intro-section flex flex-col items-center justify-evenly gap-8 text-center select-none lg:flex-row lg:gap-12 lg:text-left">
      <Motion
        whileHover={{ scale: 1.05 }}
        className="text-shine flex min-w-0 cursor-pointer flex-col lg:flex-1"
      >
        <div className="text-xl lg:text-2xl">Hi, I&#39;m Nikolay,</div>
        <div className="text-4xl font-extrabold lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Fullstack Developer
        </div>
      </Motion>
      <Motion whileHover={{ scale: 1.05 }} className="intro-photo shrink-0 cursor-pointer">
        <Image
          alt="Me Photo"
          className="h-auto w-full rounded-4xl"
          src={MeImg}
          width={1000}
          height={1498}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={true}
          fetchPriority="high"
        />
      </Motion>
    </div>
  );
};
