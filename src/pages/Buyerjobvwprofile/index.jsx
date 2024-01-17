import React from "react";

import { Button, Img, Text } from "components";

const BuyerjobvwprofilePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex sm:flex-col md:flex-col flex-row font-inriasans gap-[54px] items-start justify-end mx-auto p-[17px] w-full">
        <Img
          className="h-[38px] sm:h-auto md:mt-0 mt-10 object-cover rounded-[9px] w-[4%] md:w-full"
          src="images/img_menu18288591.png"
          alt="menu18288591"
        />
        <div className="h-[518px] md:h-[822px] mb-[445px] md:mt-0 mt-[27px] md:px-5 relative w-[88%] md:w-full">
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto top-[2%] w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[43px] items-start justify-start p-[7px] rounded-[21px] w-2/5 md:w-full"
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
              className="sm:flex-1 h-[33px] md:h-auto md:ml-[0] ml-[474px] object-cover w-[34px] sm:w-full"
              src="images/img_speechbubble7647467.png"
              alt="speechbubble764"
            />
            <div className="bg-blue_gray-100 flex md:flex-1 flex-col font-mada items-start justify-start md:ml-[0] ml-[92px] md:mt-0 mt-[34px] p-[7px] rounded-[15px] w-[13%] md:w-full">
              <div className="flex flex-row gap-[9px] items-center justify-start mt-[5px] w-[77%] md:w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-[25px]"
                  src="images/img_user_24x25.png"
                  alt="user"
                />
                <Text
                  className="text-black-900 text-sm"
                  size="txtMadaSemiBold14"
                >
                  User Profile
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start mt-[7px] w-[54%] md:w-full">
                <Img
                  className="h-[23px] md:h-auto object-cover w-[37%]"
                  src="images/img_wallet.png"
                  alt="wallet"
                />
                <Text
                  className="text-black-900 text-sm"
                  size="txtMadaSemiBold14"
                >
                  Wallet
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-start justify-start mt-4 w-[57%] md:w-full">
                <Img
                  className="h-[22px] md:h-auto object-cover w-[23px]"
                  src="images/img_settings_22x23.png"
                  alt="settings"
                />
                <Text
                  className="mt-0.5 text-black-900 text-sm"
                  size="txtMadaSemiBold14"
                >
                  Setting
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] my-0.5 w-[61%] md:w-full">
                <Img
                  className="h-[21px] md:h-auto object-cover w-[28%]"
                  src="images/img_logout.png"
                  alt="logout"
                />
                <Text
                  className="mt-0.5 text-black-900 text-sm"
                  size="txtMadaSemiBold14"
                >
                  Sign Out
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row font-mitr gap-[11px] items-center justify-center right-[4%] top-[0] w-[12%]">
            <Img
              className="h-[51px] md:h-auto rounded-[50%] w-[52px]"
              src="images/img_redvelvetjoyespoir.png"
              alt="redvelvetjoyesp"
            />
            <Text className="text-black-900 text-xl" size="txtMitrRegular20">
              Olivia W.
            </Text>
          </div>
          <Img
            className="absolute h-9 object-cover right-[24%] top-[1%] w-[35px]"
            src="images/img_bell68133732.png"
            alt="bell68133732"
          />
          <div className="absolute bg-lime-300 border border-black-900 border-solid bottom-[0] flex flex-col items-end justify-end left-[0] p-[3px] rounded-[20px] w-[23%]">
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
          <Img
            className="absolute h-[41px] object-cover right-[0] top-[1%] w-[5%]"
            src="images/img_chevronup.png"
            alt="chevronup"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerjobvwprofilePage;
