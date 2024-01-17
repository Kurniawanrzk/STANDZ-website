import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const NotificationwithProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans gap-[19px] items-center justify-center mx-auto p-[17px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[31px] md:px-5 w-full" />
        <div className="bg-gray-300_aa flex flex-col font-mitr items-start justify-start max-w-[1238px] mb-[647px] mx-auto p-[11px] md:px-5 rounded-[35px] w-full">
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

export default NotificationwithProfilePage;
