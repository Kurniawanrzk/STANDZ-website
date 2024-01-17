import React from "react";

import { Img, Text } from "components";

const SellerJobVacanciesPage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-center justify-start mx-auto p-[46px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[185px] items-center justify-start max-w-[1325px] mb-[625px] mx-auto w-full">
          <div className="flex md:flex-col flex-row font-inriasans md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[45%] md:w-full">
              <Img
                className="h-[38px] md:h-auto sm:mt-0 mt-1 object-cover rounded-[9px]"
                src="images/img_menu18288591.png"
                alt="menu18288594"
              />
              <div className="bg-blue_gray-100 flex flex-row items-start justify-between p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[82%] sm:w-full">
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
            </div>
            <div className="flex md:flex-1 flex-row font-mitr items-center justify-start md:mt-0 mt-[7px] w-[23%] md:w-full">
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
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 underline"
            size="txtMitrRegular40Bluegray700"
          >
            Job vacancy not found.
          </Text>
        </div>
      </div>
    </>
  );
};

export default SellerJobVacanciesPage;
