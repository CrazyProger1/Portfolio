"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const Motion = ({ children, ...props }: Props) => {
  return <motion.div {...props}>{children}</motion.div>;
};
