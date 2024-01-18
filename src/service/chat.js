import axios from 'axios';

const BaseURL = "http://127.0.0.1:8000/api/v1";

const ChatService = {
  ChatPrivate: async (data) => {
    try {
        const FormData = require('form-data');
        let Fdata = new FormData();
        Fdata.append('user_id', data.user_id);
        Fdata.append('receiver_usn', data.receiver_usn)
        Fdata.append('message', data.message);
        Fdata.append('room_id', data.room_id)
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${BaseURL}/chat/message`,
          headers: { 
            Authorization:`Bearer ${data.token}`,
          },
          data : Fdata
        };
        
        const response = await axios.request(config);

        return response.data;
      } catch (error) {
        console.error('API error:', error);
        throw error; // Re-throw the error to handle it in your component or elsewhere
      }
  }, getChat: async(data) => {
    try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${BaseURL}/chat/message/${data.room_id}`,
          headers: { 
                Authorization:`Bearer ${data.token}`,
                Accept:"application/json"

          },
          data : data
        };
        
        const response = await axios.request(config);

        return response.data;
      } catch (error) {
        console.error('API error:', error);
        throw error; // Re-throw the error to handle it in your component or elsewhere
      }
  },
  createNewRoom:async(cred) => {
    try {
      const FormData = require('form-data');
      let data = new FormData();
      data.append('landowner', cred.landowner);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:  `${BaseURL}/chat/create/room`,
        headers: { 
          Authorization: `Bearer ${cred.token}`, 
          Accept:"application/json"

        },
        data : data
      };

      const response = await axios.request(config)

      return response.data;

    }catch(e) {

    }
  },
  ChatList:async(cred) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:  `${BaseURL}/chat/get/`,
        headers: { 
          Authorization: `Bearer ${cred.token}`, 
          Accept:"application/json"

        },
      };

      const response = await axios.request(config)

      return response.data;

    }catch(e) {

    }
  }

 
};

export default ChatService;

