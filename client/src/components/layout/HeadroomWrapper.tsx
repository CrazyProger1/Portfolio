"use client";

import { FC, ReactNode } from "react";
import Headroom from "react-headroom";

interface HeadroomWrapperProps {
  children: ReactNode;
}

const HeadroomWrapper: FC<HeadroomWrapperProps> = ({ children }) => {
  return <Headroom>{children}</Headroom>;
};

export default HeadroomWrapper;
