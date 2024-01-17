import React from "react";

import { Button, Img, Input, Text } from "components";

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-mitr items-center justify-end mx-auto p-8 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1340px] mt-[3px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
            <Img
              className="h-[55px]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown"
            />
            <Text
              className="md:ml-[0] ml-[38px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtMitrRegular48"
            >
              Profile
            </Text>
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[806px] w-[21%] md:w-full">
              <Img
                className="h-9 md:h-auto object-cover w-[35px]"
                src="images/img_bell68133732.png"
                alt="bell68133732"
              />
              <div className="h-[33px] ml-[22px] relative w-[34px]">
                <Img
                  className="h-[33px] m-auto object-cover w-[34px]"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764"
                />
                <Img
                  className="absolute h-[33px] inset-[0] justify-center m-auto object-cover w-[34px]"
                  src="images/img_speechbubble7647467.png"
                  alt="speechbubble764_One"
                />
              </div>
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
          <div className="md:h-[406px] h-[443px] mt-[47px] relative w-full">
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
            <div className="absolute bottom-[0] flex flex-col h-60 items-center justify-start left-[38%] w-60">
              <Img
                className="h-60 md:h-auto rounded-[50%] w-60"
                src="images/img_do2024exoseasons_240x240.png"
                alt="do2024exoseason_One"
              />
            </div>
          </div>
          <Button
            className="cursor-pointer leading-[normal] min-w-[233px] md:ml-[0] ml-[517px] mt-[15px] rounded-[10px] text-center text-xl"
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
                  placeholder="Heri"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:w-full"
                ></Input>
                <Text
                  className="bg-blue_gray-100_bf h-[41px] justify-center pl-[17px] sm:pr-5 pr-[35px] py-1 text-black-900 text-xl w-[259px]"
                  size="txtMitrRegular20"
                >
                  P.
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
                  placeholder="Male"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="sm:flex-1 sm:w-full"
                ></Input>
                <Input
                  name="date"
                  placeholder="12 Jan 2023"
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
                  placeholder="herip@gmail.com"
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
                <div className="bg-blue_gray-100_bf flex flex-col items-center justify-end pl-1 py-1 rounded-[32px] w-full">
                  <Text
                    className="mt-0.5 text-black-900 text-sm w-[98%] sm:w-full"
                    size="txtMitrRegular14"
                  >
                    Born on Jan 12, 2023, Heri P. is a passionate entrepreneur
                    who embarked on a tech-driven journey. As the founder and
                    CEO of an innovative startup, Heri blends technical
                    expertise with keen business intuition. His educational
                    background in Informatics Engineering fuels his
                    paradigm-shifting solutions in the tech industry. Heri
                    thrives on tracking global business trends, collaborating
                    with professionals, and seeking new opportunities. With
                    inspiring leadership, he channels his passion for positive
                    change, achieving remarkable milestones in entrepreneurship.
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

export default UserProfilePage;
