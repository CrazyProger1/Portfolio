import { FC } from "react";

interface HorizontalDividerProps {
  text: string;
}

const HorizontalDivider: FC<HorizontalDividerProps> = ({ text }) => {
  return (
    <div className="flex flex-row items-center">
      <h2 className="text-secondary font-primary select-none text-5xl min-w-fit">
        {text}
      </h2>
      <hr className="border-secondary border w-full ml-5 opacity-50" />
    </div>
  );
};

export default HorizontalDivider;
