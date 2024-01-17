import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const ReccomendationswmenuOnePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[38px] md:h-auto mt-[3px] object-cover w-1/5"
          src="images/img_home71686071.png"
          alt="home71686071_One"
        />
      ),
      label: "HOME",
      href: "/sellerhomepagewithmenupanel",
      active: window.location.pathname === "/sellerhomepagewithmenupanel",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mt-1 object-cover w-[33px]"
          src="images/img_time949631.png"
          alt="time949631_One"
        />
      ),
      label: "HISTORY",
      href: "/buyerhistorywprofile",
      active: window.location.pathname === "/buyerhistorywprofile",
    },
    {
      icon: (
        <Img
          className="absolute h-[33px] left-[33%] object-cover top-[0] w-[33px]"
          src="images/img_linkedin3800006.png"
          alt="linkedin3800006_One"
        />
      ),
      label: "<>JOB<br />VACANCIES</>",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mb-[17px] object-cover w-[13%]"
          src="images/img_screenshot2024.png"
          alt="screenshot2024_One"
        />
      ),
      label: "YOUR LAND",
      href: "/selleryourlandwithmenu",
      active: window.location.pathname === "/selleryourlandwithmenu",
    },
  ];

  return (
    <>
      <div className="bg-lime-600 flex flex-col font-kd items-center justify-end mx-auto w-full">
        <div className="overflow-x-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between overflow-auto w-full">
            <div className="h-[1041px] md:px-5 relative w-[19%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[215px] h-full items-center justify-start mt-7 mx-auto w-[77%]">
                <div className="md:h-[101px] h-[142px] relative w-[71%]">
                  <Img
                    className="absolute h-[101px] inset-x-[0] mx-auto object-cover top-[0] w-[81%]"
                    src="images/img_standzlogo.png"
                    alt="standzlogo"
                  />
                  <Text
                    className="absolute bottom-[0] inset-x-[0] italic mx-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
                    size="txtK2DExtraBoldItalic36"
                  >
                    STANDZ
                  </Text>
                </div>
                <div className="flex flex-col font-kanit items-center justify-start w-full">
                  <div className="bg-deep_purple-400_72_01 border border-black-900 border-solid flex flex-row gap-[23px] items-start justify-start p-0.5 rounded-[20px] w-full">
                    <Img
                      className="h-[38px] md:h-auto ml-3.5 mt-1.5 object-cover w-[19%]"
                      src="images/img_home71686071.png"
                      alt="home71686071"
                    />
                    <Text
                      className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtKanitBold32"
                    >
                      HOME
                    </Text>
                  </div>
                  <div className="bg-gray-300 border border-black-900 border-solid flex flex-row gap-[18px] items-center justify-evenly mt-[38px] p-1.5 rounded-[20px] w-full">
                    <Img
                      className="h-[33px] md:h-auto object-cover w-[33px]"
                      src="images/img_time949631.png"
                      alt="time949631"
                    />
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtKanitBold28"
                    >
                      HISTORY
                    </Text>
                  </div>
                  <div className="h-[66px] md:h-[91px] mt-[38px] relative w-full">
                    <div className="absolute bg-gray-300 border border-black-900 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-2.5 rounded-[20px] top-[0] w-full">
                      <Img
                        className="h-[33px] md:h-auto md:ml-[0] ml-[9px] object-cover w-[33px]"
                        src="images/img_linkedin3800006.png"
                        alt="linkedin3800006"
                      />
                    </div>
                    <Text
                      className="absolute bottom-[0] right-[12%] text-black-900 text-center text-lg"
                      size="txtKanitBold18"
                    >
                      <>
                        JOB
                        <br />
                        VACANCIES
                      </>
                    </Text>
                  </div>
                  <div className="bg-gray-300 border border-black-900 border-solid flex flex-row gap-6 items-center justify-evenly mt-[27px] p-2.5 rounded-[20px] w-full">
                    <Img
                      className="h-[33px] md:h-auto object-cover w-[14%]"
                      src="images/img_screenshot2024.png"
                      alt="screenshot2024"
                    />
                    <Text
                      className="text-black-900 text-xl"
                      size="txtKanitBold20"
                    >
                      YOUR LAND
                    </Text>
                  </div>
                </div>
              </div>
              <Sidebar11 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden inset-[0] justify-center m-auto overflow-auto rounded-[35px] top-[0]" />
            </div>
            <div className="flex md:flex-1 flex-col font-mavenpro items-start justify-start md:px-5 w-[90%] md:w-full">
              <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-full">
                <div className="flex md:flex-col flex-row font-inriasans md:gap-10 items-start justify-between ml-1.5 md:ml-[0] w-[85%] md:w-full">
                  <div className="bg-blue_gray-100 flex flex-row items-start justify-between mb-2 p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[45%] md:w-full">
                    <Text
                      className="ml-[21px] mt-[3px] text-black-900_87 text-xl"
                      size="txtInriaSansRegular20"
                    >
                      Search..
                    </Text>
                    <Img
                      className="h-[29px] md:h-auto mr-[13px] object-cover w-7"
                      src="images/img_search1498521.png"
                      alt="search1498521"
                    />
                  </div>
                  <div className="flex flex-row font-mitr items-center justify-start w-[28%] md:w-full">
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
                    <Img
                      className="h-[13px] md:h-auto ml-[13px] object-cover w-[9%]"
                      src="images/img_arrowdownsign.png"
                      alt="arrowdownsign"
                    />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[55px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                  size="txtMavenProBold38"
                >
                  Nearby
                </Text>
                <div className="flex md:flex-col flex-row font-lilitaone md:gap-10 items-center justify-between mt-[5px] w-full">
                  <div className="bg-blue_gray-100 flex md:flex-1 flex-col gap-[9px] items-center justify-start md:mt-0 mt-0.5 pb-[15px] rounded-[35px] w-[23%] md:w-full">
                    <Img
                      className="h-[168px] md:h-auto object-cover rounded-[35px] w-full"
                      src="images/img_walkwaygarden.png"
                      alt="walkwaygarden"
                    />
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <div className="md:h-5 h-[39px] relative w-1/2">
                        <div className="absolute font-lucidasans md:h-[18px] h-[19px] left-[0] top-[0] w-[71%]">
                          <div className="absolute bg-blue_gray-100 border border-black-900_7f border-solid h-[18px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900 w-max"
                            size="txtLucidaSansDemi15"
                          >
                            City Center
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                          size="txtKarmaRegular16"
                        >
                          Jlaben Kronco Mall
                        </Text>
                      </div>
                      <div className="md:h-[26px] h-[34px] relative w-[90%]">
                        <Text
                          className="absolute left-[7%] text-black-900 text-lg top-[0]"
                          size="txtKarmaBold18"
                        >
                          Klojen City
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                        <Img
                          className="absolute h-[13px] left-[0] object-cover top-[0] w-3"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848"
                        />
                      </div>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[262px] ml-1 md:ml-[0] mt-[52px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        shape="round"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <div className="md:h-[346px] h-[366px] relative w-[23%] md:w-full">
                    <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-3.5 rounded-[35px] w-full">
                      <div className="font-lucidasans md:h-[180px] h-[19px] mt-[162px] relative w-[35%]">
                        <div className="absolute bg-blue_gray-100 border border-black-900_7f border-solid h-[18px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900 w-max"
                          size="txtLucidaSansDemi15"
                        >
                          City Center
                        </Text>
                      </div>
                      <Text
                        className="text-base text-black-900"
                        size="txtKarmaRegular16"
                      >
                        Panang Square Mall
                      </Text>
                      <div className="h-8 relative w-[89%]">
                        <Img
                          className="h-[13px] mb-[undefinedpx] object-cover w-3 z-[1]"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848_One"
                        />
                        <Text
                          className="mb-[-0.7px] ml-[15px] text-[17px] text-black-900 z-[1]"
                          size="txtLucidaSansDemi17"
                        >
                          Omuni City
                        </Text>
                        <Text
                          className="mt-auto mx-auto text-[13px] text-black-900_8c"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-lilitaone leading-[normal] min-w-[262px] mt-[52px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        shape="round"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                    <Img
                      className="absolute h-[168px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                      src="images/img_emptyfloorfro.png"
                      alt="emptyfloorfro"
                    />
                  </div>
                  <div className="bg-blue_gray-100 flex md:flex-1 flex-col gap-[9px] items-center justify-start md:mt-0 mt-0.5 pb-[15px] rounded-[35px] w-[23%] md:w-full">
                    <Img
                      className="h-[168px] md:h-auto object-cover rounded-[35px] w-full"
                      src="images/img_windingroadth.png"
                      alt="windingroadth"
                    />
                    <div className="flex flex-col gap-[52px] items-start justify-start w-[91%] md:w-full">
                      <div className="font-lusitana md:h-[62px] h-[73px] relative w-[90%]">
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[54%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="font-lucidasans h-[18px] relative w-3/4">
                              <div className="absolute bg-blue_gray-100 border border-black-900_7f border-solid h-[18px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900 w-max"
                                size="txtLucidaSansDemi15"
                              >
                                City Center
                              </Text>
                            </div>
                            <Text
                              className="text-base text-black-900"
                              size="txtKarmaRegular16"
                            >
                              Nayang Residence
                            </Text>
                            <div className="flex flex-row font-karma gap-[5px] items-start justify-start w-[91%] md:w-full">
                              <Img
                                className="h-[13px] md:h-auto mt-0.5 object-cover w-3.5"
                                src="images/img_placeholder684809.png"
                                alt="placeholder6848_Two"
                              />
                              <Text
                                className="text-black-900 text-lg"
                                size="txtKarmaBold18"
                              >
                                Sibada City
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-lilitaone leading-[normal] min-w-[262px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        shape="round"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <div className="md:h-[355px] h-[367px] relative w-[23%] md:w-full">
                    <div className="absolute bg-blue_gray-100 flex flex-col gap-[52px] h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[35px] w-full">
                      <div className="font-lusitana md:h-[232px] h-[73px] mt-[168px] relative w-[89%]">
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                        <div className="absolute flex flex-col font-karma items-center justify-start left-[0] top-[0] w-[47%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="h-[38px] relative w-[83%]">
                              <div className="flex flex-col font-karma h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-blue_gray-100 border border-black-900_7f border-solid h-[18px] rounded-[5px] w-[98%]"></div>
                                  <Text
                                    className="text-base text-black-900"
                                    size="txtKarmaRegular16"
                                  >
                                    Danjing Park
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[15px] text-black-900 top-[0] w-max"
                                size="txtLucidaSansDemi15"
                              >
                                City Center
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Img
                                className="h-[13px] md:h-auto mt-[3px] object-cover w-3"
                                src="images/img_placeholder684809.png"
                                alt="placeholder6848_Three"
                              />
                              <Text
                                className="text-black-900 text-lg"
                                size="txtKarmaBold18"
                              >
                                Sibada City
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-lilitaone leading-[normal] mb-0.5 min-w-[262px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        shape="round"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                    <Img
                      className="absolute h-[168px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                      src="images/img_emptyparkingwithtrees.png"
                      alt="emptyparkingwit"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="mt-[19px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                size="txtMavenProBold38"
              >
                Lowest to Highest Price
              </Text>
              <div className="flex md:flex-col flex-row font-lusitana md:gap-5 items-center justify-start md:ml-[0] ml-[7px] mt-[13px] w-[74%] md:w-full">
                <div className="bg-blue_gray-100 flex flex-col gap-[7px] items-center justify-start pb-3.5 rounded-[35px] w-[31%] md:w-full">
                  <Img
                    className="h-[159px] md:h-auto object-cover rounded-[35px] w-full"
                    src="images/img_walkwaygarden.png"
                    alt="walkwaygarden_One"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <div className="font-lucidasans h-[18px] relative w-[35%]">
                      <div className="absolute bg-blue_gray-100 border border-black-900_7f border-solid h-[17px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900 w-max"
                        size="txtLucidaSansDemi15"
                      >
                        City Center
                      </Text>
                    </div>
                    <Text
                      className="text-base text-black-900"
                      size="txtKarmaRegular16"
                    >
                      Jlaben Kronco Mall
                    </Text>
                    <div className="md:h-6 h-[30px] ml-0.5 md:ml-[0] relative w-[89%]">
                      <Text
                        className="absolute left-[6%] text-black-900 text-lg top-[0]"
                        size="txtKarmaBold18"
                      >
                        Klojen City
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                        size="txtLusitana13"
                      >
                        Roadways • Market • Parking lot • 24-hour access
                      </Text>
                      <Img
                        className="absolute h-3 left-[0] object-cover top-[0] w-[11px]"
                        src="images/img_placeholder684809.png"
                        alt="placeholder6848_Four"
                      />
                    </div>
                    <Text
                      className="ml-12 md:ml-[0] mt-[29px] text-base text-black-900"
                      size="txtMavenProBold16"
                    >
                      Rp. 3.500.000/month
                    </Text>
                    <Button
                      className="cursor-pointer font-lilitaone leading-[normal] min-w-[260px] ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="round"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
                <div className="md:h-[292px] h-[344px] md:ml-[0] ml-[43px] relative w-[31%] md:w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-3.5 rounded-[35px] w-full">
                    <div className="md:h-[173px] h-[38px] mt-[152px] relative w-[54%]">
                      <div className="absolute font-lucidasans h-[18px] left-[0] top-[0] w-[66%]">
                        <div className="absolute bg-blue_gray-100 border border-black-900_7f border-solid h-[17px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900 w-max"
                          size="txtLucidaSansDemi15"
                        >
                          City Center
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                        size="txtKarmaRegular16"
                      >
                        Panang Square Mall
                      </Text>
                    </div>
                    <div className="h-[30px] relative w-[89%]">
                      <Img
                        className="h-3 mb-[undefinedpx] object-cover w-3 z-[1]"
                        src="images/img_placeholder684809.png"
                        alt="placeholder6848_Five"
                      />
                      <Text
                        className="mb-[-1.01px] ml-4 text-[17px] text-black-900 z-[1]"
                        size="txtLucidaSansDemi17"
                      >
                        Omuni City
                      </Text>
                      <Text
                        className="mt-auto mx-auto text-[13px] text-black-900_8c"
                        size="txtLusitana13"
                      >
                        Roadways • Market • Parking lot • 24-hour access
                      </Text>
                    </div>
                    <div className="h-[62px] mt-[31px] relative w-full">
                      <Text
                        className="mb-[-1.12px] mx-auto text-base text-black-900 z-[1]"
                        size="txtMavenProBold16"
                      >
                        Rp. 4.250.000/month
                      </Text>
                      <div className="bg-pink-900 flex flex-col font-lilitaone items-center justify-start mt-auto mx-auto p-[3px] rounded-[20px] w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtLilitaOne32WhiteA700"
                        >
                          BOOK NOW
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[159px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src="images/img_emptyfloorfro.png"
                    alt="emptyfloorfro_One"
                  />
                </div>
                <div className="bg-blue_gray-100 flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[35px] pb-3.5 rounded-[35px] w-[31%] md:w-full">
                  <Img
                    className="h-[159px] md:h-auto object-cover rounded-[35px] w-full"
                    src="images/img_windingroadth.png"
                    alt="windingroadth_One"
                  />
                  <div className="flex flex-col gap-8 items-start justify-start w-[90%] md:w-full">
                    <div className="md:h-[46px] h-[69px] relative w-[90%]">
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                        size="txtLusitana13"
                      >
                        Roadways • Market • Parking lot • 24-hour access
                      </Text>
                      <div className="absolute flex flex-col font-karma items-center justify-start left-[0] top-[0] w-[54%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="md:h-5 h-[37px] relative w-full">
                            <div className="absolute font-karma h-9 inset-[0] justify-center m-auto w-full">
                              <div className="bg-blue_gray-100 border border-black-900_7f border-solid h-[17px] mb-[-0.78px] rounded-[5px] w-[74%] z-[1]"></div>
                              <Text
                                className="mt-auto mx-auto text-base text-black-900"
                                size="txtKarmaRegular16"
                              >
                                Nayang Residence
                              </Text>
                            </div>
                            <Text
                              className="absolute left-[2%] text-[15px] text-black-900 top-[0]"
                              size="txtLucidaSansDemi15"
                            >
                              City Center
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[89%] md:w-full">
                            <Img
                              className="h-3 md:h-auto mt-0.5 object-cover w-3"
                              src="images/img_placeholder684809.png"
                              alt="placeholder6848_Six"
                            />
                            <Text
                              className="ml-1 text-black-900 text-lg"
                              size="txtKarmaBold18"
                            >
                              Sibada City
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[62px] relative w-full">
                      <Text
                        className="mb-[-1.12px] ml-auto mr-10 text-base text-black-900 z-[1]"
                        size="txtMavenProBold16"
                      >
                        Rp. 2.250.000/month
                      </Text>
                      <div className="bg-pink-900 flex flex-col font-lilitaone items-center justify-start mt-auto mx-auto p-[3px] rounded-[20px] w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtLilitaOne32WhiteA700"
                        >
                          BOOK NOW
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

export default ReccomendationswmenuOnePage;
