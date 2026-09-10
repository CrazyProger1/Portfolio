import React from "react";

import { SmoothLink } from "@/components/common/utils";
import { HobbyItem } from "@/components/modules/hobbies/cards";
import { getHobbies } from "@/services";
import { Hobby, SearchParams } from "@/types";

import { HobbyModal } from "../modals";

type Props = {
  params: SearchParams;
};

export const HobbiesSection = async ({ params }: Props) => {
  const hobbiesResponse = await getHobbies();

  let hobbies: Hobby[] = [];

  if (hobbiesResponse.success) {
    hobbies = hobbiesResponse.results;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-8 lg:flex-row lg:gap-12">
      {hobbies.map((hobby) => (
        <SmoothLink href={`?hobby=${hobby.id}`} className="w-full lg:w-1/2" key={hobby.id}>
          <HobbyItem hobby={hobby} />
        </SmoothLink>
      ))}
      <HobbyModal hobby={params.hobby} />
    </div>
  );
};
