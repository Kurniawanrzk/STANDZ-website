import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SellerYourLandwithMenuPage = () => {
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
        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans gap-14 items-start justify-start md:mt-0 mt-[55px] w-full">
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
            <div className="flex md:flex-col flex-row font-lilitaone gap-[54px] items-center justify-start w-[57%] md:w-full">
              <div className="bg-deep_orange-A100_91 border border-black-900 border-solid flex flex-col items-end justify-end p-1 rounded-[20px] w-[46%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[9px] mt-[21px] w-[96%] md:w-full">
                  <div className="flex flex-row font-livvic gap-[15px] items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-[7px] rounded-[31px] w-[63px]">
                      <Img
                        className="h-[45px] md:h-auto mb-[3px] md:ml-[0] ml-[3px] object-cover w-4/5"
                        src="images/img_budget.png"
                        alt="budget"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtLivvicBold32"
                      >
                        CASHIER
                      </Text>
                      <Text
                        className="text-base text-gray-800_01"
                        size="txtLivvicSemiBold16"
                      >
                        Casablanca City Mall
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-5 text-base text-black-900"
                    size="txtLivvicRegular16"
                  >
                    <>
                      - Able to operate a computer and also excel (or similar)
                      <br />- Thorough and able to communicate well
                      <br />- Able to count quickly and precisely, and
                      understand existing products
                    </>
                  </Text>
                  <div className="md:h-14 h-[43px] md:ml-[0] ml-[13px] mt-8 relative w-[86%]">
                    <Text
                      className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                      size="txtLiterataRomanMedium16"
                    >
                      Work Time : 5hr/day
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                      size="txtLivvicBold16"
                    >
                      Salary : Rp. 2.250.000/month
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-lilitaone leading-[normal] min-w-[251px] mt-1 md:text-3xl sm:text-[28px] text-[32px] text-center"
                    shape="round"
                    color="gray_300_af"
                    size="sm"
                  >
                    BOOKED OUT
                  </Button>
                </div>
              </div>
              <div className="bg-deep_orange-A100_91 border border-black-900 border-solid flex flex-col items-center justify-end p-16 md:px-10 sm:px-5 rounded-[20px] w-[46%] md:w-full">
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
      </div>
    </>
  );
};

export default SellerYourLandwithMenuPage;
