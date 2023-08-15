import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface propsType {
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  children,
  className,
  handleClick,
  type,
}: propsType) {
  return (
    <motion.button
      type={type || "button"}
      onClick={handleClick}
      className={twMerge(
        "px-2 p-1 shadow-md text-slate-900 active:shadow-none rounded",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
