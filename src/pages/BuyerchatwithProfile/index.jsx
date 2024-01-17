import React from "react";

import { Img, Text } from "components";

const BuyerchatwithProfilePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 font-lilitaone h-[1024px] mx-auto p-[17px] relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1357px] mx-auto md:px-5 top-[5%] w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[71px] justify-start md:mt-0 mt-[5px] w-[9%] md:w-full">
                <Img
                  className="h-[38px] md:h-auto md:ml-[0] ml-[18px] object-cover rounded-[9px] w-[43%] sm:w-full"
                  src="images/img_menu18288591.png"
                  alt="menu18288592"
                />
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtLilitaOne48"
                >
                  CHAT
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-inriasans h-[43px] items-start justify-start md:ml-[0] ml-[5px] p-[7px] rounded-[21px] w-[36%] md:w-full"
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
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col font-mada items-start justify-start md:ml-[0] ml-[92px] md:mt-0 mt-[34px] p-[7px] rounded-[15px] w-[12%] md:w-full">
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
            <div className="bg-gray-300_aa flex md:flex-col flex-row font-mitr gap-[27px] items-end justify-start p-0.5 rounded-[35px] w-[97%] md:w-full">
              <Img
                className="h-[85px] sm:h-auto mb-[15px] md:ml-[0] ml-[19px] md:mt-0 mt-3 rounded-[50%] w-[8%] md:w-full"
                src="images/img_do2024exoseasons_85x88.png"
                alt="do2024exoseason"
              />
              <div className="md:h-[68px] h-[94px] mb-[18px] relative w-[61%] md:w-full">
                <Text
                  className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900 top-[0]"
                  size="txtMitrRegular32"
                >
                  Heri P.
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-max"
                  size="txtMitrRegular28"
                >
                  <>
                    Complete your payment now! You don&#39;t want to miss out!
                  </>
                </Text>
              </div>
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
          alt="bell68133732"
        />
        <Img
          className="absolute h-[41px] object-cover right-[2%] top-[5%] w-[4%]"
          src="images/img_chevronup.png"
          alt="chevronup"
        />
      </div>
    </>
  );
};

export default BuyerchatwithProfilePage;
