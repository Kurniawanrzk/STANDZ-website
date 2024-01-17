import React from "react";

import { Img, Text } from "components";

const SettingsPrivacybuyerPage = () => {
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
                  <div className="bg-light_green-200_bf flex md:flex-1 flex-col items-center justify-center p-[46px] md:px-10 sm:px-5 rounded-[10px] w-[19%] md:w-full">
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
                <div className="bg-light_green-200 flex flex-col items-center justify-start p-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-0.5 w-[46%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                        size="txtMitrRegular48"
                      >
                        Privacy
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[15px] mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[98%] sm:w-full"
                        size="txtMitrRegular24"
                      >
                        Built-in additional security features to protect your
                        account, such as enabling two-factor authentication and
                        checking the list of connected devices.
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start ml-2 md:ml-[0] w-[47%] md:w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_iconscheckbox.svg"
                          alt="iconscheckbox"
                        />
                        <Text
                          className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtMitrRegular24"
                        >
                          use code to login
                        </Text>
                      </div>
                    </div>
                    <div className="bg-lime-300_7c flex md:flex-1 flex-col justify-center p-[23px] sm:px-5 rounded-[40px] w-[48%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[91px] mr-[97px] mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                        size="txtMitrRegular36"
                      >
                        Create a password
                      </Text>
                      <Text
                        className="ml-5 md:ml-[0] mr-[333px] mt-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtMitrRegular24"
                      >
                        New Password
                      </Text>
                      <div className="bg-blue_gray-100 h-11 md:ml-[0] ml-[29px] mt-3 w-[95%]"></div>
                      <div className="h-[81px] md:h-[91px] mb-[35px] ml-3.5 md:ml-[0] mt-3 relative w-[98%] sm:w-full">
                        <Text
                          className="absolute left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                          size="txtMitrRegular24"
                        >
                          Enter the password again
                        </Text>
                        <div className="absolute bg-blue_gray-100 bottom-[0] h-11 inset-x-[0] mx-auto w-[98%]"></div>
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

export default SettingsPrivacybuyerPage;
