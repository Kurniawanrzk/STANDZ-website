import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ChatwithMenuPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[38px] md:h-auto mt-[3px] object-cover w-1/5"
          src="images/img_home71686071.png"
          alt="home71686071"
        />
      ),
      label: "HOME",
      href: "/sellerhomepagewithmenupanel",
      active: window.location.pathname === "/sellerhomepagewithmenupanel",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mt-1 object-cover w-[33px]"
          src="images/img_time949631.png"
          alt="time949631"
        />
      ),
      label: "HISTORY",
      href: "/buyerhistorywprofile",
      active: window.location.pathname === "/buyerhistorywprofile",
    },
    {
      icon: (
        <Img
          className="absolute h-[33px] inset-y-[0] left-[37%] my-auto object-cover w-[33px]"
          src="images/img_linkedin3800006.png"
          alt="linkedin3800006"
        />
      ),
      label: "<>JOB<br />VACANCIES</>",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mb-[18px] object-cover w-[13%]"
          src="images/img_screenshot2024.png"
          alt="screenshot2024"
        />
      ),
      label: "YOUR LAND",
      href: "/selleryourlandwithmenu",
      active: window.location.pathname === "/selleryourlandwithmenu",
    },
  ];

  return (
    <>
      <div className="bg-lime-600 flex flex-col font-kd items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans gap-[49px] items-center justify-start md:mt-0 mt-[55px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-row items-start justify-between mb-2 p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[45%] md:w-full">
                <Text
                  className="ml-[21px] mt-[3px] text-black-900_87 text-xl"
                  size="txtInriaSansRegular20"
                >
                  Search..
                </Text>
                <Img
                  className="h-[29px] md:h-auto mr-[13px] object-cover w-7"
                  src="images/img_search1498521.png"
                  alt="search1498521"
                />
              </div>
              <div className="flex flex-row font-mitr items-center justify-start w-[28%] md:w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-[35px]"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
                <div className="h-[33px] ml-[22px] relative w-[34px]">
                  <Img
                    className="h-[33px] m-auto object-cover w-[34px]"
                    src="images/img_speechbubble7647467.png"
                    alt="speechbubble764"
                  />
                  <Img
                    className="absolute h-[33px] inset-[0] justify-center m-auto object-cover w-[34px]"
                    src="images/img_speechbubble7647467.png"
                    alt="speechbubble764_One"
                  />
                </div>
                <Img
                  className="h-[51px] md:h-auto ml-[43px] rounded-[50%] w-[52px]"
                  src="images/img_do2024exoseasons.png"
                  alt="do2024exoseason"
                />
                <Text
                  className="ml-[18px] text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Heri P.
                </Text>
                <Img
                  className="h-[13px] md:h-auto ml-[13px] object-cover w-[9%]"
                  src="images/img_arrowdownsign.png"
                  alt="arrowdownsign"
                />
              </div>
            </div>
            <div className="flex flex-col font-lilitaone gap-[31px] items-start justify-start w-[98%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtLilitaOne48"
              >
                CHAT
              </Text>
              <div className="bg-gray-300_aa flex flex-col font-mitr items-start justify-start md:ml-[0] ml-[5px] p-[11px] rounded-[35px] w-full">
                <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start w-[93%] md:w-full">
                  <Img
                    className="h-24 sm:h-auto object-cover rounded-[46px] w-[10%] md:w-full"
                    src="images/img_redvelvetjoyespoir_96x93.png"
                    alt="redvelvetjoyesp"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtMitrRegular32"
                    >
                      Olivia W.
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtMitrRegular28"
                    >
                      <>
                        You: Complete your payment now! You don&#39;t want to
                        miss out!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatwithMenuPage;
