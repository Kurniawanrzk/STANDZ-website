import React from "react";

import { Button, Img, List, Text } from "components";

const SellerHomepagePanelPage = () => {
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-mavenpro items-start justify-end mx-auto py-[18px] w-full">
        <div className="flex flex-col justify-start mt-[30px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[1439px] w-[48%] md:w-full">
            <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start w-full">
              <Img
                className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-0.5 object-cover rounded-[9px] w-[4%] md:w-full"
                src="images/img_menu18288591.png"
                alt="menu18288592"
              />
              <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-start justify-between mb-[13px] md:ml-[0] ml-[62px] p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[37%] md:w-full">
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
              <div className="flex md:flex-1 flex-row font-mitr items-center justify-start md:ml-[0] ml-[425px] md:mt-0 mt-[5px] w-[23%] md:w-full">
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
              className="mt-[57px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
              size="txtMavenProBold38"
            >
              Categories
            </Text>
            <div className="flex md:flex-col flex-row font-inriasans md:gap-[41px] items-center justify-between md:ml-[0] ml-[13px] mt-[26px] w-[97%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-[46px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[155px] sm:ml-[0] relative w-full">
                  <div className="bg-blue_gray-100 border border-black-900 border-solid h-[155px] m-auto rounded-[25px] w-full"></div>
                  <div className="absolute h-[155px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[155px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_colorfulsquare.png"
                      alt="colorfulsquare"
                    />
                    <Text
                      className="absolute left-[5%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[10%]"
                      size="txtInriaSansRegular25"
                    >
                      Recommendations
                    </Text>
                    <Img
                      className="absolute bottom-[16%] h-[75px] object-cover right-[8%] rounded-[25px] w-[21%]"
                      src="images/img_locationonamap75831.png"
                      alt="locationonamapSeven"
                    />
                  </div>
                </div>
                <div className="h-[155px] sm:ml-[0] relative w-full">
                  <div className="bg-blue_gray-100 border border-black-900 border-solid h-[155px] m-auto rounded-[25px] w-full"></div>
                  <div className="absolute h-[155px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[155px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_colorfulsquare.png"
                      alt="colorfulsquare"
                    />
                    <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[12%] w-[87%]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInriaSansRegular25"
                      >
                        Daily Attendance
                      </Text>
                      <Img
                        className="h-[78px] md:h-auto mt-[29px] object-cover"
                        src="images/img_calendar661512.png"
                        alt="calendar661512"
                      />
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-blue_gray-100 border border-black-900 border-solid h-[155px] relative rounded-[25px] w-[32%] md:w-full">
                <Text
                  className="ml-[21px] mt-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInriaSansRegular25"
                >
                  Job Vacancies
                </Text>
                <div className="absolute h-[155px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[155px] m-auto object-cover rounded-[25px] w-full"
                    src="images/img_colorfulsquare.png"
                    alt="colorfulsquare"
                  />
                  <Img
                    className="absolute bottom-[19%] h-[71px] object-cover right-[9%] w-[70px]"
                    src="images/img_linkedin3800006_71x70.png"
                    alt="linkedin3800006"
                  />
                </div>
              </div>
            </div>
            <Text
              className="ml-0.5 md:ml-[0] mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
              size="txtMavenProBold38"
            >
              All Lands
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start mr-[97px] mt-3.5 w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[56%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start md:mt-0 mt-0.5 pb-[18px] rounded-[35px] w-[23%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-[202px] md:h-auto object-cover rounded-bl-[35px] rounded-br-[35px] w-full"
                    src="images/img_walkwaygarden.png"
                    alt="walkwaygarden"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                    <Text
                      className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                      size="txtLucidaSansDemi15"
                    >
                      City Center
                    </Text>
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtKarmaRegular16"
                    >
                      Jlaben Kronco Mall
                    </Text>
                    <div className="flex flex-row font-karma gap-1.5 items-start justify-start w-[38%] md:w-full">
                      <Img
                        className="h-4 md:h-auto object-cover w-[12%]"
                        src="images/img_placeholder684809.png"
                        alt="placeholder6848"
                      />
                      <Text
                        className="text-black-900 text-lg"
                        size="txtKarmaBold18"
                      >
                        Klojen City
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-1.5 text-[13px] text-black-900_8c"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <Button
                      className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] md:ml-[0] ml-[5px] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="round"
                      size="sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:ml-[0] ml-[51px] overflow-x-auto w-[24%]">
                <div className="md:h-[421px] h-[438px] relative w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[35px] w-full">
                    <Text
                      className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center mt-[195px] px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                      size="txtLucidaSansDemi15"
                    >
                      City Center
                    </Text>
                    <div className="h-9 md:h-[26px] mt-1.5 relative w-[46%]">
                      <Img
                        className="absolute bottom-[0] h-4 left-[0] object-cover w-[15px]"
                        src="images/img_placeholder684809.png"
                        alt="placeholder6848_One"
                      />
                      <Text
                        className="absolute bottom-[0] right-[9%] text-[17px] text-black-900"
                        size="txtLucidaSansDemi17"
                      >
                        Omuni City
                      </Text>
                      <Text
                        className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                        size="txtKarmaRegular16"
                      >
                        Panang Square Mall
                      </Text>
                    </div>
                    <Text
                      className="mt-[7px] text-[13px] text-black-900_8c"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <Button
                      className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="round"
                      size="sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                  <Img
                    className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src="images/img_emptyfloorfro.png"
                    alt="emptyfloorfro"
                  />
                </div>
              </div>
              <div className="md:ml-[0] ml-[42px] overflow-x-auto w-[23%]">
                <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start pb-[18px] rounded-[35px] w-full">
                  <Img
                    className="h-[202px] md:h-auto object-cover rounded-[35px] w-full"
                    src="images/img_windingroadth.png"
                    alt="windingroadth"
                  />
                  <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                    <div className="flex flex-col font-lucidasans gap-1.5 items-start justify-start w-[41%] md:w-full">
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                        size="txtLucidaSansDemi15"
                      >
                        City Center
                      </Text>
                      <div className="flex flex-col font-karma relative w-full">
                        <Text
                          className="mx-auto text-base text-black-900"
                          size="txtKarmaRegular16"
                        >
                          Nayang Residence
                        </Text>
                        <Img
                          className="h-4 mt-[-0.5px] object-cover w-[15px] z-[1]"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848_Two"
                        />
                        <Text
                          className="ml-auto mr-[7px] mt-[-NaNpx] text-black-900 text-lg z-[1]"
                          size="txtKarmaBold18"
                        >
                          Sibada City
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-2 text-[13px] text-black-900_8c"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <Button
                      className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="round"
                      size="sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:ml-[0] ml-[46px] overflow-x-auto w-[23%]">
                <div className="md:h-[421px] h-[439px] relative w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[13px] rounded-[35px] w-full">
                    <div className="flex flex-col font-lucidasans gap-1.5 items-start justify-start mt-[201px] w-[38%] md:w-full">
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                        size="txtLucidaSansDemi15"
                      >
                        City Center
                      </Text>
                      <div className="flex flex-col font-karma relative w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtKarmaRegular16"
                        >
                          Danjing Park
                        </Text>
                        <Img
                          className="h-4 mt-[-0.5px] object-cover w-[15px] z-[1]"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848_Three"
                        />
                        <Text
                          className="ml-auto mt-[-NaNpx] text-black-900 text-lg z-[1]"
                          size="txtKarmaBold18"
                        >
                          Sibada City
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-2 text-[13px] text-black-900_8c"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <Button
                      className="cursor-pointer font-lilitaone leading-[normal] mb-[3px] min-w-[306px] mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      shape="round"
                      size="sm"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                  <Img
                    className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src="images/img_emptyparkingwithtrees.png"
                    alt="emptyparkingwit"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[54px] pb-[18px] rounded-[35px] w-[23%] md:w-full">
                <Img
                  className="h-[202px] md:h-auto object-cover rounded-[35px] w-full"
                  src="images/img_walkwaygarden.png"
                  alt="walkwaygarden_One"
                />
                <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                  <Text
                    className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                    size="txtLucidaSansDemi15"
                  >
                    City Center
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-black-900"
                    size="txtKarmaRegular16"
                  >
                    Jlaben Kronco Mall
                  </Text>
                  <div className="md:h-[26px] h-[41px] relative w-[90%]">
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
                      className="absolute h-4 left-[0] object-cover top-[5%] w-[6%]"
                      src="images/img_placeholder684809.png"
                      alt="placeholder6848_Four"
                    />
                  </div>
                  <div className="h-[79px] md:h-[94px] mt-[39px] relative w-full">
                    <div className="absolute bg-pink-900 bottom-[0] flex flex-col font-lilitaone inset-x-[0] items-center justify-end mx-auto p-[9px] rounded-[20px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtLilitaOne32WhiteA700"
                      >
                        BOOK NOW
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[0] text-black-900 text-xl top-[0]"
                      size="txtMavenProBold20"
                    >
                      Rp. 3.500.000/month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[437px] h-[438px] md:ml-[0] ml-[51px] relative w-[24%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[17px] py-[17px] rounded-[35px] w-full">
                  <div className="mt-[195px] overflow-x-auto w-full">
                    <div className="flex flex-col gap-10 justify-start w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[774px] w-[26%] md:w-full">
                        <Text
                          className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                          size="txtLucidaSansDemi15"
                        >
                          City Center
                        </Text>
                        <div className="md:h-[21px] h-[39px] relative w-[51%]">
                          <Img
                            className="absolute bottom-[8%] h-4 left-[0] object-cover w-[15px]"
                            src="images/img_placeholder684809.png"
                            alt="placeholder6848_Five"
                          />
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-[17px] text-black-900 w-max"
                            size="txtLucidaSansDemi17"
                          >
                            Omuni City
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                            size="txtKarmaRegular16"
                          >
                            Panang Square Mall
                          </Text>
                        </div>
                        <Text
                          className="text-[13px] text-black-900_8c"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtMavenProBold20"
                        >
                          Rp. 2.500.000/month
                        </Text>
                        <div className="h-[79px] relative w-[29%] sm:w-full">
                          <Text
                            className="mb-[-1.25px] ml-1 text-black-900 text-xl z-[1]"
                            size="txtMavenProBold20"
                          >
                            Rp. 4.250.000/month
                          </Text>
                          <div className="bg-pink-900 flex flex-col font-lilitaone items-center justify-end mt-auto mx-auto p-[9px] rounded-[20px] w-full">
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
                <Img
                  className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                  src="images/img_emptyfloorfro.png"
                  alt="emptyfloorfro_One"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[42px] pb-[18px] rounded-[35px] w-[23%] md:w-full">
                <Img
                  className="h-[202px] md:h-auto object-cover rounded-[35px] w-full"
                  src="images/img_windingroadth.png"
                  alt="windingroadth_One"
                />
                <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                        size="txtLucidaSansDemi15"
                      >
                        City Center
                      </Text>
                      <Text
                        className="mt-[5px] text-base text-black-900"
                        size="txtKarmaRegular16"
                      >
                        Nayang Residence
                      </Text>
                      <div className="flex flex-row font-karma items-start justify-start w-[92%] md:w-full">
                        <Img
                          className="h-4 md:h-auto object-cover w-[15px]"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848_Six"
                        />
                        <Text
                          className="ml-[5px] text-black-900 text-lg"
                          size="txtKarmaBold18"
                        >
                          Sibada City
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-[13px] text-black-900_8c"
                    size="txtLusitana13"
                  >
                    Roadways • Market • Parking lot • 24-hour access
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[39px] text-black-900 text-xl"
                    size="txtMavenProBold20"
                  >
                    Rp. 2.250.000/month
                  </Text>
                  <div className="bg-pink-900 flex flex-col font-lilitaone items-center justify-end p-[9px] rounded-[20px] w-full">
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
          <div className="flex flex-row font-jua items-center justify-end md:ml-[0] ml-[2001px] mt-[31px] w-[9%] md:w-full">
            <div className="bg-blue_gray-100 flex flex-col items-center justify-end p-0.5 rounded-[10px] w-1/5">
              <Img
                className="h-[34px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <Button
              className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-[23px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
              color="blue_gray_100"
            >
              1
            </Button>
            <Button
              className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-2.5 rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
              color="deep_purple_400_01"
            >
              2
            </Button>
            <div className="bg-blue_gray-100 flex flex-col items-center justify-end ml-5 p-0.5 rounded-[10px] w-1/5">
              <Img
                className="h-[34px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerHomepagePanelPage;
