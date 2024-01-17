import React from "react";

import { Img, Text } from "components";

const BuyerhistorywprofilePage = () => {
  return (
    <>
      <div className="bg-deep_orange-A100 flex flex-col font-mada items-center justify-start mx-auto p-[17px] w-full">
        <div className="flex flex-col gap-3 items-center justify-start max-w-[1356px] mb-[652px] mt-[27px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col md:gap-10 gap-[85px] justify-start">
              <div className="flex md:flex-col flex-row font-inriasans md:gap-5 items-start justify-start w-full">
                <Img
                  className="md:flex-1 h-[38px] sm:h-auto md:mt-0 mt-[5px] object-cover rounded-[9px] w-[5%] md:w-full"
                  src="images/img_menu18288591.png"
                  alt="menu18288591"
                />
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[43px] items-start justify-start md:ml-[0] ml-[42px] p-[7px] rounded-[21px] w-[47%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="flex flex-row items-start justify-between ml-1.5 md:ml-[0] w-[93%] md:w-full">
                    <Text
                      className="mt-[3px] text-black-900_87 text-xl"
                      size="txtInriaSansRegular20"
                    >
                      Search...
                    </Text>
                    <Img
                      className="h-[29px] md:h-auto object-cover w-7"
                      src="images/img_search1498521_29x28.png"
                      alt="search1498521"
                    />
                  </div>
                </div>
                <Img
                  className="sm:flex-1 h-9 md:h-auto md:ml-[0] ml-[442px] md:mt-0 mt-1.5 object-cover w-[35px] sm:w-full"
                  src="images/img_bell68133732.png"
                  alt="bell68133732"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[60px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                size="txtMavenProBold38"
              >
                TODAY
              </Text>
            </div>
            <Img
              className="sm:flex-1 h-[33px] md:h-auto md:mt-0 mt-[9px] object-cover w-[34px] sm:w-full"
              src="images/img_speechbubble7647467.png"
              alt="speechbubble764"
            />
            <div className="md:h-[136px] h-[179px] relative w-[15%] md:w-full">
              <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col items-start justify-start p-[7px] right-[0] rounded-[15px] w-3/4">
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
              <div className="absolute flex flex-row font-mitr gap-[11px] items-center justify-start left-[0] top-[0] w-[73%]">
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
                className="absolute h-[41px] object-cover right-[0] top-[2%] w-[26%]"
                src="images/img_chevronup.png"
                alt="chevronup"
              />
            </div>
          </div>
          <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col font-lusitana items-center justify-start rounded-[35px] w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
              <Img
                className="h-[120px] sm:h-auto object-cover rounded-[35px] w-1/4 md:w-full"
                src="images/img_walkwaygarden.png"
                alt="walkwaygarden"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[76px] w-[23%] md:w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtKarmaRegular20"
                >
                  Jlaben Kronco Mall
                </Text>
                <div className="flex flex-row font-karma gap-1.5 items-center justify-start w-2/5 md:w-full">
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
                  className="ml-2 md:ml-[0] text-[13px] text-black-900_8c"
                  size="txtLusitana13"
                >
                  Roadways • Market • Parking lot • 24-hour access
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] justify-start md:ml-[0] ml-[362px] w-[19%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px]">
                  <Text className="text-black-900 text-lg" size="txtLusitana18">
                    Purchase date : 29-11-2023
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900 text-lg"
                    size="txtLusitana18"
                  >
                    Valid until : 28-11-2024
                  </Text>
                </div>
                <Text
                  className="text-black-900 text-xl"
                  size="txtLusitanaBold20"
                >
                  TOTAL : Rp. 42.000.000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerhistorywprofilePage;
