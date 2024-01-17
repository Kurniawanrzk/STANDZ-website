import React from "react";

import { Img, Text } from "components";

const SignOutPage = () => {
  return (
    <>
      <div
        className="bg-black-900 bg-cover bg-no-repeat flex flex-col font-mitr h-[1024px] items-start justify-start mx-auto p-[39px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_signout.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[164px] justify-start mb-[241px] ml-2.5 md:ml-[0] md:px-5 w-[81%] md:w-full">
          <div className="flex flex-row gap-[38px] items-start justify-start w-[29%] md:w-full">
            <Img
              className="h-[55px] mt-[3px]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown"
            />
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtMitrRegular48"
            >
              Sign Out
            </Text>
          </div>
          <div className="bg-blue_gray-100_7f flex flex-col items-center justify-end md:ml-[0] ml-[246px] p-[37px] sm:px-5 w-[78%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[73px] items-center justify-start mb-3 mt-9 w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtMitrRegular48"
              >
                Are you sure you want to sign out?
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[86%] md:w-full">
                <Text></Text>
                <Text></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOutPage;
