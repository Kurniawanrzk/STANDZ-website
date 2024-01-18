import React, { useEffect, useState } from "react";
import { Button, Img, List, Text, Input } from "components";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import Header from "components/Header";
import ChatService from "service/chat";
import Pusher from 'pusher-js';
import AuthService from "service/auth";

const ChatList = () => {
  const [chatList, setChatList] = useState({data:null, loading:true});
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {

    AuthService.getUser(localStorage.getItem('token')).then((data) => {
        setUser(data);
      });
      
      ChatService.ChatList({token:localStorage.getItem("token")})
      .then((data) => {
          setChatList({data:data, loading:false});
        })

    Pusher.logToConsole = true;

    const pusher = new Pusher('8b51f955f8c79187b3a8', {
      cluster: 'ap1',
      encrypted: true,
      authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      channelAuthorization: {
        transport: 'jsonp',
        endpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      },
    });

    const channel = pusher.subscribe(`chat-list.${user.id}`);
    
    channel.bind('App\\Events\\NotifMessage', (data) => {
      ChatService.ChatList({token:localStorage.getItem("token")})
      .then((data) => {
          console.log(data)
          setChatList({data:data, loading:false});
        })
      });
      
    return () => {
      pusher.unsubscribe(`chat-list.${user.id}`);
    };
  }, [])
  return (
    <>
      <div className="bg-lime-600 flex flex-col items-end justify-end mx-auto pl-[18px] py-[18px] w-full">
        <div className="flex flex-col items-start justify-start mt-[30px] md:px-5 w-[97%] md:w-full">
          <Header />
          <Text
            className="mt-[45px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
            size="txtMavenProBold38"
          >
          </Text>
          <div className="mt-[33px] ">
          {chatList.loading ? <></> : chatList.data.map((val, idx) => (
                    <div onClick={() => navigate(`${val.room_id}/${val.user_receiver}`)} className="cursor-pointer flex flex-row rounded-lg bg-blue_gray-100 w-full p-6 mt-3">
                      <span>{idx+1}</span>
                        <div>
                          <Text className="mt-4">{val.data.user_1} / {val.data.user_2} room chat</Text> 
                        <i>Latest Message : {val.data.latest_msg === null ? "No chat history" : val.data.latest_msg.message}</i>
                        </div>
                    </div>
                    
                ))}
          </div>
       
        </div>
      </div>
    </>
  );
};

export default ChatList;
