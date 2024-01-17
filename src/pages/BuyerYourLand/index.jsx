import React from "react";

import { Img, Text } from "components";
import Header1 from "components/Header1";

const BuyerYourLandPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-inriasans sm:gap-10 md:gap-10 gap-[67px] justify-start mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-[1337px] mt-[15px] mx-auto pl-2.5 md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <div className="bg-lime-300 border border-black-900 border-solid flex flex-col font-lilitaone items-center justify-start mb-[433px] md:ml-[0] ml-[45px] mr-[1054px] p-16 md:px-5 rounded-[20px] w-[21%] md:w-full">
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

export default BuyerYourLandPage;
