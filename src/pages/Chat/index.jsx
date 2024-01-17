import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { Img, Input, Text } from 'components';
import { useParams } from 'react-router-dom';
import ChatService from 'service/chat';
import AuthService from 'service/auth';
import Header from 'components/Header';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');
  const params = useParams();

  useEffect(() => {
    AuthService.getUser(localStorage.getItem('token')).then((data) => {
      setUser(data);
    });

    ChatService
    .getChat({token:localStorage.getItem("token"), room_id:params.room_id})
    .then((data) => {
      console.log(data)
      console.log("adsa")
      setMessages(data)
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

    const channel = pusher.subscribe(`room.${params.room_id}`);

    channel.bind('App\\Events\\PrivateMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.data]);
    });
    return () => {
      pusher.unsubscribe(`room.${params.room_id}`);
    };
  }, []);

  const handleSendMessage = async () => {
    ChatService.ChatPrivate({token:localStorage.getItem("token"),user_id:user.id, message:message, receiver_usn:params.username, room_id:params.room_id})
    .then((data) => {
      console.log(data)
    })
    .catch((data) => {
      console.log(data)
    })
   };
  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <Header />
        <div className="flex flex-col font-lilitaone items-start max-w-[1325px] mt-11 mx-auto sm:px-5 px-6 w-full">
          {/* Display messages */}
          {messages.map((message, idx) => (
            <div
              key={idx}
              className="bg-gray-300_aa mt-3 flex flex-col font-mitr items-start justify-start max-w-[1238px] mx-auto p-0.5 md:px-5 rounded-[35px] w-full"
            >
              <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start mb-[18px] md:ml-[0] ml-[9px] w-full md:w-full">
                <div className="flex flex-col items-start w-full justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtMitrRegular32"
                  >
                   {message.sender.username} 
                  </Text>
                  {message.message}
                </div>
              </div>
            </div>
          ))}
          <div className='p-4 bg-white-200 flex flex-row'>
              <Input onChange={(val) => setMessage(val)} className="mt-2 w-[600px] md:w-[300px] text-white bg-white-200"  />
              <button onClick={handleSendMessage} class="bg-red-700 text-white  py-2 px-4 rounded">
                Send
              </button>          
              </div>
        </div>
  
      </div>
    </>
  );
};

export default ChatPage;
