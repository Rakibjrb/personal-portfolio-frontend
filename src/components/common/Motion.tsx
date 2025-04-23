"use client";

import { motion, MotionProps } from "motion/react";

type MotionWrapperProps = {
  children: React.ReactNode;
  initial?: MotionProps["initial"];
  inView?: MotionProps["whileInView"];
};

export default function Motion({
  children,
  initial,
  inView,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={inView}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
