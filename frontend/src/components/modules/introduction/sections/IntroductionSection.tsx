import Image from "next/image";
import React from "react";

import MeImg from "@/assets/me.webp";
import { Motion } from "@/components/common/utils";

export const IntroductionSection = () => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-8 text-center select-none lg:flex-row lg:text-left">
      <Motion whileHover={{ scale: 1.05 }} className="text-shine flex cursor-pointer flex-col">
        <div className="text-xl">Hi, I&#39;m Nikolay,</div>
        <div className="text-4xl font-extrabold lg:text-6xl">Fullstack Developer</div>
      </Motion>
      <Motion whileHover={{ scale: 1.05 }} className="cursor-pointer">
        <Image
          alt="Me Photo"
          className="rounded-4xl"
          src={MeImg}
          width={400}
          height={800}
          sizes="(max-width: 768px) 100vw, 400px"
          priority={true}
        />
      </Motion>
    </div>
  );
};
