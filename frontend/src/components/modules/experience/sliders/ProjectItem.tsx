import Image from "next/image";
import React from "react";
import { FaCodeBranch, FaStar } from "react-icons/fa";

import { Motion } from "@/components/common/utils";
import { Project } from "@/types";

type Props = {
  project: Project;
};

export const ProjectItem = ({ project }: Props) => {
  const { image, name, metrics, version, started_at, ended_at } = project;

  return (
    <Motion
      whileHover={{ scale: 1.05 }}
      className="icon-shine flex cursor-pointer flex-col items-center rounded-lg p-10 sm:p-20 lg:p-20 xl:p-20 2xl:p-24"
    >
      <Image
        src={image}
        alt="Project Image"
        width={300}
        height={300}
        className="icon-shine-default rounded-lg object-cover"
      />
      <div className="w-full rounded-b-lg p-2">
        <div className="flex flex-col items-center justify-between justify-items-center">
          <div>{name}</div>
          <div className="flex flex-row gap-3 text-sm text-gray-300">
            <div className="flex flex-row items-center gap-1">
              <FaCodeBranch />
              <div>{version}</div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <FaStar />
              <div>{metrics?.github_stars || 0}</div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
};
