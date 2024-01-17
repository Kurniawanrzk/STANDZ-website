import React from "react";

import { Button, Img, Input, Text } from "components";

const UserProfilebuyerPage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-mitr items-center justify-end mx-auto p-8 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1340px] mt-[3px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
            <div className="flex flex-row gap-[38px] items-center justify-start w-[19%] sm:w-full">
              <Img
                className="h-[55px]"
                src="images/img_arrowdown_black_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtMitrRegular48"
              >
                Profile
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between sm:mt-0 mt-[19px] w-[22%] sm:w-full">
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
          <div className="md:h-[406px] h-[439px] mt-[47px] relative w-full">
            <div className="absolute h-[359px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[359px] m-auto object-cover w-full"
                src="images/img_rectangle64.png"
                alt="rectangleSixtyFour"
              />
              <div className="absolute bg-lime-300 bottom-[2%] flex flex-col h-[65px] items-start justify-start p-0.5 right-[1%] rounded-[32px] w-[65px]">
                <Img
                  className="h-[58px] md:h-auto mb-[3px] object-cover w-[92%]"
                  src="images/img_cameraicon.png"
                  alt="cameraicon"
                />
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[38%] w-[18%]">
              <Img
                className="h-[259px] md:h-auto object-cover rounded-bl-[119px] rounded-br-[119px] w-full"
                src="images/img_redvelvetjoyespoir_259x238.png"
                alt="redvelvetjoyesp_One"
              />
            </div>
          </div>
          <Button
            className="cursor-pointer leading-[normal] min-w-[233px] md:ml-[0] ml-[517px] mt-[19px] rounded-[10px] text-center text-xl"
            color="gray_200_bf"
            size="sm"
          >
            Change Picture
          </Button>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[9px] mt-[26px] w-[95%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[46%] md:w-full">
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] w-3/4 md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  First Name :
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Last Name :
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between mt-1 w-full">
                <Input
                  name="groupSixtyEight"
                  placeholder="Olivia"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:w-full"
                ></Input>
                <Text
                  className="bg-blue_gray-100_bf h-[41px] justify-center pl-[17px] sm:pr-5 pr-[35px] py-1 text-black-900 text-xl w-[259px]"
                  size="txtMitrRegular20"
                >
                  W.
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-5 w-[79%] md:w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-[58px] items-center justify-between mt-[3px] w-full">
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
                className="ml-1.5 md:ml-[0] mt-5 text-black-900 text-xl"
                size="txtMitrRegular20"
              >
                Phone :
              </Text>
              <Input
                name="groupSeventyTwo"
                placeholder="081234567890"
                className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName="md:ml-[0] ml-[3px] mt-1 w-[47%]"
              ></Input>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[64%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Email :
                </Text>
                <Input
                  name="email_One"
                  placeholder="olipiaw@gmail.com"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="mt-[3px] w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="ml-1 md:ml-[0] text-black-900 text-xl"
                  size="txtMitrRegular20"
                >
                  Bio :
                </Text>
                <div className="bg-blue_gray-100_bf flex flex-col items-start justify-start p-2.5 rounded-[32px] w-full">
                  <Text
                    className="mb-[111px] ml-3 md:ml-[0] text-black-900 text-xl"
                    size="txtMitrRegular20"
                  >
                    Start your journey with me!
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

export default UserProfilebuyerPage;
