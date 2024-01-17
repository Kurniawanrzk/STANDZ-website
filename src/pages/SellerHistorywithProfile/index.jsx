import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const SellerHistorywithProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans gap-4 justify-center mx-auto p-[17px] w-full">
        <div className="flex flex-col items-center max-w-[1356px] mt-[31px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <div className="flex flex-col font-lusitana items-end max-w-[1356px] mb-[648px] mx-auto md:px-5 px-7 w-full">
          <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col items-center justify-start rounded-[35px] w-[99%] md:w-full">
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

export default SellerHistorywithProfilePage;
