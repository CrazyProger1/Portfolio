import React from "react";

interface Props {
  id?: string;
  text: string;
}

export const HorizontalDivider = ({ id, text }: Props) => {
  return (
    <div id={id} className="flex flex-row items-center gap-4 whitespace-nowrap select-none">
      <hr className="w-full border border-white opacity-50 md:hidden" />
      <div className="text-4xl">{text}</div>
      <hr className="w-full border border-white opacity-50" />
    </div>
  );
};
