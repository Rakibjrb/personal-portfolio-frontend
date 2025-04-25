"use client";

import { motion, useScroll } from "motion/react";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#52dde2",
        }}
      />

      <div className="overflow-hidden">
        <Menu />
        {children}
        <Footer />
      </div>
    </>
  );
}
