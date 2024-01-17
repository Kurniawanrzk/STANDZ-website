import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-white-A700 h-[1024px] mx-auto relative w-full">
        <div className="h-[1024px] sm:h-[2068px] m-auto md:px-5 w-full">
          <div className="h-[1024px] sm:h-[2068px] m-auto w-full">
            <div className="h-[1024px] sm:h-[2068px] m-auto w-full">
              <div className="h-[1024px] sm:h-[2068px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <div className="bg-lime-600 h-[1024px] w-1/2"></div>
                    <div className="bg-blue_gray-900 h-[1024px] w-1/2"></div>
                  </div>
                </div>
                <div className="absolute bg-gray-50 border border-black-900 border-solid h-[820px] inset-[0] justify-center m-auto rounded-[25px] w-[84%]"></div>
              </div>
              <div className="absolute bg-lime-600_28 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[19px] right-[8%] rounded-[25px] w-[42%]">
                <div className="flex flex-col gap-2 items-center justify-start mb-3.5 w-[78%] md:w-full">
                  <Img
                    className="h-[119px] md:h-auto object-cover w-[32%]"
                    src="images/img_standzlogo.png"
                    alt="whatsappimage"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtRoundedMplus1cBold40"
                    >
                      START YOUR BUSINESS
                    </Text>
                    <div className="bg-blue_gray-100_b3 flex flex-row font-kokoro gap-[62px] items-end justify-start ml-0.5 md:ml-[0] mt-[17px] p-[7px] rounded-[15px] w-[98%] md:w-full">
                      <Img
                        className="h-[46px] md:h-auto ml-2.5 object-cover w-[45px]"
                        src="images/img_googlelogopngimages.png"
                        alt="googlelogopngim"
                      />
                      <Text
                        className="mb-0.5 mt-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtKokoroRegular24"
                      >
                        Sign Up with Google
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-end md:ml-[0] ml-[31px] mt-10 w-[91%] md:w-full">
                      <Line className="bg-black-900 h-px sm:mt-0 my-3.5 rotate-[1deg] w-[34%]" />
                      <Text
                        className="sm:ml-[0] ml-[46px] rotate-[1deg] text-2xl md:text-[22px] text-black-900_c1 sm:text-xl"
                        size="txtInterRegular24"
                      >
                        or
                      </Text>
                      <Line className="bg-black-900 h-px mb-[17px] sm:ml-[0] ml-[45px] sm:mt-0 mt-[11px] w-[37%]" />
                    </div>
                    <Input
                      name="groupTwenty"
                      placeholder="Full Name"
                      className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="md:ml-[0] ml-[5px] mt-[13px] w-[99%]"
                      shape="round"
                      color="gray_50"
                      size="md"
                    ></Input>
                    <Input
                      name="groupTwentyTwo"
                      placeholder="Your Email"
                      className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="md:ml-[0] ml-[5px] mt-1.5 w-[99%]"
                      shape="round"
                      color="gray_50"
                      size="md"
                    ></Input>
                    <Input
                      name="groupTwentyThree"
                      placeholder="Your Password"
                      className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="md:ml-[0] ml-[5px] mt-[7px] w-[99%]"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    ></Input>
                    <Input
                      name="groupTwentyOne"
                      placeholder="Re-enter your Password"
                      className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="ml-1.5 md:ml-[0] mt-2 w-[99%]"
                      shape="round"
                      color="gray_50"
                      size="md"
                    ></Input>
                    <Button
                      className="cursor-pointer font-bold font-inter leading-[normal] min-w-[432px] sm:min-w-full ml-0.5 md:ml-[0] mt-[43px] rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="blue_gray_900"
                      size="md"
                    >
                      Sign Up
                    </Button>
                    <div className="flex flex-row font-inter gap-[7px] items-center justify-start md:ml-[0] ml-[11px] mt-[23px] w-[71%] md:w-full">
                      <Text
                        className="text-black-900_bf text-xl"
                        size="txtInterRegular20"
                      >
                        Already have an account ?
                      </Text>
                      <Text
                        className="text-black-900 text-xl underline"
                        size="txtInterRegular20Black900"
                      >
                        Login
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[815px] inset-y-[0] left-[9%] my-auto object-cover rounded-[20px] w-[42%]"
              src="images/img_6671.png"
              alt="6671"
            />
          </div>
          <div className="absolute bottom-[14%] flex flex-col gap-2 items-center justify-center left-[6%] p-[13px] w-[51%]">
            <div className="md:h-[357px] h-[394px] sm:h-[521px] mt-7 relative w-[99%] md:w-full">
              <div className="absolute md:h-[329px] h-[393px] sm:h-[493px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[329px] h-[393px] sm:h-[493px] m-auto w-full">
                  <div className="absolute md:h-[329px] h-[393px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[116px] items-center justify-start w-full">
                        <Img
                          className="h-[276px]"
                          src="images/img_backgroundcomplete.svg"
                          alt="backgroundcompl"
                        />
                        <Img
                          className="h-px"
                          src="images/img_floor.svg"
                          alt="floor"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[244px] right-[22%]"
                      src="images/img_character3000.svg"
                      alt="character3000"
                    />
                    <Img
                      className="absolute bottom-[0] h-[329px] right-[11%]"
                      src="images/img_stand2.svg"
                      alt="standTwo"
                    />
                  </div>
                  <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-12 items-end justify-between left-[3%] w-[65%]">
                    <Img
                      className="h-[328px]"
                      src="images/img_stand1.svg"
                      alt="standOne"
                    />
                    <Img
                      className="h-[117px] sm:mt-0 mt-[211px]"
                      src="images/img_food2.svg"
                      alt="foodTwo"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[253px] right-[3%]"
                    src="images/img_character4.svg"
                    alt="characterFour"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[77px] left-[1%]"
                  src="images/img_food1.svg"
                  alt="foodOne"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[105px] right-[16%]"
                src="images/img_blackboard.svg"
                alt="blackboard"
              />
              <Img
                className="absolute bottom-[0] h-[252px] left-[34%]"
                src="images/img_character2000.svg"
                alt="character2000"
              />
              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[16%] w-[16%]">
                <div className="md:h-[241px] h-[253px] relative w-full">
                  <div className="absolute md:h-[241px] h-[253px] inset-y-[0] my-auto right-[2%] w-[88%]">
                    <div className="md:h-[241px] h-[253px] m-auto w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-col gap-1.5 justify-start w-full">
                          <div className="flex flex-col gap-[21px] justify-start ml-3.5 md:ml-[0] w-[86%] md:w-full">
                            <Img
                              className="h-[49px]"
                              src="images/img_play.svg"
                              alt="play"
                            />
                            <Img
                              className="h-[41px] md:ml-[0] ml-[33px]"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
                            <div className="md:h-[124px] h-[135px] relative w-full">
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%]">
                                <div className="flex flex-row items-center justify-evenly w-full">
                                  <Img
                                    className="h-[21px]"
                                    src="images/img_upload.svg"
                                    alt="upload"
                                  />
                                  <Img
                                    className="h-[21px]"
                                    src="images/img_upload.svg"
                                    alt="upload_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-[124px] inset-x-[0] mx-auto top-[0]"
                                src="images/img_group_blue_gray_900_01.svg"
                                alt="group"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[155px] inset-y-[0] left-[4%] my-auto"
                        src="images/img_group_gray_300_01.svg"
                        alt="group_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[50px] right-[0] top-[29%]"
                      src="images/img_group.svg"
                      alt="group_Two"
                    />
                  </div>
                  <Img
                    className="absolute h-[75px] left-[0] top-[19%]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="absolute h-[11px] right-[0] top-[40%]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
              </div>
            </div>
            <Img
              className="h-[21px] mb-1"
              src="images/img_plants.svg"
              alt="plants"
            />
          </div>
        </div>
        <Img
          className="absolute bottom-[10%] h-[548px] left-[8%] object-cover rounded-[20px] w-[42%]"
          src="images/img_63c6898eba6a4.png"
          alt="63c6898eba6aFour"
        />
      </div>
    </>
  );
};

export default SignUpPage;
