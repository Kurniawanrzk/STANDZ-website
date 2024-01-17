import React from "react";

import { Img, Line, Text } from "components";

const WalletOnePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-center justify-end mx-auto pt-9 w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex sm:flex-col flex-row font-mitr md:gap-10 items-start justify-between max-w-[1324px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-[38px] items-center justify-start w-[19%] sm:w-full">
              <Img
                className="h-[55px]"
                src="images/img_arrowdown_black_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtMitrRegular48"
              >
                Wallet
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-row items-center justify-start sm:mt-0 mt-[18px] w-[21%] sm:w-full">
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
            </div>
          </div>
          <Text
            className="mt-[17px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtMadaMedium48"
          >
            Your Pocket
          </Text>
          <Text
            className="mt-2 md:text-5xl text-8xl text-black-900"
            size="txtMadaSemiBold96"
          >
            Rp. 15.000.000
          </Text>
          <div className="bg-blue_gray-100 flex flex-col font-lucidasans items-center justify-start mt-6 p-3.5 rounded-[35px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1250px] mb-[454px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[37px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[202px] w-[78%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[46%] md:w-full">
                    <div className="flex flex-row gap-[37px] items-center justify-start">
                      <Img
                        className="h-[90px] md:h-auto object-cover w-[90px]"
                        src="images/img_sendletter.png"
                        alt="sendletter"
                      />
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                        size="txtLucidaSansDemi48"
                      >
                        SEND
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-[76px] my-[7px] w-px" />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[36%] md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                      size="txtLucidaSansDemi48"
                    >
                      RECEIVE
                    </Text>
                    <Img
                      className="h-[90px] md:h-auto object-cover w-[90px]"
                      src="images/img_sendletter_90x90.png"
                      alt="sendletter_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-lustria gap-[19px] items-start justify-start w-full">
                  <Text
                    className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtLustriaRegular32"
                  >
                    Today
                  </Text>
                  <div className="bg-lime-600 border border-black-900 border-solid flex flex-col items-center justify-end p-[11px] rounded-[25px] w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-2 w-[98%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                        size="txtLustriaRegular24"
                      >
                        Outgoing Money
                      </Text>
                      <div className="flex flex-col justify-start">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtLustriaRegular32"
                        >
                          -Rp. 2.500.000
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[57px] text-lg text-white-A700"
                          size="txtLustriaRegular18"
                        >
                          For Land rent
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletOnePage;
