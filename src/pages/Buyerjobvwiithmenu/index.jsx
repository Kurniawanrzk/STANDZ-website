import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const BuyerjobvwiithmenuPage = () => {
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
        <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans md:gap-10 gap-[67px] justify-start md:mt-0 mt-11 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[133px] w-[88%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-start p-[7px] rounded-[21px] w-[51%] md:w-full"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <div className="flex flex-row items-start justify-between ml-1.5 md:ml-[0] w-[93%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900_87 text-xl"
                    size="txtInriaSansRegular20"
                  >
                    Search...
                  </Text>
                  <Img
                    className="h-[29px] md:h-auto object-cover w-7"
                    src="images/img_search1498521_29x28.png"
                    alt="search1498521"
                  />
                </div>
              </div>
              <Img
                className="h-9 md:h-auto md:ml-[0] ml-[149px] object-cover w-[35px] sm:w-full"
                src="images/img_bell68133732.png"
                alt="bell68133732"
              />
              <Img
                className="h-[33px] md:h-auto md:ml-[0] ml-[26px] object-cover w-[34px] sm:w-full"
                src="images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <div className="flex flex-row font-mitr items-center justify-between ml-10 md:ml-[0] w-1/5 md:w-full">
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
            <div className="bg-lime-300 border border-black-900 border-solid flex flex-col items-end justify-end mr-[811px] p-[3px] rounded-[20px] w-[26%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-2.5 mt-[22px] w-[95%] md:w-full">
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
                    <br />- Able to count quickly and precisely, and understand
                    existing products
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
                  size="sm"
                >
                  APPLY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerjobvwiithmenuPage;
