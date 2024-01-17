import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const SellerJobVacancieswithProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col sm:gap-10 md:gap-10 gap-[66px] items-center justify-start mx-auto p-[17px] w-full">
        <Header className="flex md:flex-col flex-row font-inriasans md:gap-5 items-center justify-center mt-[31px] md:px-5 w-full" />
        <Text
          className="mb-[654px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 underline"
          size="txtMitrRegular40Bluegray700"
        >
          Job vacancy not found.
        </Text>
      </div>
    </>
  );
};

export default SellerJobVacancieswithProfilePage;
