import React from "react";

import { Img, Text } from "components";

const SettingsThemebuyerPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-mitr items-center justify-start mx-auto p-[39px] sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1336px] mb-[47px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[95px] justify-start w-full">
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
              <div className="flex sm:flex-1 flex-row items-center justify-between w-[22%] sm:w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-[35px]"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
                <Img
                  className="h-[33px] md:h-auto object-cover w-[34px]"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764"
                />
                <div className="flex flex-row gap-[11px] items-center justify-start">
                  <Img
                    className="h-[51px] md:h-auto rounded-[50%] w-[52px]"
                    src="images/img_redvelvetjoyespoir.png"
                    alt="redvelvetjoyesp"
                  />
                  <Text
                    className="text-black-900 text-xl"
                    size="txtMitrRegular20"
                  >
                    Olivia W.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[18px] w-[93%] md:w-full">
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
                  <div className="bg-light_green-200_bf flex md:flex-1 flex-col items-center justify-start p-[52px] md:px-10 sm:px-5 rounded-[10px] w-[19%] md:w-full">
                    <div className="bg-gradient  h-[95px] mt-[9px] rounded-[47px] w-[95px]"></div>
                    <Text
                      className="mb-[39px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                      size="txtMitrRegular36"
                    >
                      Theme
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient1  border border-black-900 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-[30px] w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start mt-[17px] w-[57%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="bg-lime-600 flex flex-col items-start justify-center p-12 md:px-10 sm:px-5 rounded-[45px]">
                        <Text
                          className="mb-14 mt-[60px] text-3xl sm:text-[26px] md:text-[28px] text-light_green-200"
                          size="txtMitrRegular30"
                        >
                          SPRING
                        </Text>
                      </div>
                      <div className="bg-deep_orange-A100 flex flex-col items-center justify-center p-[42px] md:px-10 sm:px-5 rounded-[45px]">
                        <Text
                          className="mb-[62px] mt-[66px] text-3xl sm:text-[26px] md:text-[28px] text-light_green-200"
                          size="txtMitrRegular30"
                        >
                          SUMMER
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="md:h-[50px] h-[52px] relative w-[32%] sm:w-full">
                        <div className="absolute bg-light_green-200_01 h-[50px] inset-x-[0] mx-auto top-[0] w-[98%]"></div>
                        <div className="absolute md:h-[50px] h-[52px] inset-[0] justify-center m-auto w-[98%]">
                          <div className="absolute bg-light_green-200_01 h-[50px] inset-x-[0] mx-auto top-[0] w-full"></div>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                            size="txtMitrRegular30Black900"
                          >
                            Select
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[50px] h-[52px] relative w-[31%] sm:w-full">
                        <div className="absolute bg-blue_gray-900_51 h-[50px] inset-x-[0] mx-auto top-[0] w-full"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-light_green-900 w-max"
                          size="txtMitrRegular30Lightgreen900"
                        >
                          Select
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

export default SettingsThemebuyerPage;
