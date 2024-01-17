import React from "react";

import { Img, List, Text } from "components";

const SettingsNotificationsPage = () => {
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
                  <div className="bg-light_green-200_bf h-[301px] md:h-[97px] p-[11px] relative rounded-[10px] w-[19%] md:w-full">
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
                    <div className="bg-light_green-200 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[10px] w-full">
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
                <div className="bg-light_green-200 flex flex-col items-start justify-start p-[18px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[31px] md:ml-[0] ml-[7px] w-[73%] md:w-full">
                    <div className="flex flex-col gap-[7px] justify-start">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                        size="txtMitrRegular48"
                      >
                        Notification
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[15px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[98%] sm:w-full"
                        size="txtMitrRegular32"
                      >
                        You will be notified of any material changes, but you
                        can decide what information you would like to receive.
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[9px] md:mt-0 mt-[37px] w-[23%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col relative w-full">
                        <Text
                          className="mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                          size="txtMitrRegular40"
                        >
                          In STANDZ
                        </Text>
                        <div className="flex flex-row items-center justify-between ml-3 mt-[-4.66px] w-[70%] z-[1]">
                          <div className="md:h-[45px] h-[77px] relative w-[33%]">
                            <Text
                              className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                              size="txtMitrRegular24"
                            >
                              yes
                            </Text>
                            <Img
                              className="absolute bottom-[0] h-[45px] inset-x-[0] mx-auto w-[45px]"
                              src="images/img_iconsradiobuttonchecked.svg"
                              alt="iconsradiobutto"
                            />
                          </div>
                          <div className="md:h-[45px] h-[78px] relative w-[33%]">
                            <Text
                              className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] w-max"
                              size="txtMitrRegular24"
                            >
                              no
                            </Text>
                            <Img
                              className="absolute bottom-[0] h-[45px] inset-x-[0] mx-auto w-[45px]"
                              src="images/img_iconsradiobuttonunchecked.svg"
                              alt="iconsradiobutto_One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[138px] md:h-[78px] relative w-[78%]">
                        <Text
                          className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 top-[0] w-max"
                          size="txtMitrRegular40"
                        >
                          In Email
                        </Text>
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[90%]">
                          <div className="md:h-[45px] h-[77px] relative w-[33%]">
                            <Text
                              className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                              size="txtMitrRegular24"
                            >
                              yes
                            </Text>
                            <Img
                              className="absolute bottom-[0] h-[45px] inset-x-[0] mx-auto w-[45px]"
                              src="images/img_iconsradiobuttonchecked.svg"
                              alt="iconsradiobutto"
                            />
                          </div>
                          <div className="md:h-[45px] h-[78px] relative w-[33%]">
                            <Text
                              className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0] w-max"
                              size="txtMitrRegular24"
                            >
                              no
                            </Text>
                            <Img
                              className="absolute bottom-[0] h-[45px] inset-x-[0] mx-auto w-[45px]"
                              src="images/img_iconsradiobuttonunchecked.svg"
                              alt="iconsradiobutto_One"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
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

export default SettingsNotificationsPage;
