import React from "react";

import { Img, Text } from "components";

const SettingsLanguagePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-mitr items-center justify-start mx-auto p-[39px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1319px] mb-[47px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[95px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row gap-[38px] items-start justify-start w-[23%] sm:w-full">
                <Img
                  className="h-[55px] mt-[3px]"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtMitrRegular48"
                >
                  Settings
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row items-center justify-start w-[21%] sm:w-full">
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
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                    <div className="bg-light_green-200 h-[301px] p-[38px] sm:px-5 relative rounded-[10px] w-full">
                      <Img
                        className="h-[89px] mb-[-9.95px] mt-7 mx-auto z-[1]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Text
                        className="mb-[59px] mt-auto mx-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                        size="txtMitrRegular36"
                      >
                        Account
                      </Text>
                    </div>
                  </div>
                  <div className="bg-light_green-200 h-[301px] md:h-[97px] p-[11px] relative rounded-[10px] w-[19%] md:w-full">
                    <Img
                      className="absolute h-[97px] inset-x-[0] mx-auto object-cover top-[22%] w-[42%]"
                      src="images/img_bell68133732.png"
                      alt="bell68133733"
                    />
                    <Text
                      className="absolute bottom-[30%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
                      size="txtMitrRegular36"
                    >
                      Notification
                    </Text>
                  </div>
                  <div className="bg-light_green-200 flex md:flex-1 flex-col items-center justify-center p-[46px] md:px-10 sm:px-5 rounded-[10px] w-[19%] md:w-full">
                    <Img
                      className="h-[94px] md:h-auto mt-[15px] rounded-[50%] w-[95px]"
                      src="images/img_screenshot2024_94x95.png"
                      alt="screenshot2024"
                    />
                    <Text
                      className="mb-[42px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                      size="txtMitrRegular36"
                    >
                      Privacy
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                    <div className="bg-light_green-200_bf flex flex-col items-center justify-start p-7 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-[95px] mt-[33px]"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="mb-[60px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                        size="txtMitrRegular36"
                      >
                        Language
                      </Text>
                    </div>
                  </div>
                  <div className="bg-light_green-200 flex md:flex-1 flex-col items-center justify-start p-[52px] md:px-10 sm:px-5 rounded-[10px] w-[19%] md:w-full">
                    <div className="bg-gradient  h-[95px] mt-[9px] rounded-[47px] w-[95px]"></div>
                    <Text
                      className="mb-[39px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                      size="txtMitrRegular36"
                    >
                      Theme
                    </Text>
                  </div>
                </div>
                <div className="bg-light_green-200 flex flex-col gap-8 items-center justify-start p-[39px] sm:px-5 w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtMitrRegular48"
                  >
                    Language
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[100px] w-[18%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_iconsradiobuttonchecked.svg"
                          alt="iconsradiobutto"
                        />
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtMitrRegular32"
                        >
                          Indonesia
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_iconsradiobuttonunchecked.svg"
                          alt="iconsradiobutto_One"
                        />
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtMitrRegular32"
                        >
                          English
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

export default SettingsLanguagePage;
