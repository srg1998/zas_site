import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    { id: 1, name: "Service 1" },
    { id: 2, name: "Service 2" },
    { id: 3, name: "Service 3" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url(/images/background_image2.png)] bg-fixed bg-cover bg-no-repeat brightness-50 h-[240px] -z-10"></div>

      <div className="flex px-4 md:px-[90px] text-black flex-col justify-center items-center z-10 pt-[90px] gap-y-[25px]">
        {/* Heading */}
        <motion.div
          className="text-white font-semibold flex flex-col justify-center items-center text-[43px] mb-[20px] md:mb-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          OUR SERVICES
          <div className="w-full h-[3px] bg-underline mt-[10px] my-[23px]" />
        </motion.div>

        {/* Top Paragraph */}
        <motion.p
          className="text-center text-black max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-y-[20px] gap-x-[65px] text-white">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="relative w-[25%px] h-[213px] shadow-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src="/images/service2_image.png" className="w-full h-full" />
              <div className="absolute flex items-end cursor-pointer bottom-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="py-[10px] text-center w-full bg-[#231F20D4]">
                  {service.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <motion.p
          className="text-center text-black max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex md:flex-row flex-col justify-center items-center gap-[26px] text-white mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cursor-pointer bg-black px-[30px] py-[17px]">
            CONTACT SERVICE EXPERT
          </div>
          <div className="cursor-pointer bg-black px-[30px] py-[17px]">
            BOOK A SERVICE
          </div>
        </motion.div>
      </div>
    </div>
  );
}
