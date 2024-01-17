import React from "react";

import { Img, Text } from "components";

const NotificationPage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans sm:gap-10 md:gap-10 gap-[131px] items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1325px] mx-auto w-full">
          <Img
            className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-1 object-cover rounded-[9px] w-[4%] md:w-full"
            src="images/img_menu18288591.png"
            alt="menu18288595"
          />
          <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between mb-[15px] md:ml-[0] ml-[62px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[37%] md:w-full">
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
          <div className="flex md:flex-1 flex-row font-mitr items-center justify-start md:ml-[0] ml-[425px] md:mt-0 mt-[7px] w-[23%] md:w-full">
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
        <div className="bg-gray-300_aa flex flex-col font-mitr items-start justify-start max-w-[1238px] mb-[611px] mx-auto p-[11px] md:px-5 rounded-[35px] w-full">
          <Text
            className="ml-11 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_bf"
            size="txtMitrBold32"
          >
            Land rent
          </Text>
          <Text
            className="ml-12 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtMitrRegular28"
          >
            Olivia W. has rented your land
          </Text>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
