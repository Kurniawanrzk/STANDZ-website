import React from "react";

import { Img, List, Text } from "components";

const DailyAttendancePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-mitr items-center justify-start mx-auto p-[39px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[1318px] mb-[522px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[38px] items-start justify-start w-[39%] md:w-full">
              <Img
                className="h-[55px] sm:mt-0 mt-[3px]"
                src="images/img_arrowdown_black_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtMitrRegular48"
              >
                Daily Attendance
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-between w-[22%] md:w-full">
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
          <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-4 rounded-[10px] w-[95%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mb-[9px] mt-3 w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 w-[89%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                  <div className="h-[95px] sm:ml-[0] relative w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-[95px] m-auto rounded-[49px] w-full"></div>
                    <Img
                      className="absolute h-[74px] inset-[0] justify-center m-auto object-cover w-[69%]"
                      src="images/img_gift.png"
                      alt="gift"
                    />
                  </div>
                </List>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[95px] items-center justify-start p-0.5 w-[9%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group56.svg')" }}
                >
                  <div className="bg-red-600 flex flex-col items-center justify-end my-[9px] p-[3px] rotate-[32deg] rounded-[25px]">
                    <Text
                      className="text-black-900 text-xl w-[83%] sm:w-full"
                      size="txtMitrRegular20"
                    >
                      BONUS
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[67px] relative w-[31%]">
                <div className="absolute bg-lime-900 border border-black-900 border-solid h-[67px] inset-[0] justify-center m-auto rounded-[15px] w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                  size="txtMitrRegular40WhiteA700"
                >
                  LOGIN
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyAttendancePage;
