import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import { useParams, useNavigate } from 'react-router-dom'
import LandService from "service/land";


const LandManage = () => {
  const [isLandOwner, setIsLandOwner] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    LandService
    .CheckAsLandowner(localStorage.getItem("token"))
    .then((data) => {
      if(data === 1){
        setIsLandOwner(true)
      }
      if(data.Status=== false) {
        setIsLandOwner(false)
      } 
    })
  },[])

  const RegisterAsLandowner = async(e) => {
    e.preventDefault()
    LandService
    .RegisterAsLandowner({phone_number:phoneNumber, owner_address:address, token:localStorage.getItem("token")})
    .then((data) => {
      setIsLandOwner(true)
      navigate("")
    })
  }

  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[51px] justify-start max-w-[1325px] mb-[409px] mx-auto w-full">
          <Header />
          <div className="flex md:flex-col flex-row font-lilitaone gap-[53px] items-center justify-start md:ml-[0] ml-[17px] w-[47%] md:w-full">
          {isLandOwner ? (
            <>
                {/* <div className="bg-deep_orange-A100_91 border border-black-900 border-solid flex flex-col items-end justify-end p-1 rounded-[20px] w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[9px] mt-[21px] w-[96%] md:w-full">
                <div className="flex flex-row font-livvic gap-[15px] items-center justify-start w-[91%] md:w-full">
                  <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-[7px] rounded-[31px] w-[63px]">
                    <Img
                      className="h-[45px] md:h-auto mb-[3px] md:ml-[0] ml-[3px] object-cover w-4/5"
                      src="../../images/img_budget.png"
                      alt="budget"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtLivvicBold32"
                    >
                      CASHIER
                    </Text>
                    <Text
                      className="text-base text-gray-800_01"
                      size="txtLivvicSemiBold16"
                    >
                      Casablanca City Mall
                    </Text>
                  </div>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-5 text-base text-black-900"
                  size="txtLivvicRegular16"
                >
                  <>
                    - Able to operate a computer and also excel (or similar)
                    <br />- Thorough and able to communicate well
                    <br />- Able to count quickly and precisely, and understand
                    existing products
                  </>
                </Text>
                <div className="md:h-14 h-[43px] md:ml-[0] ml-[13px] mt-8 relative w-[86%]">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
                    size="txtLiterataRomanMedium16"
                  >
                    Work Time : 5hr/day
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-black-900 w-max"
                    size="txtLivvicBold16"
                  >
                    Salary : Rp. 2.250.000/month
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-lilitaone leading-[normal] min-w-[251px] mt-1 md:text-3xl sm:text-[28px] text-[32px] text-center"
                  shape="round"
                  color="gray_300_af"
                  size="sm"
                >
                  BOOKED OUT
                </Button>
              </div>
            </div> */}
            <div className="relative bg-deep_orange-A100_91 border border-black-900 border-solid flex flex-col items-center justify-end p-16 md:px-10 sm:px-5 rounded-[20px] w-[46%] md:w-full">

              <Img
                className="h-[120px] mt-[76px]"
                src="../../images/img_iconsadd24px.svg"
                alt="iconsadd24px"
              />
              <Text
                className="mb-[43px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f"
                size="txtLilitaOne32"
              >
                ADD LAND
              </Text>
              <a href="/land/manage/create" className="absolute w-full h-full top-1"></a>
            </div>
            </>
          ) : (
            <>
              <div>
                  <div>
                  <Text
                  className="text-xl"
                  >
                    You are not registered as landowner yet, please fullfil form below
                  </Text>
                  </div>

                  <form>
                      <div className="mt-2">
                        <Text>Phone Number</Text>
                        <Input onChange={(val) => setPhoneNumber(val)}  />
                      </div>
                      <div className="mt-2">
                      <Text>Address</Text>
                      <Input onChange={(val) => setAddress(val)}  />
                      </div>
                      <Button onClick={RegisterAsLandowner} className="text-lg mt-2 border">Submit</Button>
                  </form>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandManage;
