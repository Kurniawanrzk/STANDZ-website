import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const BuyerhomepagewithMenuPanelPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[38px] md:h-auto mt-[3px] object-cover w-1/5"
          src="images/img_home71686071.png"
          alt="home71686071"
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
          alt="time949631"
        />
      ),
      label: "HISTORY",
      href: "/buyerhistorywprofile",
      active: window.location.pathname === "/buyerhistorywprofile",
    },
    {
      icon: (
        <Img
          className="absolute h-[33px] left-[35%] object-cover top-[15%] w-[33px]"
          src="images/img_linkedin3800006.png"
          alt="linkedin3800006"
        />
      ),
      label: "<>JOB<br />VACANCIES</>",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mb-[17px] object-cover w-[13%]"
          src="images/img_screenshot2024.png"
          alt="screenshot2024"
        />
      ),
      label: "YOUR LAND",
      href: "/selleryourlandwithmenu",
      active: window.location.pathname === "/selleryourlandwithmenu",
    },
  ];

  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-kd items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <Sidebar11 className="!sticky !w-[264px] bg-gray-300 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[35px] top-[0]" />
          <div className="flex flex-1 flex-col font-inriasans justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[146px] w-[85%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-start p-[7px] rounded-[21px] w-[51%] md:w-full"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <div className="flex flex-row items-start justify-between ml-1.5 md:ml-[0] w-[93%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900_87 text-xl"
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
              <Img
                className="h-9 md:h-auto md:ml-[0] ml-[149px] object-cover w-[35px] sm:w-full"
                src="images/img_bell68133732.png"
                alt="bell68133732"
              />
              <Img
                className="h-[33px] md:h-auto md:ml-[0] ml-[26px] object-cover w-[34px] sm:w-full"
                src="images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <div className="flex flex-row font-mitr items-center justify-between ml-10 md:ml-[0] w-1/5 md:w-full">
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
                <Img
                  className="h-4 md:h-auto object-cover"
                  src="images/img_arrowdownsign.png"
                  alt="arrowdownsign"
                />
              </div>
            </div>
            <div className="font-mavenpro mt-[66px] overflow-x-auto w-full">
              <div className="flex flex-col items-start justify-start overflow-auto w-full">
                <Text
                  className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                  size="txtMavenProBold38"
                >
                  Categories
                </Text>
                <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-center justify-end md:ml-[0] ml-[13px] mt-[26px] w-full">
                  <div className="h-[155px] relative w-[32%] md:w-full">
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
                  <div className="bg-blue_gray-100 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[46px] rounded-[25px] w-[31%] md:w-full">
                    <div className="h-[155px] relative w-full">
                      <Img
                        className="h-[155px] m-auto object-cover rounded-[25px] w-full"
                        src="images/img_colorfulsquare.png"
                        alt="colorfulsquare_One"
                      />
                      <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[12%] w-[88%]">
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
                  <div className="bg-blue_gray-100 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[43px] rounded-[25px] w-[32%] md:w-full">
                    <div className="h-[155px] relative w-full">
                      <Img
                        className="h-[155px] m-auto object-cover rounded-[25px] w-full"
                        src="images/img_colorfulsquare.png"
                        alt="colorfulsquare_Two"
                      />
                      <Img
                        className="absolute bottom-[19%] h-[71px] object-cover right-[9%] w-[70px]"
                        src="images/img_linkedin3800006_71x70.png"
                        alt="linkedin3800006_One"
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
                <div className="flex md:flex-col flex-row font-lucidasans md:gap-5 items-center justify-end md:ml-[0] ml-[13px] mt-2.5 w-full">
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
                      <div className="md:h-[33px] h-[62px] mt-[3px] relative w-[90%]">
                        <div className="absolute bottom-[23%] flex flex-row font-karma gap-1.5 items-center justify-start left-[0] w-[41%]">
                          <Img
                            className="h-4 md:h-auto object-cover w-[13%]"
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
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-[13px] text-black-900_8c w-max"
                          size="txtLusitana13"
                        >
                          Roadways • Market • Parking lot • 24-hour access
                        </Text>
                        <Text
                          className="absolute left-[0] text-base text-black-900 top-[0]"
                          size="txtKarmaRegular16"
                        >
                          Jlaben Kronco Mall
                        </Text>
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
                  <div className="md:h-[392px] sm:h-[414px] h-[438px] md:ml-[0] ml-[51px] relative w-[23%] md:w-full">
                    <div className="absolute bg-blue_gray-100 flex flex-col gap-[5px] h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[35px] w-full">
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center mt-[195px] px-1 py-0.5 rounded-[5px] text-[15px] text-black-900 w-[95px]"
                        size="txtLucidaSansDemi15"
                      >
                        City Center
                      </Text>
                      <div className="h-[180px] relative w-full">
                        <div className="font-karma h-[35px] md:h-[7px] mb-[-14.49px] w-[46%] z-[1]">
                          <Img
                            className="absolute bottom-[0] h-4 left-[0] object-cover w-[15px]"
                            src="images/img_placeholder684809.png"
                            alt="placeholder6848_One"
                          />
                          <Text
                            className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                            size="txtKarmaRegular16"
                          >
                            Panang Square Mall
                          </Text>
                        </div>
                        <Text
                          className="mb-[undefinedpx] ml-2 mt-auto text-black-900 text-xl z-[1]"
                          size="txtMavenProBold20"
                        >
                          Rp. 5.000.000/month
                        </Text>
                        <div className="flex flex-col font-lucidasans items-center justify-start mt-auto mx-auto w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="md:ml-[0] ml-[19px] text-[17px] text-black-900"
                              size="txtLucidaSansDemi17"
                            >
                              Omuni City
                            </Text>
                            <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start mt-1 w-full">
                              <Text
                                className="text-[13px] text-black-900_8c"
                                size="txtLusitana13"
                              >
                                Roadways • Market • Parking lot • 24-hour access
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
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                      src="images/img_emptyfloorfro.png"
                      alt="emptyfloorfro"
                    />
                  </div>
                  <div className="bg-blue_gray-100 flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[42px] md:mt-0 mt-[3px] pb-[18px] rounded-[35px] w-[23%] md:w-full">
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
                  <div className="md:h-[424px] h-[439px] mb-0.5 md:ml-[0] ml-[46px] relative w-[23%] md:w-full">
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
                      <Text
                        className="ml-1 md:ml-[0] mt-9 text-black-900 text-xl"
                        size="txtMavenProBold20"
                      >
                        Rp. 2.500.000/month
                      </Text>
                      <Button
                        className="cursor-pointer font-lilitaone leading-[normal] min-w-[306px] my-[3px] md:text-3xl sm:text-[28px] text-[32px] text-center"
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
            </div>
            <div className="flex flex-row font-jua items-start justify-start md:ml-[0] ml-[324px] mt-[35px] w-[22%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-end mb-[15px] p-0.5 rounded-[10px] w-1/5">
                <Img
                  className="h-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Button
                className="border border-black-900 border-solid cursor-pointer leading-[normal] mb-[15px] min-w-[48px] ml-[23px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                color="deep_purple_400_72"
              >
                1
              </Button>
              <Button
                className="border border-black-900 border-solid cursor-pointer leading-[normal] mb-[15px] min-w-[48px] ml-2.5 rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                color="blue_gray_100"
              >
                2
              </Button>
              <Img
                className="h-14 ml-5"
                src="images/img_arrowleft_blue_gray_100.svg"
                alt="arrowleft"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerhomepagewithMenuPanelPage;
