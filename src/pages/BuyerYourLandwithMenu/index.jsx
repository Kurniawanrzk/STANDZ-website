import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const BuyerYourLandwithMenuPage = () => {
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
      <div className="bg-deep_orange-A100 flex flex-col font-kd items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans md:gap-10 gap-16 items-start justify-start md:mt-0 mt-11 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between md:mt-0 mt-[11px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[45%] md:w-full">
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
              <Img
                className="sm:flex-1 h-9 md:h-auto md:ml-[0] ml-[280px] md:mt-0 mt-[7px] object-cover w-[35px] sm:w-full"
                src="images/img_bell68133732.png"
                alt="bell68133733"
              />
              <Img
                className="sm:flex-1 h-[33px] md:h-auto md:ml-[0] ml-[26px] md:mt-0 mt-[9px] object-cover w-[34px] sm:w-full"
                src="images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <div className="flex md:flex-1 flex-row font-mitr items-center justify-between mb-[3px] ml-10 md:ml-[0] w-[18%] md:w-full">
                <Img
                  className="h-[51px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_redvelvetjoyespoir.png"
                  alt="redvelvetjoyesp"
                />
                <Text
                  className="text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Olivia W.
                </Text>
                <Img
                  className="h-4 md:h-auto object-cover"
                  src="images/img_arrowdownsign.png"
                  alt="arrowdownsign"
                />
              </div>
            </div>
            <div className="bg-lime-300 border border-black-900 border-solid flex flex-col font-lilitaone items-center justify-end p-16 md:px-10 sm:px-5 rounded-[20px] w-[26%] md:w-full">
              <Img
                className="h-[120px] mt-[76px]"
                src="images/img_iconsadd24px.svg"
                alt="iconsadd24px"
              />
              <Text
                className="mb-[43px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f"
                size="txtLilitaOne32"
              >
                ADD LAND
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerYourLandwithMenuPage;
