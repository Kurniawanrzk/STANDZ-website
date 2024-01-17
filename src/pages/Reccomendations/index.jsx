import React, { useEffect, useState } from "react";
import { Button, Img, List, Text, Input } from "components";
import axios from "axios";
import { Navigate } from 'react-router-dom'
 
const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

const  ReccomendationsPage = () => {
  const [allLandData, setAllLandData] = useState({ data: [], loading: true });
  const [allLandDataLth, setAllLandDataLth] = useState({data:[], loading:true})
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [location, setLocation] = useState({});

  useEffect(() => {
    handleLocation()
  }, []);

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
          getAddress(position.coords.latitude, position.coords.longitude)
      });
    } else {
      console.log("Geolocation not supported");
    }
  }

  function getAddress(lat,long) {
    axios
    .get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=5d906f8f4a4448d6a95ad0913d369b51`)
    .then((res) => {
      setLocation({city:res.data.features[0].properties.city})
      getLandByLocation(1, res.data.features[0].properties.city)
      getLandByLocationLth(1, res.data.features[0].properties.city)
    })
  }
 

  const getLandByLocation = async (page = 1, search ) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/v1/land/get?page=${page}&search=${search}`,
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

  const getLandByLocationLth = async(page = 1, search) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/v1/land/get?page=${page}&lth=1&search=${search}`,
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setAllLandDataLth({ data: response.data.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const changePage = async (pageNum) => {
    setPage(pageNum);
    getLandByLocation(pageNum);
  };

  return (
    <>
      <div className="bg-lime-600 flex flex-col items-end justify-end mx-auto pl-[18px] py-[18px] w-full">
        <div className="flex flex-col items-start justify-start mt-[30px] md:px-5 w-[97%] md:w-full">
          <div className="flex md:flex-col flex-row font-inriasans md:gap-10 items-start justify-between w-[97%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[45%] md:w-full">
              <Img
                className="h-[38px] md:h-auto object-cover rounded-[9px]"
                src="images/img_menu18288591.png"
                alt="menu18288593"
              />
              <div
                style={{ cursor: "pointer" }}
                className="bg-blue_gray-100 flex flex-row items-start justify-between p-[7px] rounded-bl-[22px] rounded-br-[21px] rounded-tl-[22px] rounded-tr-[21px] w-[82%] sm:w-full"
              >
                <Text
                  className="ml-[21px] mt-[3px] text-black-900_87 text-xl"
                  size="txtInriaSansRegular20"
                ></Text>
                <Img
                  className="h-[29px] md:h-auto mr-[13px] object-cover w-7 "
                  src="images/img_search1498521.png"
                  alt="search1498521"
                />
              </div>
            </div>
            <div className="flex flex-row font-mitr items-center justify-start md:mt-0 mt-[5px] w-[23%] md:w-full">
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
          <div className="flex md:flex-col flex-row font-inriasans gap-[41px] items-center justify-start md:ml-[0] ml-[13px] mt-[26px] w-[94%] md:w-full">
          </div>
          <Text
            className="mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
           >
              Nearby : {location.city} City
          </Text>
          <div className="mt-[33px] overflow-auto overflow-x-auto w-full">
            <div
              className="flex md:flex-col md:gap-5 flex-row items-center justify-start gap-[1%]"
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
                      Rp. {val.rental_price}/{val.batas_tagihan}
                    </Text>
                    <center>
                      <Button className="" shape="round" size="sm">
                        SEE MORE
                      </Button>
                    </center>
                  </div>
                  <Img
                    className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src={!val.land_photos[0] ? "https://foto.kontan.co.id/B7ZEHcCAvW2OsK769WrRsYnV3wY=/smart/2018/03/21/1322256984p.jpg" : val.land_photos[0]}
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
          
          <Text
            className="mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
           >
              Lowest to highest
          </Text>     
          <div className="mt-[33px] overflow-auto overflow-x-auto w-full">
            <div
              className="flex md:flex-col md:gap-5 flex-row items-center justify-start gap-[1%]"
              style={{ height: "fit-content" }}
            >
              {allLandDataLth.data.map((val, idx) => ( 
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
                      Rp. {val.rental_price}/{val.batas_tagihan}
                    </Text>
                    <center>
                      <Button className="" shape="round" size="sm">
                        SEE MORE
                      </Button>
                    </center>
                  </div>
                  <Img
                    className="absolute h-[202px] inset-x-[0] mx-auto object-cover rounded-[35px] top-[0] w-full"
                    src={!val.land_photos[0] ? "https://foto.kontan.co.id/B7ZEHcCAvW2OsK769WrRsYnV3wY=/smart/2018/03/21/1322256984p.jpg" : val.land_photos[0]}
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

export default ReccomendationsPage;
