import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, Text } from "components";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "service/auth";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState()
  const navigate = useNavigate();
  // function to get query
  function gq(q) {
    return searchParams.get(q)
  }
  useEffect(() => {
    if(localStorage.getItem("isLoggedIn")) {
      navigate("/")
    }
    if(gq("token") && (gq("status") === "login" || gq("status") === "register" ) && gq("auth") === "google") {
        AuthService
        .getUser(gq("token")).then((res) => {
          navigate("/")
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },[])

  const login = async() => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/v1/auth/login',
      headers: { 
        Accept:"application/json"
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      localStorage.setItem("token", response.data.access_token)
      localStorage.setItem("isLoggedIn", 1)
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });

  }
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-roundedmpluscbold h-[1024px] items-end justify-end mx-auto p-[94px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_login.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-end mr-[26px] mt-[15px] w-[91%] md:w-full">
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[19px] w-[39%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[63px] justify-start w-full">
              <div className="h-[189px] md:ml-[0] ml-[45px] relative w-[84%]">
                <Img
                  className="h-[119px] mb-[-1.52px] mx-auto object-cover w-[38%] z-[1]"
                  src="images/img_standzlogo.png"
                  alt="whatsappimage"
                />
                <Text
                  className="mt-auto text-center mx-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtRoundedMplus1cBold48"
                >
                  WELCOME BACK
                </Text>
              </div>
              <div className="flex flex-col justify-start w-[438px] md:w-full">
                <div className="relative bg-blue_gray-100_b3 flex flex-row font-kokoro gap-[70px] items-end justify-start mr-[11px] p-[7px] rounded-[15px] w-[98%] md:w-full">
                  <a href="http://127.0.0.1:8000/auth/google/" className="absolute w-full h-full"></a>
                  <Img
                    className="h-[46px] md:h-auto ml-2.5 object-cover w-[45px]"
                    src="images/img_googlelogopngimages.png"
                    alt="googlelogopngim"
                  />
                  <Text
                    className="mb-2  text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtKokoroRegular24"
                  >
                    Log in with Google
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-end md:ml-[0] ml-[29px] mt-10 w-[91%] md:w-full">
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
                  name="groupSeventyFour"
                  onChange={(val) => setEmail(val)}
                  placeholder="Your Email"
                  className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="ml-1.5 md:ml-[0] mt-[33px] w-[99%]"
                  shape="round"
                  color="lime_600_30"
                  size="md"
                ></Input>
                <Input
                  name="groupSeventyThree"
                  onChange={(val) => setPassword(val)}
                  placeholder="Your Password"
                  className="font-jockeyone leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_61 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="ml-1.5 md:ml-[0] mt-[7px] w-[99%]"
                  shape="round"
                  color="lime_600_30"
                  size="sm"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[9px] mt-[7px] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  Forgot password?
                </Text>
                <Button
                  onClick={login}
                  className="cursor-pointer font-bold font-inter leading-[normal] min-w-[432px] sm:min-w-full mr-1.5 mt-[17px] rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="blue_gray_900"
                  size="md"
                >
                  Log in
                </Button>
                <div className="flex flex-row font-inter gap-2 items-center justify-start md:ml-[0] ml-[9px] mt-3 w-[78%] md:w-full">
                  <Text
                    className="text-black-900_bf text-xl"
                    size="txtInterRegular20"
                  >
                    Don’t have an account yet?
                  </Text>
                  <Text
                    className="text-black-900 text-xl underline"
                    size="txtInterRegular20Black900"
                  >
                    Sign Up
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lime-600_28 flex flex-col items-center justify-end pt-1 px-1 w-[54%] md:w-full">
            <div className="h-[561px] md:h-[814px] sm:h-[874px] mt-64 relative rounded-[10px] w-[97%] sm:w-full">
              <div className="absolute md:h-[558px] h-[560px] sm:h-[618px] inset-[0] justify-center m-auto w-[560px] sm:w-full">
                <div className="absolute md:h-[558px] h-[560px] inset-[0] justify-center m-auto w-[560px] sm:w-full">
                  <div className="absolute flex flex-col sm:h-auto h-full inset-[0] items-center justify-center m-auto w-[560px]">
                    <div className="flex flex-col gap-[59px] h-[560px] sm:h-auto items-center justify-start w-[560px] sm:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[500px] items-start justify-start p-[154px] md:px-10 sm:px-5 w-[99%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group75.svg')",
                        }}
                      >
                        <Img
                          className="h-[81px] mb-[98px] mt-[11px]"
                          src="images/img_thumbsup_gray_700.svg"
                          alt="thumbsup"
                        />
                      </div>
                      <Img
                        className="h-px"
                        src="images/img_floor.svg"
                        alt="freepikfloorinj"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[369px] right-[32%]"
                    src="images/img_freepikcharacterinject2.svg"
                    alt="freepikcharacte"
                  />
                </div>
                <div className="absolute bottom-[33%] md:h-[171px] h-[173px] right-[16%] w-[17%]">
                  <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-[93%]">
                    <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute md:h-[171px] h-[173px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col gap-[19px] h-max inset-[0] justify-center m-auto w-full">
                              <div className="md:h-3 h-[13px] md:ml-[0] ml-[9px] relative w-1/5">
                                <Img
                                  className="h-3 m-auto"
                                  src="images/img_thumbsup_gray_300_01.svg"
                                  alt="thumbsup_One"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[3px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group80.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-1 w-1"
                                    src="images/img_vector_red_400.svg"
                                    alt="vector"
                                  />
                                </div>
                              </div>
                              <div className="h-[140px] relative w-full">
                                <div className="h-[140px] m-auto w-full">
                                  <div className="h-[140px] m-auto w-full">
                                    <div className="h-[140px] m-auto w-full">
                                      <div className="h-[140px] m-auto w-full">
                                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                          <div className="flex flex-row items-center justify-between w-full">
                                            <div className="bg-red-400_01 h-[140px] w-[10%]"></div>
                                            <div className="bg-red-400_01 h-[140px] w-[10%]"></div>
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat h-6 md:h-[3px] left-[6%] p-1 top-[7%] w-1/4"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group77.svg')",
                                          }}
                                        >
                                          <div className="absolute h-[3px] inset-y-[0] left-[27%] my-auto w-[3px]">
                                            <Img
                                              className="absolute bottom-[0] h-[3px] left-[0] w-0.5"
                                              src="images/img_vector_blue_gray_900_01.svg"
                                              alt="vector_Three"
                                            />
                                            <Img
                                              className="absolute h-[3px] right-[0] top-[0] w-0.5"
                                              src="images/img_vector_blue_gray_900_01_3x2.svg"
                                              alt="vector_Four"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-[3px] left-[17%] top-[29%]"
                                            src="images/img_vector_blue_gray_900_01_3x8.svg"
                                            alt="vector_Five"
                                          />
                                          <Img
                                            className="absolute bottom-[29%] h-[3px] left-[17%]"
                                            src="images/img_vector_blue_gray_900_01_3x8.svg"
                                            alt="vector_Six"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-row gap-[5px] items-start justify-start left-[8%] top-[6%] w-[53%]">
                                        <div className="flex flex-col items-end justify-start w-[42%]">
                                          <div className="bg-blue_gray-900_01 h-px w-full"></div>
                                          <Line className="bg-black-900 h-6 w-[5px]" />
                                        </div>
                                        <div
                                          className="bg-cover bg-no-repeat h-6 md:h-[3px] p-1 relative w-[48%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group78.svg')",
                                          }}
                                        >
                                          <div className="absolute h-[3px] inset-y-[0] left-[27%] my-auto w-[3px]">
                                            <Img
                                              className="absolute bottom-[0] h-[3px] left-[0] w-0.5"
                                              src="images/img_vector_blue_gray_900_01.svg"
                                              alt="vector_Nine"
                                            />
                                            <Img
                                              className="absolute h-[3px] right-[0] top-[0] w-0.5"
                                              src="images/img_vector_blue_gray_900_01_3x2.svg"
                                              alt="vector_Ten"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-[3px] left-[17%] top-[29%]"
                                            src="images/img_vector_blue_gray_900_01_3x8.svg"
                                            alt="vector_Eleven"
                                          />
                                          <Img
                                            className="absolute bottom-[29%] h-[3px] left-[17%]"
                                            src="images/img_vector_blue_gray_900_01_3x8.svg"
                                            alt="vector_Twelve"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-row gap-1.5 items-start justify-center right-[7%] top-[6%] w-[54%]">
                                      <div className="flex flex-col items-end justify-start w-[41%]">
                                        <div className="bg-blue_gray-900_01 h-px w-full"></div>
                                        <Line className="bg-black-900 h-6 w-[5px]" />
                                      </div>
                                      <div
                                        className="bg-cover bg-no-repeat h-6 md:h-[3px] p-1 relative w-[47%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group79.svg')",
                                        }}
                                      >
                                        <div className="absolute h-[3px] inset-y-[0] left-[27%] my-auto w-[3px]">
                                          <Img
                                            className="absolute bottom-[0] h-[3px] left-[0] w-0.5"
                                            src="images/img_vector_blue_gray_900_01.svg"
                                            alt="vector_Fifteen"
                                          />
                                          <Img
                                            className="absolute h-[3px] right-[0] top-[0] w-0.5"
                                            src="images/img_vector_blue_gray_900_01_3x2.svg"
                                            alt="vector_Sixteen"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[3px] left-[17%] top-[29%]"
                                          src="images/img_vector_blue_gray_900_01_3x8.svg"
                                          alt="vector_Seventeen"
                                        />
                                        <Img
                                          className="absolute bottom-[29%] h-[3px] left-[17%]"
                                          src="images/img_vector_blue_gray_900_01_3x8.svg"
                                          alt="vector_Eighteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Line className="absolute bg-black-900 h-6 right-[7%] top-[7%] w-[5px]" />
                                </div>
                                <div className="absolute bg-blue_gray-900_01 h-px right-[8%] top-[6%] w-[21%]"></div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-px left-[8%] top-[0]"
                              src="images/img_vector_red_400_1x22.svg"
                              alt="vector_TwentyOne"
                            />
                            <Img
                              className="absolute h-3 inset-x-[0] mx-auto top-[0]"
                              src="images/img_thumbsup_gray_300_01.svg"
                              alt="thumbsup_Two"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] inset-x-[0] items-end justify-start mx-auto p-[3px] top-[0] w-1/5"
                              style={{
                                backgroundImage:
                                  "url('images/img_group80.svg')",
                              }}
                            >
                              <Img
                                className="h-1 mr-0.5 w-1"
                                src="images/img_vector_red_400.svg"
                                alt="vector_TwentyTwo"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-px inset-x-[0] mx-auto top-[0]"
                            src="images/img_vector_1x22.svg"
                            alt="vector_TwentyThree"
                          />
                          <Img
                            className="absolute h-3 right-[13%] top-[0]"
                            src="images/img_thumbsup_gray_300_01.svg"
                            alt="thumbsup_Three"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start p-[3px] right-[11%] top-[0] w-1/5"
                            style={{
                              backgroundImage: "url('images/img_group80.svg')",
                            }}
                          >
                            <Img
                              className="h-1 w-1"
                              src="images/img_vector_red_400.svg"
                              alt="vector_TwentyFour"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-px right-[9%] top-[0]"
                          src="images/img_vector_red_400_1x22.svg"
                          alt="vector_TwentyFive"
                        />
                        <Img
                          className="absolute h-3 left-[10%] top-[8%]"
                          src="images/img_thumbsup_gray_300_01.svg"
                          alt="thumbsup_Four"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] items-end justify-start left-[10%] p-[3px] top-[8%] w-1/5"
                          style={{
                            backgroundImage: "url('images/img_group80.svg')",
                          }}
                        >
                          <Img
                            className="h-1 mr-0.5 w-1"
                            src="images/img_vector_red_400_4x4.svg"
                            alt="vector_TwentySix"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-px left-[8%] top-[8%]"
                        src="images/img_vector_red_400_1x22.svg"
                        alt="vector_TwentySeven"
                      />
                      <Img
                        className="absolute h-3 inset-x-[0] mx-auto top-[8%]"
                        src="images/img_thumbsup_gray_300_01.svg"
                        alt="thumbsup_Five"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] inset-x-[0] items-end justify-start mx-auto p-[3px] top-[8%] w-1/5"
                        style={{
                          backgroundImage: "url('images/img_group84.svg')",
                        }}
                      >
                        <Img
                          className="h-1 mr-0.5 w-1"
                          src="images/img_vector_red_400_4x4.svg"
                          alt="vector_TwentyEight"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[8%]"
                      src="images/img_vector_red_400_1x22.svg"
                      alt="vector_TwentyNine"
                    />
                    <Img
                      className="absolute h-3 right-[13%] top-[8%]"
                      src="images/img_thumbsup_gray_300_01.svg"
                      alt="thumbsup_Six"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] items-end justify-start p-[3px] right-[11%] top-[8%] w-1/5"
                      style={{
                        backgroundImage: "url('images/img_group84.svg')",
                      }}
                    >
                      <Img
                        className="h-1 mr-0.5 w-1"
                        src="images/img_vector_red_400_4x4.svg"
                        alt="vector_Thirty"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-px right-[12%] top-[8%]"
                    src="images/img_vector_red_400_1x22.svg"
                    alt="vector_ThirtyOne"
                  />
                  <div className="absolute bg-red-400_01 h-[7px] inset-x-[0] mx-auto top-[14%] w-full"></div>
                  <Img
                    className="absolute h-[7px] inset-x-[0] mx-auto top-[14%]"
                    src="images/img_vector.svg"
                    alt="vector_ThirtyThree"
                  />
                  <div className="absolute bg-red-400_01 h-[7px] inset-x-[0] mx-auto top-[39%] w-full"></div>
                  <Img
                    className="absolute h-[7px] inset-x-[0] mx-auto top-[39%]"
                    src="images/img_vector.svg"
                    alt="vector_ThirtyFive"
                  />
                  <div className="absolute bg-red-400_01 bottom-[28%] h-[7px] inset-x-[0] mx-auto w-full"></div>
                  <Img
                    className="absolute bottom-[28%] h-[7px] inset-x-[0] mx-auto"
                    src="images/img_vector.svg"
                    alt="vector_ThirtySeven"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[466px] items-start justify-end left-[4%] p-[9px] w-[88%]"
                  style={{ backgroundImage: "url('images/img_group76.svg')" }}
                >
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-[135px] mt-[174px] w-[94%] md:w-full">
                    <Img
                      className="h-[57px] sm:mt-0 mt-20"
                      src="images/img_thumbsup_blue_gray_700.svg"
                      alt="thumbsup_Seven"
                    />
                    <Img
                      className="h-[57px] sm:ml-[0] ml-[21px] sm:mt-0 mt-[26px]"
                      src="images/img_freepikbreadinject2.svg"
                      alt="freepikbreadinj"
                    />
                    <Img
                      className="h-[84px] mb-[53px] sm:ml-[0] ml-[159px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[70px] right-[28%] top-[10%]"
                src="images/img_freepiksigninject2.svg"
                alt="freepiksigninje"
              />
              <Img
                className="absolute bottom-[0] h-[118px] inset-x-[0] mx-auto"
                src="images/img_freepikvegetablesinject2.svg"
                alt="freepikvegetabl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
