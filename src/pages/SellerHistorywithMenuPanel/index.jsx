import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SellerHistorywithMenuPanelPage = () => {
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
        <div className="flex md:flex-col flex-row md:gap-[55px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans gap-[51px] items-center justify-start md:mt-0 mt-[55px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between mb-2 p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[45%] md:w-full">
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
              <div className="flex md:flex-1 flex-row font-mitr items-center justify-start w-[28%] md:w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-[35px]"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
                <Img
                  className="h-[33px] md:h-auto ml-[22px] object-cover w-[34px]"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764"
                />
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
            <div className="flex flex-col font-mavenpro gap-[30px] items-start justify-start w-[99%] md:w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                size="txtMavenProBold38"
              >
                TODAY
              </Text>
              <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col font-karma items-center justify-start ml-1 md:ml-[0] rounded-[35px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover rounded-[35px]"
                    src="images/img_walkwaygarden.png"
                    alt="walkwaygarden"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[24%]">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtKarmaRegular20"
                        >
                          Jlaben Kronco Mall
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start w-[68%] md:w-full">
                          <Img
                            className="h-4 md:h-auto object-cover w-[13%]"
                            src="images/img_placeholder684809.png"
                            alt="placeholder6848"
                          />
                          <Text
                            className="text-black-900 text-lg"
                            size="txtKarmaBold18"
                          >
                            Klojen City
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-lusitana items-start justify-start">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtLusitana18"
                        >
                          Purchase date : 29-11-2023
                        </Text>
                        <Text
                          className="mt-[3px] text-black-900 text-lg"
                          size="txtLusitana18"
                        >
                          Valid until : 28-11-2024
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-lusitana sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-black-900_8c"
                        size="txtLusitana13"
                      >
                        Roadways • Market • Parking lot • 24-hour access
                      </Text>
                      <Text
                        className="sm:mt-0 mt-[7px] text-black-900 text-xl"
                        size="txtLusitanaBold20"
                      >
                        TOTAL : Rp. 42.000.000
                      </Text>
                    </div>
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

export default SellerHistorywithMenuPanelPage;
