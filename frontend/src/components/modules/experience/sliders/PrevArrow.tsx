import React from "react";
import { FaChevronLeft } from "react-icons/fa";

import { Motion } from "@/components/common/utils";

export const PrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <Motion
      whileHover={{ scale: 1.1 }}
      className="slick-arrow icon-shine absolute top-1/2 -left-16 z-10 -translate-y-1/2 cursor-pointer p-3 text-white"
      onClick={onClick}
    >
      <FaChevronLeft size={32} />
    </Motion>
  );
};
