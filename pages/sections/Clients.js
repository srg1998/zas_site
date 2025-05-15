import Image from "next/image";
import React from "react";
import { motion } from "motion/react"; // ✅ Correct motion import

export default function Clients() {
  const clients = [
    { id: 1, img: "/images/client_logo.png", name: "company 1" },
    { id: 2, img: "/images/client_logo.png", name: "company 2" },
    { id: 3, img: "/images/client_logo.png", name: "company 3" },
    { id: 4, img: "/images/client_logo.png", name: "company 4" },
    { id: 5, img: "/images/client_logo.png", name: "company 5" },
    { id: 6, img: "/images/client_logo.png", name: "company 6" },
    { id: 7, img: "/images/client_logo.png", name: "company 7" },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative bg-[url(/images/background_image1.jpg)] text-white bg-cover bg-no-repeat min-h-[140px] text-2xl md:text-[50px] flex justify-center items-center">
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-50 z-0" />
        <div className="relative z-10 text-center font-semibold">
          ZAKARIA ABDULLA AL SUBAITI GEN. CONT. EST.
        </div>
      </div>

      <div className="px-4 md:px-[90px] pt-4px md:pt-[28px]">
        <div className="text-black text-2xl md:text-[40px] font-semibold flex flex-col justify-center items-center">
          <div>Celebrating Success Together with Our Valued Clients</div>
          <div className="w-1/2 h-[3px] bg-underline my-[23px]" />
        </div>

        <div className="flex flex-wrap justify-center grow-0 gap-x-[20%] text-black">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="p-[10px] rounded-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // optional stagger
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                className="rounded-3xl border max-h-[100px]"
                src={client.img}
                alt={client.name}
                height={90}
                width={180}
              />
              <div className="text-center">{client.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
