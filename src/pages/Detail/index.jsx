import React, { useEffect, useState } from "react";
import { Button, Img, List, Text, Input } from "components";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import Header from "components/Header";
import ChatService from "service/chat";
 
const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [detailLand, setDetailLand] = useState({data:null, loading:true})

  const getLandDetail = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/v1/land/get/${params.landowner}/${params.slug}`,
      headers: {
        Accept: "application/json",
        Authorization:"Bearer " + localStorage.getItem("token")
      },
    };
    console.log(detailLand)
    await axios
      .request(config)
      .then((response) => {
        setDetailLand({data:response.data, loading:false})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLandDetail();
  }, []);

  const goToRoomChat = async() => {
    ChatService
    .createNewRoom({ token:localStorage.getItem("token"), landowner:params.landowner })
    .then((data) => {
      navigate(`/chat/${data.id}/${params.landowner}`)
    })
  }
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-end justify-end mx-auto pl-[18px] py-[18px] w-full">
        <div className="flex flex-col items-start justify-start mt-[30px] md:px-5 w-[97%] md:w-full">
                <Header />
                {detailLand.loading ? <></> :
                  <div className="mt-[33px] overflow-auto overflow-x-auto w-full">
                  <div
                    className="flex md:flex-col flex-row justify-start gap-[10%]"
                    style={{ height: "fit-content" }}
                  >
                      <div>
                         <div>
                         <Img
                            src={!detailLand.data.land_photos[0] ? "../../images/no-image.png" : detailLand.data.land_photos[0]}
                            className="w-[500px] border rounded-xl"
                          />
                          <div className="flex-row m-2"> 
                            {detailLand.data.land_photos.map((val, idx) =>(
                                <>
                                <Img 
                                className="w-[100px] border rounded-xl"
                                src={detailLand.data.land_photos}
                                />
                                </>
                            ))}
                          </div>
                         </div>
                      </div>

                      <div className="">
                        <p className="text-xl w-90">
                        {detailLand.data.land_name}
                        </p>
                        <p className="mb-1 text-sm w-90 text-gray-600">
                        <span>{detailLand.data.rating} (rating)</span>
                        </p>
                        <p className="mt-1 text-2xl">Rp. {detailLand.data.rental_price} / {detailLand.data.batas_tagihan}</p>
                        <hr />
                        <p className="mt-2">Deskripsi:</p>
                        <p className="mt-1">{detailLand.data.deskripsi}</p>
                        <span className="flex-row flex gap-3">
                        <Button
                            className={
                             "mt-2 bg-red border border-black-900 border-solid cursor-pointer leading-[normal] rounded-[5px] sm:text-[21px] md:text-[23px] text-[15px] text-center"
                            }
                            onClick={goToRoomChat}
                        >
                            Chat Landowner
                        </Button>
                        <a href={`https://wa.me/${detailLand.data.land_owner.phone_number}`}  className="pt-2">
                            <Img
                            className="w-[25px]"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            /> 
                        </a>
                        </span>
                      </div>
                  </div>
                </div>}
        </div>
      </div>
    </>
  );
};

export default Detail;
