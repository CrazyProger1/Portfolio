import Image from "next/image";
import React from "react";

import { Motion } from "@/components/common/utils";

export const IntroductionSection = () => {
  return (
    <div className="flex items-center justify-evenly select-none sm:flex-col md:flex-row lg:flex-row">
      <Motion whileHover={{ scale: 1.05 }} className="text-shine flex cursor-pointer flex-col">
        <div className="text-xl">Hi, I&#39;m Nikolay,</div>
        <div className="text-6xl font-extrabold">Fullstack Developer</div>
      </Motion>
      <Motion whileHover={{ scale: 1.05 }} className="cursor-pointer">
        <Image
          alt="Me Photo"
          className="rounded-4xl"
          src="/images/me.jpg"
          width={400}
          height={800}
        />
      </Motion>
    </div>
  );
};
