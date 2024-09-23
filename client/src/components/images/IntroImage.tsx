"use client";

import { FC } from "react";
import MotionWrapper from "@/components/wrappers/MotionWrapper";

interface IntroImageProps {
  src: string;
}

const IntroImage: FC<IntroImageProps> = ({ src }) => {
  return (
    <MotionWrapper whileHover={{ scale: 1.05 }}>
      <img
        className="rounded-3xl max-w-96 hover:cursor-pointer hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.3)]"
        src={src}
        alt="image-intro"
      />
    </MotionWrapper>
  );
};

export default IntroImage;
