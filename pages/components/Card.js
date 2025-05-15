import React from "react";
import { motion } from "motion/react"

export default function Card({ children }) {
  return (
    <motion.div
      className="bg-[#E5E5E5] p-4 w-full gap-6 md:gap-2 grid grid-cols-3 md:grid-cols-1 rounded-xl shadow-md max-h-[280px] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // triggers once when 20% is in view
    >
      {children}
    </motion.div>
  );
}