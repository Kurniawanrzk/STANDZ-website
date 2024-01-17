import React from "react";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const BuyerjobvPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-inriasans sm:gap-10 md:gap-10 gap-[67px] justify-start mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-[1327px] mt-[15px] mx-auto md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <div className="bg-lime-300 border border-black-900 border-solid flex flex-col items-end justify-start mb-[433px] md:ml-[0] ml-[157px] mr-[942px] p-[3px] md:px-5 rounded-[20px] w-[21%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-2.5 mt-[22px] w-[95%] md:w-full">
            <div className="flex flex-row font-livvic gap-[15px] items-center justify-start w-[91%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-[7px] rounded-[31px] w-[63px]">
                <Img
                  className="h-[45px] md:h-auto mb-[3px] md:ml-[0] ml-[3px] object-cover w-4/5"
                  src="images/img_budget.png"
                  alt="budget"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtLivvicBold32"
                >
                  CASHIER
                </Text>
                <Text
                  className="text-base text-gray-800_01"
                  size="txtLivvicSemiBold16"
                >
                  Casablanca City Mall
                </Text>
              </div>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-5 text-base text-black-900"
              size="txtLivvicRegular16"
            >
              <>
                - Able to operate a computer and also excel (or similar)
                <br />- Thorough and able to communicate well
                <br />- Able to count quickly and precisely, and understand
                existing products
              </>
            </Text>
            <div className="md:h-14 h-[43px] md:ml-[0] ml-[13px] mt-8 relative w-[86%]">
              <Text
                className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                size="txtLiterataRomanMedium16"
              >
                Work Time : 5hr/day
              </Text>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                size="txtLivvicBold16"
              >
                Salary : Rp. 2.250.000/month
              </Text>
            </div>
            <Button
              className="cursor-pointer font-lilitaone leading-[normal] min-w-[251px] mt-1 md:text-3xl sm:text-[28px] text-[32px] text-center"
              shape="round"
              size="sm"
            >
              APPLY
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerjobvPage;
