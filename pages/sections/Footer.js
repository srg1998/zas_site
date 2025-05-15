import React from "react";

export default function Footer() {
  return (
    <div className="relative min-h-1/2 pt-10">
      <div className="w-full flex justify-end relative overflow-hidden">
        <div className="bg-[#231F20] text-white relative flex flex-col items-center justify-center gap-y-[33px]  p-[35px] pb-[180px] md:pb-[110px] md:w-[90%]">
          <div className="text-[40px] font-semibold">Get in Touch</div>
          <div>
            <div className="flex gap-[13px] mb-[3px]">
              <img src="/icons/phone_icon.png" /> 123213123
            </div>

            <div className="flex gap-[13px]">
              <img src="/icons/mail_icon.png" /> company@gmail.com
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between w-full">
            <div className="md:pl-[10%]">
              <div className="relative text-[39px] pb-[20px] mb-[15px]">
                Contact US
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-underline" />
              </div>
              <div>
                <div className="flex gap-[13px] mb-[6px]">
                  <img src="/icons/phone_icon.png" /> 123213123
                </div>
                <div className="flex gap-[13px] mb-[6px]">
                  <img src="/icons/mail_icon.png" /> company@gmail.com
                </div>
                <div className="flex gap-[13px]">
                  <img src="/icons/mail_icon.png" /> location
                </div>
              </div>
            </div>
            <img
              src="/images/service2_image.png"
              className="w-auto h-auto md:mt-0 mt-5" 
              alt="footer"
            />
          </div>
        </div>
        <div className="absolute -right-2 sm:-right-3 md:-right-28 top-5 w-full h-full bg-gray-200 -z-10"></div>
      </div>

      <div className="absolute bottom-0 flex md:flex-row flex-col justify-between bg-[#D9D9D9] md:px-[100px] py-7 text-black text-[24px] z-10 w-full">
        <div>All Rights Reserved</div>
        <div className="flex items-center gap-[15px]">
          FOLLOW US
          <div className="flex items-center gap-x-[5px]">
            <img src="/icons/linkdin_icon.png" className="h-[30px] w-[30px]" />
            <img src="/icons/facebook_icon.png" className="h-[30px] w-[30px]" />
            <img src="/icons/insta_icon.png" className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
