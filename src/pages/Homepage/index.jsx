import React, { useEffect, useState } from "react";
import { Button, Img, List, Text, Input } from "components";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Header from "components/Header";
const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

const SellerHomepagePage = () => {
  const [allLandData, setAllLandData] = useState({ data: [], loading: true });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const navigate = useNavigate()
  const getAllLend = async (page = 1) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/v1/land/get?page=${page}`,
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setAllLandData({ data: response.data.data, loading: false });
        setTotalPage(response.data.last_page);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getAllLend();
  }, []);

  const changePage = async (pageNum) => {
    setPage(pageNum);
    getAllLend(pageNum);
  };
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-end justify-end mx-auto pl-[18px] py-[18px] w-full">
        <div className="flex flex-col items-start justify-start mt-[30px] md:px-5 w-[97%] md:w-full">
          <Header />
          <Text
            className="mt-[57px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
          >
            Categories
          </Text>
          <div className="flex md:flex-col flex-row font-inriasans gap-[41px] items-center justify-start md:ml-[0] ml-[13px] mt-[26px] w-[94%] md:w-full">
            <List
              className="sm:flex-col flex gap-3 grid md:grid-cols-1 grid-cols-3 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <div onClick={() => window.location.href = "/reccomendations"} 
              className="bg-blue_gray-100 cursor-pointer hover:border-[6px] ease-in duration-100 border-solid rounded-[25px]  h-[155px] sm:ml-[0] relative w-full">
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
              <div 
              className="bg-blue_gray-100 cursor-pointer hover:border-[6px] ease-in duration-100 border-solid rounded-[25px]  h-[155px] sm:ml-[0] relative w-full">
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
                      className="absolute bottom-[-250%] h-[75px] object-cover right-[1%]"
                      src="images/img_calendar661512.png"
                      alt="locationonamapSeven"
                    />
                  </div>
                </div>
              </div>
              <div 
              className="bg-blue_gray-100 cursor-pointer hover:border-[6px] ease-in duration-100 border-solid rounded-[25px]  h-[155px] sm:ml-[0] relative w-full">
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
                Job Vacancies
                    </Text>
                    <Img
                      className="absolute bottom-[-250%] h-[75px] object-cover right-[1%]"
                      src="images/img_linkedin3800006_71x70.png"
                      alt="locationonamapSeven"
                    />
                  </div>
                </div>
              </div>
              <div 
              onClick={() => navigate("/land/manage")}
              className="bg-blue_gray-100 cursor-pointer hover:border-[6px] ease-in duration-100 border-solid rounded-[25px]  h-[155px] sm:ml-[0] relative w-full">
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
                Add your Land
                    </Text>
                    <Img
                      className="absolute bottom-[-250%] h-[75px] object-cover right-[1%]"
                      src="images/img_linkedin3800006_71x70.png"
                      alt="locationonamapSeven"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Text
            className="mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
          >
            Newest Land
          </Text>
          <div className="mt-[33px] overflow-auto overflow-x-auto w-full">
            <div
              className="flex md:flex-col md:gap-4 flex-row items-center justify-start gap-[1%]"
              style={{ height: "fit-content" }}
            >
              {allLandData.data.map((val, idx) => ( 
                <div className="hover:transition-all md:h-[416px] h-[438px] relative w-[23%] md:w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] rounded-[35px] w-full">
                    <Text
                      className="border border-black-900_7f border-solid h-[22px] mt-[160px] px-1 py-0.5 rounded-[5px] text-[15px] text-black-900"
                      size="txtLucidaSansDemi15"
                    >
                      {truncateString(val.land_name, 35)}
                    </Text>
                    <div className="mt-2">
                      <div className="flex gap-2">
                        <Img
                          className="object-cover w-3"
                          src="images/img_placeholder684809.png"
                          alt="placeholder6848_One"
                        />
                        <Text
                          className=" text-[14px] text-black-900 w-max"
                          size="txtLucidaSansDemi17"
                        >
                          {truncateString(val.kota + ", " + val.kecamatan, 30)}
                        </Text>
                      </div>
                      <Text
                        className="text-base text-black-900 w-max"
                        size="txtKarmaRegular16"
                      >
                        {val.kelurahan}
                      </Text>
                    </div>
                    <Text
                      className="text-[13px] text-black-900_8c"
                      size="txtLusitana13"
                    >
                      Roadways • Market • Parking lot • 24-hour access
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] mt-1 text-black-900 text-xl"
                      size="txtMavenProBold20"
                    >
                      Rp. {val.rental_price}/month
                    </Text>
                    <center>
                      <a href={`detail/${val.land_owner.username}/${val.slug}`}>                      
                      <Button className="" shape="round" size="sm">
                        SEE MORE
                      </Button>
                      </a>
                    </center>
                  </div>
                  <Img
                    className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src={!val.land_photos[0] ? "images/no-image.png" : val.land_photos[0]}
                    alt="emptyfloorfro"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row font-jua items-center justify-center md:ml-[0] ml-[562px] mt-3 w-[18%] md:w-full">
            <div className="bg-blue_gray-100 flex flex-col items-center justify-end p-0.5 rounded-[10px] w-1/5">
              <Img
                className="h-[34px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            {Array.from({ length: totalPage }, (_, i) => (
              <Button
                key={i}
                className={
                  page !== i + 1
                    ? "bg-red border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-[23px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    : "bg-red-100 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[48px] ml-[23px] rounded-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                }
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

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

export default SellerHomepagePage;
