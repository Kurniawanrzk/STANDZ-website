import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[38px] sm:h-auto md:mt-0 mt-[13px] object-cover rounded-[9px] w-[4%] md:w-full"
          src="images/img_menu18288591.png"
          alt="menu18288591"
        />
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-start md:ml-[0] ml-[54px] md:mt-0 mt-2 p-[7px] rounded-[21px] w-[37%] md:w-full"
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
          className="h-9 md:h-auto md:ml-[0] ml-[413px] md:mt-0 my-[7px] object-cover w-[35px] sm:w-full"
          src="images/img_bell68133732.png"
          alt="bell68133732"
        />
        <Img
          className="h-[33px] md:h-auto md:ml-[0] ml-[26px] md:mt-0 my-[9px] object-cover w-[34px] sm:w-full"
          src="images/img_speechbubble7647467.png"
          alt="speechbubble764"
        />
        <div className="flex flex-row items-center justify-between ml-10 md:ml-[0] w-[15%] md:w-full">
          <Img
            className="h-[51px] md:h-auto rounded-[50%] w-[52px]"
            src="images/img_redvelvetjoyespoir.png"
            alt="redvelvetjoyesp"
          />
          <Text className="text-black-900 text-xl" size="txtMitrRegular20">
            Olivia W.
          </Text>
          <Img
            className="h-4 md:h-auto object-cover"
            src="images/img_arrowdownsign.png"
            alt="arrowdownsign"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
