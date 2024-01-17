import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const BuyernotifwithMenuPage = () => {
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
        <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-11 w-full">
            <div className="flex flex-col gap-[57px] justify-start w-full">
              <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start md:ml-[0] ml-[30px] w-[98%] md:w-full">
                <div className="bg-blue_gray-100 flex flex-row items-start justify-between md:mt-0 mt-[11px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[45%] md:w-full">
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
                  className="h-9 md:h-auto md:ml-[0] ml-[280px] md:mt-0 mt-[7px] object-cover w-[35px] sm:w-full"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
                <Img
                  className="h-[33px] md:h-auto md:ml-[0] ml-[26px] md:mt-0 mt-[9px] object-cover w-[34px] sm:w-full"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764"
                />
                <div className="flex flex-row font-mitr items-center justify-between mb-[3px] ml-10 md:ml-[0] w-[18%] md:w-full">
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
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtLilitaOne48"
              >
                Notifications
              </Text>
            </div>
            <div className="bg-gray-300_aa flex flex-col gap-1.5 justify-start p-[7px] rounded-[35px]">
              <Text
                className="md:ml-[0] ml-[30px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_bf"
                size="txtNokoraBold36"
              >
                Land rent
              </Text>
              <Text
                className="mb-1 md:ml-[0] ml-[55px] mr-[126px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtMitrExtraLight28"
              >
                Heri P. accepted your offer. You’re ready to start your
                business!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyernotifwithMenuPage;
