import React from "react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-[url(/images/background_image2.png)] bg-fixed bg-cover bg-no-repeat brightness-50 h-[247px] -z-10"></div>

      {/* Main content */}
      <div className="flex px-4 md:px-[90px] text-black flex-col justify-center items-center z-10 pt-[80px] gap-y-[25px]">
        {/* Animated Heading */}
        <motion.div
          className="text-white flex flex-col justify-center items-center text-[43px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          We Are Happy to Help You
          <div className="w-full h-[3px] bg-underline mt-[10px] my-[23px]" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:w-fit w-full md:grid md:grid-cols-2 gap-y-[30px] md:gap-x-[160px] bg-white px-16 md:px-[79px] py-[31px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              className="input-inset p-3 rounded-md w-full text-black mt-2"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              className="input-inset p-3 rounded-md w-full text-black mt-2"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              className="input-inset p-3 rounded-md w-full text-black mt-2"
            />
          </div>
          <div>
            <label>Place</label>
            <input
              type="text"
              className="input-inset p-3 rounded-md w-full text-black mt-2"
            />
          </div>
          <div className="md:col-span-2">
            <label>Message</label>
            <textarea className="input-inset p-3 rounded-md w-full text-black mt-2" />
          </div>
          <div className="flex justify-center items-center col-span-2">
            <button className="bg-black text-white px-5 py-3 rounded-md flex justify-center items-center ">Send</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
