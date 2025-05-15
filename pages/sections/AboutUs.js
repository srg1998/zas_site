import React from "react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col pt-[90px]">
      {/* Parallax Header Section */}
      <div className="relative h-[200px] md:h-[250px]">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat brightness-50"
          style={{ backgroundImage: "url(/images/background_image1.jpg)" }}
        ></div>

        <motion.div
          className="relative text-white flex flex-col justify-center h-full px-4 md:px-[90px] z-10 pt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-2xl md:text-[50px]">
            ZAKARIA ABDULLA AL SUBAITI GEN. CONT. EST.
          </h1>

          <motion.div
            className="relative w-fit h-fit"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="mb-[20px]">POWER RE-WINDING SPECIALIST</h2>
            <div className="absolute bottom-0 left-0 w-3/4 h-[3px] bg-underline transition-all duration-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Us Content */}
      <div className="flex-grow bg-white text-black grid md:grid-cols-2 flex-wrap gap-10 px-4 md:px-[90px] py-6 md:py-[30px]">
        {/* Left Text */}
        <motion.div
          className="relative w-fit"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative pb-[20px] pr-[10px] md:pr-[100px] text-[37px] w-fit">
            About Us
            <div className="absolute bottom-0 left-0 w-full pr-6 h-[3px] bg-underline" />
          </div>

          <p className="pt-2 md:pt-8 text-md md:text-2xl leading-relaxed">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="relative w-full max-w-[400px] mx-auto group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute top-2 -left-2 sm:top-3 sm:-left-3 md:top-4 md:-left-4 w-full h-full bg-gray-200 z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <img
            src="/images/aboutus_image.png"
            alt="About Us"
            className="relative h-1/2 md:h-full z-10 shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
}
