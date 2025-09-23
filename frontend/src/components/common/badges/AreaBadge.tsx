import React from "react";

import { Tooltip } from "@/components/common/hints";
import { Motion } from "@/components/common/utils";
import { Area } from "@/types";

interface Props {
  area: Area;
}

export const AreaBadge = ({ area }: Props) => {
  return (
    <Tooltip tooltipId={area.id} content={area.name} className="bg-background-light">
      <Motion whileHover={{ scale: 1.05 }}>
        <div className="icon-shine inline-flex text-sm font-medium select-none">
          <div className="border-background-light bg-background-light cursor-pointer rounded-l border px-0.5 py-0.5 text-white">
            #
          </div>
          <div className="border-background-light cursor-pointer rounded-r border border-l-0 bg-blue-900 px-2 py-0.5 text-white">
            {area.name}
          </div>
        </div>
      </Motion>
    </Tooltip>
  );
};
