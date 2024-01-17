import React from "react";

import { Img, Text } from "components";

const SellerHistoryPage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-end justify-start max-w-[1328px] mb-[620px] mx-auto w-full">
          <div className="flex md:flex-col flex-row font-inriasans md:gap-10 items-start justify-between mr-[3px] w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[45%] md:w-full">
              <Img
                className="h-[38px] md:h-auto sm:mt-0 mt-1 object-cover rounded-[9px]"
                src="images/img_menu18288591.png"
                alt="menu18288593"
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
            className="mt-[53px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
          >
            TODAY
          </Text>
          <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col font-lusitana items-center justify-start mt-9 rounded-[35px] w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-[120px] sm:h-auto object-cover rounded-[35px] w-1/4 md:w-full"
                src="images/img_walkwaygarden.png"
                alt="walkwaygarden"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[76px] w-[23%] md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtKarmaRegular20"
                >
                  Jlaben Kronco Mall
                </Text>
                <div className="flex flex-row font-karma gap-1.5 items-center justify-start w-2/5 md:w-full">
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
                <Text
                  className="ml-2 md:ml-[0] text-[13px] text-black-900_8c"
                  size="txtLusitana13"
                >
                  Roadways • Market • Parking lot • 24-hour access
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] justify-start md:ml-[0] ml-[362px] w-[19%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px]">
                  <Text className="text-black-900 text-lg" size="txtLusitana18">
                    Purchase date : 29-11-2023
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900 text-lg"
                    size="txtLusitana18"
                  >
                    Valid until : 28-11-2024
                  </Text>
                </div>
                <Text
                  className="text-black-900 text-xl"
                  size="txtLusitanaBold20"
                >
                  TOTAL : Rp. 42.000.000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerHistoryPage;
