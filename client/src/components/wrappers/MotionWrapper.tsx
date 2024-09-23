"use client";

import { motion, MotionProps } from "framer-motion";
import { FC, ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
}

const MotionWrapper: FC<MotionWrapperProps> = ({ children, ...rest }) => {
  return <motion.div {...rest}>{children}</motion.div>;
};

export default MotionWrapper;
