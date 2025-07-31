import React from "react";

interface Props {
  text: string;
}

export const HorizontalDivider = ({ text }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4 whitespace-nowrap select-none">
      <div className="text-4xl">{text}</div>
      <hr className="w-full border border-white opacity-50" />
    </div>
  );
};
