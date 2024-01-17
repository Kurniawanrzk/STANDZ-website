import React from "react";

import { Button, Img, List, Text } from "components";

const BuyerhomepagewithprofilePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col items-end justify-end mx-auto sm:pl-5 pl-9 py-9 w-full">
        <div className="flex flex-col justify-start mt-2 md:px-5 w-[98%] md:w-full">
          <div className="flex md:flex-col flex-row font-mitr md:gap-5 items-start justify-start w-[99%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start md:mt-0 mt-1 w-[44%] md:w-full">
              <div className="flex sm:flex-col flex-row font-inriasans sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[38px] md:h-auto object-cover rounded-[9px]"
                  src="images/img_menu18288591.png"
                  alt="menu18288591"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-start p-[5px] rounded-[21px]"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="flex flex-row items-end justify-between mb-[3px] ml-2 md:ml-[0] w-[93%] md:w-full">
                    <Text
                      className="mt-[5px] text-black-900_87 text-xl"
                      size="txtInriaSansRegular20"
                    >
                      Search..
                    </Text>
                    <Img
                      className="h-[29px] md:h-auto object-cover w-7"
                      src="images/img_search1498521_29x28.png"
                      alt="search1498521"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                size="txtMavenProBold38"
              >
                Categories
              </Text>
            </div>
            <Img
              className="h-9 md:h-auto md:ml-[0] ml-[422px] md:mt-0 mt-[7px] object-cover w-[35px] sm:w-full"
              src="images/img_bell68133732.png"
              alt="bell68133732"
            />
            <Img
              className="h-[33px] md:h-auto md:ml-[0] ml-[26px] md:mt-0 mt-[9px] object-cover w-[34px] sm:w-full"
              src="images/img_speechbubble7647467.png"
              alt="speechbubble764"
            />
            <div className="flex flex-col ml-10 md:ml-[0] relative w-[15%] md:w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-full">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[73%]">
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
                  <Img
                    className="h-[41px] md:h-auto object-cover w-[26%]"
                    src="images/img_chevronup.png"
                    alt="chevronup"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-col font-mada items-start justify-start ml-auto mt-[-9px] p-[7px] rounded-[15px] w-3/4 z-[1]">
                <div className="flex flex-row gap-[9px] items-center justify-start mt-[5px] w-[77%] md:w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-[25px]"
                    src="images/img_user_24x25.png"
                    alt="user"
                  />
                  <Text
                    className="text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    User Profile
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start mt-[7px] w-[54%] md:w-full">
                  <Img
                    className="h-[23px] md:h-auto object-cover w-[37%]"
                    src="images/img_wallet.png"
                    alt="wallet"
                  />
                  <Text
                    className="text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-row gap-[11px] items-start justify-start mt-4 w-[57%] md:w-full">
                  <Img
                    className="h-[22px] md:h-auto object-cover w-[23px]"
                    src="images/img_settings_22x23.png"
                    alt="settings"
                  />
                  <Text
                    className="mt-0.5 text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Setting
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] my-0.5 w-[61%] md:w-full">
                  <Img
                    className="h-[21px] md:h-auto object-cover w-[28%]"
                    src="images/img_logout.png"
                    alt="logout"
                  />
                  <Text
                    className="mt-0.5 text-black-900 text-sm"
                    size="txtMadaSemiBold14"
                  >
                    Sign Out
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inriasans gap-[42px] items-center justify-start md:ml-[0] ml-[13px] mt-2.5 w-[94%] md:w-full">
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
            <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col items-center justify-start rounded-[25px] w-[32%] md:w-full">
              <div className="h-[155px] relative w-full">
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
                <Text
                  className="absolute left-[5%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[10%]"
                  size="txtInriaSansRegular25"
                >
                  Job Vacancies
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
          >
            All Lands
          </Text>
          <div className="md:ml-[0] ml-[13px] mt-2.5 overflow-auto overflow-x-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col gap-2.5 items-center justify-start md:mt-0 mt-[3px] pb-[18px] rounded-[35px] w-[23%] md:w-full">
                <Img
                  className="h-[202px] md:h-auto object-cover rounded-[35px] w-full"
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
                      alt="placeholder6848"
                    />
                  </div>
                  <Text
                    className="ml-3.5 md:ml-[0] mt-[37px] text-black-900 text-xl"
                    size="txtMavenProBold20"
                  >
                    Rp. 3.500.000/month
                  </Text>
                  <Button
                    className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] md:ml-[0] ml-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                    shape="round"
                    size="sm"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              <div className="md:h-[416px] h-[438px] relative w-[23%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[35px] w-full">
                  <Text
                    className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center mt-[195px] px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                    size="txtLucidaSansDemi15"
                  >
                    City Center
                  </Text>
                  <div className="md:h-[26px] h-[39px] mt-[5px] relative w-[46%]">
                    <Img
                      className="absolute bottom-[8%] h-4 left-[0] object-cover w-[15px]"
                      src="images/img_placeholder684809.png"
                      alt="placeholder6848_One"
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
                    className="mt-1 text-[13px] text-black-900_8c"
                    size="txtLusitana13"
                  >
                    Roadways • Market • Parking lot • 24-hour access
                  </Text>
                  <Text
                    className="ml-2 md:ml-[0] mt-[37px] text-black-900 text-xl"
                    size="txtMavenProBold20"
                  >
                    Rp. 5.000.000/month
                  </Text>
                  <Button
                    className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] md:text-3xl sm:text-[28px] text-[32px] text-center"
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
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col gap-2.5 items-center justify-start md:mt-0 mt-[3px] pb-[18px] rounded-[35px] w-[23%] md:w-full">
                <Img
                  className="h-[202px] md:h-auto object-cover rounded-[35px] w-full"
                  src="images/img_windingroadth.png"
                  alt="windingroadth"
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
                          alt="placeholder6848_Two"
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
                    className="ml-1 md:ml-[0] mt-[37px] text-black-900 text-xl"
                    size="txtMavenProBold20"
                  >
                    Rp. 4.750.000/month
                  </Text>
                  <Button
                    className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                    shape="round"
                    size="sm"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              <div className="md:h-[421px] h-[439px] mb-0.5 relative w-[23%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[13px] rounded-[35px] w-full">
                  <div className="font-lusitana md:h-[272px] h-[88px] mt-[201px] relative w-[89%]">
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[42%]">
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
                          Danjing Park
                        </Text>
                        <div className="flex flex-row font-karma items-start justify-evenly w-full">
                          <Img
                            className="h-4 md:h-auto object-cover w-[15px]"
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
                  <Text
                    className="ml-1 md:ml-[0] mt-[37px] text-black-900 text-xl"
                    size="txtMavenProBold20"
                  >
                    Rp. 2.500.000/month
                  </Text>
                  <Button
                    className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] my-0.5 md:text-3xl sm:text-[28px] text-[32px] text-center"
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
          </div>
          <div className="flex flex-row font-jua items-center justify-center md:ml-[0] ml-[562px] mt-[35px] w-[18%] md:w-full">
            <div className="bg-blue_gray-100 flex flex-col items-center justify-end p-0.5 rounded-[10px] w-1/5">
              <Img
                className="h-[35px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <Button
              className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-[23px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
              color="deep_purple_400_72"
            >
              1
            </Button>
            <Button
              className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-2.5 rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
              color="blue_gray_100"
            >
              2
            </Button>
            <div className="bg-blue_gray-100 flex flex-col items-center justify-end ml-5 p-0.5 rounded-[10px] w-1/5">
              <Img
                className="h-[35px]"
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

export default BuyerhomepagewithprofilePage;
