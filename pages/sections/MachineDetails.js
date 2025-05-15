import React from "react";
import Card from "../components/Card";

export default function MachineDetails() {
  //dummy values for machines
  const machines = [
    {
      id: 1,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
    {
      id: 2,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
    {
      id: 3,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
    {
      id: 4,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
    {
      id: 5,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
    {
      id: 6,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metunec fringilla accumsan, ...",
    },
  ];

  return (
    <div className="min-h-screen px-4 md:px-[90px] pt-4px md:pt-[28px] text-black">
      <div className="relative w-fit mb-[46px]">
        <div className="pb-[20px] pr-[10px] md:pr-[100px] text-5xl">
          <span className="font-semibold">Machinery</span>{" "}
          <span className="font-normal">Details</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-underline" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-x-[86px] md:gap-y-[15px]   md:mx-0">
        {machines?.map((machine) => (
          <Card key={machine.id}>
            <img
              src="/images/background_image1.jpg"
              className="rounded-xl w-full h-[90px] md:h-[165px] mb-4"
            />
            <p className="text-xs h-[50%] md:col-span-1 col-span-2">
              {machine.info}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
