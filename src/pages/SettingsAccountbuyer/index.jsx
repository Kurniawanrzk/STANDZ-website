import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SettingsAccountbuyerPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-mitr items-center justify-start mx-auto p-[39px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[95px] justify-start max-w-[1336px] mb-[47px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
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
            <div className="flex sm:flex-1 flex-row items-center justify-between sm:mt-0 mt-[23px] w-[22%] sm:w-full">
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
                  <div className="bg-light_green-200_bf h-[301px] p-[38px] sm:px-5 relative rounded-[10px] w-full">
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
              <div className="bg-light_green-200 flex flex-col items-center justify-end p-[11px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-2.5 w-[99%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[41px] w-1/5 md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[247px] md:h-auto object-cover rounded-bl-[118px] rounded-br-[118px] w-full"
                        src="images/img_redvelvetjoyespoir_247x236.png"
                        alt="redvelvetjoyesp_One"
                      />
                    </div>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[233px] rounded-[10px] text-center text-xl"
                      color="gray_200_bf"
                      size="sm"
                    >
                      Change Picture
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[39px] md:ml-[0] ml-[37px] md:mt-0 mt-[45px] w-[41%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-full">
                      <div className="md:h-[46px] h-[78px] relative w-[45%] sm:w-full">
                        <Text
                          className="absolute left-[1%] text-black-900 text-xl top-[0] w-[49%] sm:w-full"
                          size="txtMitrRegular20"
                        >
                          First Name :
                        </Text>
                        <Input
                          name="groupSeventyFive"
                          placeholder="Olivia"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                          wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black-900 text-xl w-[48%] sm:w-full"
                          size="txtMitrRegular20"
                        >
                          Last Name :
                        </Text>
                        <Text
                          className="bg-blue_gray-100_bf h-[41px] justify-center pl-[15px] sm:pr-5 pr-[35px] py-1 text-black-900 text-xl w-[233px]"
                          size="txtMitrRegular20"
                        >
                          W.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[19px] w-[81%] md:w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtMitrRegular20"
                      >
                        Gender :
                      </Text>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtMitrRegular20"
                      >
                        Date of Birth :
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-9 items-center justify-between mt-[3px] w-full">
                      <Input
                        name="gender_One"
                        placeholder="Female"
                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                      ></Input>
                      <Input
                        name="date"
                        placeholder="12 Jan 1999"
                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                      ></Input>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[5px] mt-[19px] text-black-900 text-xl"
                      size="txtMitrRegular20"
                    >
                      Phone :
                    </Text>
                    <Input
                      name="groupSeventySix"
                      placeholder="081234567890"
                      className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                      wrapClassName="ml-0.5 md:ml-[0] mt-1 w-[47%]"
                    ></Input>
                  </div>
                  <Line className="bg-black-900 h-[314px] md:h-px mb-[13px] ml-3 md:ml-[0] md:mt-0 mt-[30px] md:w-full w-px" />
                  <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] md:mt-0 mt-[45px] w-[35%] md:w-full">
                    <div className="md:h-[41px] h-[77px] relative w-[93%] sm:w-full">
                      <Text
                        className="absolute left-[3%] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[0]"
                        size="txtMitrRegular24"
                      >
                        Your Account :
                      </Text>
                      <Input
                        name="email"
                        placeholder="olipiaw@gmail.com"
                        className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                        wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto w-full"
                      ></Input>
                    </div>
                    <div className="bg-red-100 flex flex-col font-inter items-center justify-end mt-[69px] p-[13px] rounded-[25px]">
                      <Text
                        className="mt-0.5 text-purple-A200 text-xl"
                        size="txtInterBold20"
                      >
                        Do you want to rent out your land?
                      </Text>
                      <Text
                        className="text-gray-800_02 text-xl"
                        size="txtInterBold20Gray80002"
                      >
                        Switch to Tenant Account
                      </Text>
                    </div>
                    <div className="flex flex-row font-mitr items-end justify-start mt-[41px] w-[83%] md:w-full">
                      <Text
                        className="mt-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtMitrRegular24"
                      >
                        Login to other accounts
                      </Text>
                      <Img
                        className="h-[46px] ml-1 rounded-tl-[30px]"
                        src="images/img_arrowleft_black_900.svg"
                        alt="arrowleft"
                      />
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

export default SettingsAccountbuyerPage;
