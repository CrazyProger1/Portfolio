import Image from "next/image";
import React from "react";

import { Motion } from "@/components/common/utils";
import { Job } from "@/types";

export const JobItem = (item: Job, index: number) => {
  return (
    <div className="pb-8">
      <div className={"flex flex-col " + (index % 2 === 1 ? "items-end" : "")}>
        <Motion
          whileHover={{ scale: 1.05 }}
          className="icon-shine relative max-w-fit cursor-pointer rounded-lg text-white"
        >
          <Image
            className="rounded-lg"
            src={item.image}
            alt={item.description}
            width={200}
            height={200}
          />
          <div className="absolute bottom-0 left-0 w-full rounded-b-lg bg-blue-950/95 p-2">
            {item.name}
          </div>
        </Motion>
      </div>
    </div>
  );
};
