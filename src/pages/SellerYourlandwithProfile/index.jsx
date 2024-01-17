import React from "react";

import { Button, Img, Text } from "components";

const SellerYourlandwithProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 font-lilitaone h-[1024px] mx-auto p-[17px] relative w-full">
        <div className="absolute flex flex-col items-center justify-start left-[5%] md:px-5 top-[16%] w-[43%]">
          <div className="flex sm:flex-col flex-row sm:gap-[53px] items-center justify-between w-full">
            <div className="bg-deep_orange-A100_91 border border-black-900 border-solid flex sm:flex-1 flex-col items-end justify-end p-1 rounded-[20px] w-[46%] sm:w-full">
              <div className="flex flex-col items-start justify-start mb-[9px] mt-[21px] w-[96%] md:w-full">
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
                  color="gray_300_af"
                  size="sm"
                >
                  BOOKED OUT
                </Button>
              </div>
            </div>
            <div className="bg-deep_orange-A100_91 border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-end p-16 md:px-10 sm:px-5 rounded-[20px] w-[46%] sm:w-full">
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
        </div>
        <div className="absolute flex md:flex-col flex-row font-inriasans md:gap-5 inset-x-[0] items-start justify-start max-w-[1356px] mx-auto md:px-5 top-[5%] w-full">
          <Img
            className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-0.5 object-cover rounded-[9px] w-[4%] md:w-full"
            src="images/img_menu18288591.png"
            alt="menu18288594"
          />
          <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between mb-[132px] md:ml-[0] ml-[62px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[36%] md:w-full">
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
          <div className="flex flex-col font-mitr md:ml-[0] ml-[423px] relative w-1/4 md:w-full">
            <div className="flex flex-row items-start justify-start mx-auto w-full">
              <Img
                className="h-9 md:h-auto mt-2 object-cover w-[35px]"
                src="images/img_bell68133732.png"
                alt="bell68133732"
              />
              <Img
                className="h-[33px] md:h-auto ml-[22px] mt-2.5 object-cover w-[34px]"
                src="images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <Img
                className="h-[51px] md:h-auto ml-[43px] rounded-[50%] w-[52px]"
                src="images/img_do2024exoseasons.png"
                alt="do2024exoseason"
              />
              <Text
                className="ml-[18px] mt-2.5 text-black-900 text-xl"
                size="txtMitrRegular20"
              >
                Heri P.
              </Text>
              <Img
                className="h-[41px] md:h-auto ml-5 object-cover w-[16%]"
                src="images/img_chevronup.png"
                alt="chevronup"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-col font-mada items-start justify-start ml-auto mt-[-13px] p-[7px] rounded-[15px] w-[45%] z-[1]">
              <div className="flex flex-col items-start justify-start mb-0.5 mt-[5px] w-[78%] md:w-full">
                <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-[25px]"
                    src="images/img_user_24x25.png"
                    alt="user"
                  />
                  <Text
                    className="text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    User Profile
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start mt-[7px] w-[69%] md:w-full">
                  <Img
                    className="h-[23px] md:h-auto object-cover w-[37%]"
                    src="images/img_wallet.png"
                    alt="wallet"
                  />
                  <Text
                    className="text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-start justify-start mt-4 w-[74%] md:w-full">
                  <Img
                    className="h-[22px] md:h-auto object-cover w-[23px]"
                    src="images/img_settings_22x23.png"
                    alt="settings"
                  />
                  <Text
                    className="mt-0.5 text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Setting
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] mt-0.5 w-[79%] md:w-full">
                  <Img
                    className="h-[21px] md:h-auto object-cover w-[28%]"
                    src="images/img_logout.png"
                    alt="logout"
                  />
                  <Text
                    className="mt-0.5 text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Sign Out
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerYourlandwithProfilePage;
