"use client";
import { motion } from "framer-motion";

const MotionDiv = ({ children, ...props }) => {
  return (
    <motion.div
      {...props}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
