import React from "react";

import { Motion } from "@/components/common/utils";
import { HobbyTag } from "@/types";

interface Props {
  tag: HobbyTag;
}

export const TagBadge = ({ tag }: Props) => {
  return (
    <Motion whileHover={{ scale: 1.05 }}>
      <div className="icon-shine inline-flex text-sm font-medium select-none">
        <div className="border-background-light bg-background-light cursor-pointer rounded-l border px-0.5 py-0.5 text-white">
          #
        </div>
        <div className="border-background-light cursor-pointer rounded-r border border-l-0 bg-[#4F4B4B] px-2 py-0.5 text-white">
          {tag.name}
        </div>
      </div>
    </Motion>
  );
};
