import React from "react";

import { Img, Text } from "components";

const BuyerYourLandwithProfilePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 font-inriasans h-[1024px] mx-auto p-[17px] relative w-full">
        <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 right-[2%] top-[5%] w-[86%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-start p-[7px] rounded-[21px] w-2/5 md:w-full"
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
            className="h-[33px] md:h-auto md:ml-[0] ml-[474px] object-cover w-[34px] sm:w-full"
            src="images/img_speechbubble7647467.png"
            alt="speechbubble764"
          />
          <div className="bg-blue_gray-100 flex flex-col font-mada items-start justify-start md:ml-[0] ml-[92px] md:mt-0 mt-[34px] p-[7px] rounded-[15px] w-[13%] md:w-full">
            <div className="flex flex-row gap-[9px] items-center justify-start mt-[5px] w-[77%] md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-[25px]"
                src="images/img_user_24x25.png"
                alt="user"
              />
              <Text className="text-black-900 text-sm" size="txtMadaSemiBold14">
                User Profile
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start mt-[7px] w-[54%] md:w-full">
              <Img
                className="h-[23px] md:h-auto object-cover w-[37%]"
                src="images/img_wallet.png"
                alt="wallet"
              />
              <Text className="text-black-900 text-sm" size="txtMadaSemiBold14">
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
        <div className="absolute flex flex-row font-mitr gap-[11px] items-center justify-center md:px-5 right-[5%] top-[4%] w-[11%]">
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
          className="absolute h-9 object-cover right-[22%] top-[5%] w-[35px]"
          src="images/img_bell68133732.png"
          alt="bell68133733"
        />
        <Img
          className="absolute h-[41px] object-cover right-[2%] top-[5%] w-[4%]"
          src="images/img_chevronup.png"
          alt="chevronup"
        />
        <Img
          className="absolute h-[38px] left-[6%] object-cover rounded-[9px] top-[6%] w-[4%]"
          src="images/img_menu18288591.png"
          alt="menu18288592"
        />
        <div className="absolute bg-lime-300 border border-black-900 border-solid flex flex-col font-lilitaone items-center justify-start left-[5%] p-16 md:px-5 rounded-[20px] top-[16%] w-1/5">
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
    </>
  );
};

export default BuyerYourLandwithProfilePage;
