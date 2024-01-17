import React, { useEffect, useState } from "react";
import { Img, Text } from "components";
import AuthService from "service/auth";
import {useNavigate} from 'react-router-dom'

const Header = (props) => {
    const [user, setUser] = useState({data:null, loading:true});
    const [profil, setProfil] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
      AuthService.getUser(localStorage.getItem("token"))
        .then((data) => {
          setUser({data:data, loading:false})
        })  
        .catch((err) => {
          localStorage.removeItem("token")
          localStorage.removeItem("isLoggedIn")
          navigate("/login")
        })
    }, [])

    const Logout = async () =>
      AuthService.logout(localStorage.getItem("token"))
        .then((data) => {
          navigate("/login")
      })
    
  return (
    <>
           <div className="flex md:flex-col flex-row font-inriasans md:gap-10 items-start justify-between w-[97%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[45%] md:w-full">
              <Img
                className="h-[38px] md:h-auto md:w-10 object-cover rounded-[9px]"
                src="../../images/img_menu18288591.png"
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
                  src="../../images/img_search1498521.png"
                  alt="search1498521"
                />
              </div>
            </div>
            <div className="flex flex-row font-mitr items-center justify-start md:mt-0 mt-[5px] w-[23%] md:w-full">
              {localStorage.getItem("isLoggedIn") ? (
                <>
                <Img
                className="h-9 md:h-auto object-cover w-[35px]"
                src="../../images/img_bell68133732.png"
                alt="bell68133732"
              />
              <Img
                className="h-[33px] md:h-auto ml-[22px] object-cover w-[34px]"
                src="../../images/img_speechbubble7647467.png"
                alt="speechbubble764"
              />
              <Img
                className="h-[51px] md:h-auto ml-[43px] rounded-[50%] w-[52px]"
                src="../../images/user.png"
                alt="do2024exoseason"
              />
              <Text
                className="ml-[18px] text-black-900 text-xl"
                size="txtMitrRegular20"
              >
                {user.loading ? "loading.." :  user.data.username }
              </Text>
              <div className="relative">
                <button   
                onMouseEnter={() => setProfil(true)}   
                onMouseLeave={() => setProfil(false)}           
                >
                <Img
                className="w-[20px]"
                src="../../images/img_arrowdownsign.png"
                alt="arrowdownsign"
               />
                </button>
                {profil ?       
                <div 
                onMouseEnter={() => setProfil(true)}   
                onMouseLeave={() => setProfil(false)}           

                className={`flex flex-col absolute w-[100px] right-[-40px] bg-blue_gray-100 font-mada rounded-[15px] top-[19px] p-3`}>
                  <a href="#">User profil</a>
                  <a href="#">Wallet</a>
                  <a href="#">Setting</a>
                  <p className="cursor-pointer" onClick={Logout}>Log out</p>

                </div> : <></>}
                </div>
              </>
              ) : <a href="login" className="underline">You have not login yet, please login</a>}
            </div>
          </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
