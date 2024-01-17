import React from "react";

import { Img, Text } from "components";
import Header1 from "components/Header1";

const BuyernotifPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col items-start justify-start mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col font-inriasans items-center max-w-[1327px] mt-[15px] mx-auto md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[55px] mt-[60px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
          size="txtLilitaOne48"
        >
          Notifications
        </Text>
        <div className="flex flex-col items-center max-w-[1327px] mb-[635px] mt-[31px] mx-auto md:px-5 px-[5px] w-full">
          <div className="bg-gray-300_aa flex flex-col gap-1.5 justify-start p-[7px] rounded-[35px]">
            <Text
              className="md:ml-[0] ml-[37px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_bf"
              size="txtNokoraBold36"
            >
              Land rent
            </Text>
            <Text
              className="mb-1 md:ml-[0] ml-[51px] mr-[334px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
              size="txtMitrExtraLight28"
            >
              Heri P. accepted your offer. You’re ready to start your business!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyernotifPage;
