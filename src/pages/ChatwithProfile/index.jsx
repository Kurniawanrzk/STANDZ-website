import React from "react";

import { Img, Text } from "components";

const ChatwithProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-lilitaone gap-[19px] items-center justify-center mx-auto p-[17px] w-full">
        <div className="flex h-[175px] sm:h-[206px] md:h-[407px] justify-end max-w-[1356px] mt-[31px] mx-auto md:px-5 relative w-full">
          <Text
            className="mb-3 ml-3.5 mt-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtLilitaOne48"
          >
            CHAT
          </Text>
          <div className="absolute flex md:flex-col flex-row font-inriasans md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
            <Img
              className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-0.5 object-cover rounded-[9px] w-[4%] md:w-full"
              src="images/img_menu18288591.png"
              alt="menu18288594"
            />
            <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between mb-[132px] md:ml-[0] ml-[62px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[36%] md:w-full">
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
            <div className="flex flex-col font-mitr md:ml-[0] ml-[423px] relative w-1/4 md:w-full">
              <div className="flex flex-row items-start justify-start mx-auto w-full">
                <Img
                  className="h-9 md:h-auto mt-2 object-cover w-[35px]"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
                <Img
                  className="h-[33px] md:h-auto ml-[22px] mt-2.5 object-cover w-[34px]"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764"
                />
                <Img
                  className="h-[51px] md:h-auto ml-[43px] rounded-[50%] w-[52px]"
                  src="images/img_do2024exoseasons.png"
                  alt="do2024exoseason"
                />
                <Text
                  className="ml-[18px] mt-2.5 text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Heri P.
                </Text>
                <Img
                  className="h-[41px] md:h-auto ml-5 object-cover w-[16%]"
                  src="images/img_chevronup.png"
                  alt="chevronup"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-col font-mada items-start justify-start ml-auto mt-[-13px] p-[7px] rounded-[15px] w-[45%] z-[1]">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[5px] w-[78%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-center justify-start w-full">
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
                  <div className="flex flex-row gap-2 items-center justify-start mt-[7px] w-[69%] md:w-full">
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
                  <div className="flex flex-row gap-[11px] items-start justify-start mt-4 w-[74%] md:w-full">
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
                  <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] mt-0.5 w-[79%] md:w-full">
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
            </div>
          </div>
        </div>
        <div className="bg-gray-300_aa flex flex-col font-mitr items-start justify-start max-w-[1238px] mb-[647px] mx-auto p-0.5 md:px-5 rounded-[35px] w-full">
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start mb-[18px] md:ml-[0] ml-[9px] w-[81%] md:w-full">
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
                  You: Complete your payment now! You don&#39;t want to miss
                  out!
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatwithProfilePage;
