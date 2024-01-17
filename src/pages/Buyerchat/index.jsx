import React from "react";

import { Img, Text } from "components";

const BuyerchatPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col items-center justify-start mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1327px] mb-[622px] mt-[15px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-end justify-start w-full">
              <Img
                className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-[9px] w-[4%] md:w-full"
                src="images/img_menu18288591.png"
                alt="menu18288591"
              />
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[43px] items-start justify-start md:ml-[0] ml-[54px] md:mt-0 mt-2 p-[7px] rounded-[21px] w-[37%] md:w-full"
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
                className="sm:flex-1 h-9 md:h-auto md:ml-[0] ml-[413px] md:mt-0 my-[7px] object-cover w-[35px] sm:w-full"
                src="images/img_bell68133732.png"
                alt="bell68133733"
              />
              <Img
                className="sm:flex-1 h-[33px] md:h-auto md:ml-[0] ml-[26px] md:mt-0 my-[9px] object-cover w-[34px] sm:w-full"
                src="images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <div className="flex md:flex-1 flex-row font-mitr items-center justify-between ml-10 md:ml-[0] w-[15%] md:w-full">
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
              className="mt-[73px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtLilitaOne48"
            >
              CHAT
            </Text>
            <div className="bg-gray-300_aa flex md:flex-col flex-row font-mitr gap-6 items-end justify-start md:ml-[0] ml-[23px] mt-[31px] p-0.5 rounded-[35px] w-[97%] md:w-full">
              <Img
                className="h-[85px] sm:h-auto mb-[15px] ml-4 md:ml-[0] md:mt-0 mt-3 rounded-[50%] w-[7%] md:w-full"
                src="images/img_do2024exoseasons_85x88.png"
                alt="do2024exoseason"
              />
              <div className="md:h-[68px] h-[94px] mb-[18px] relative w-[63%] md:w-full">
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
      </div>
    </>
  );
};

export default BuyerchatPage;
