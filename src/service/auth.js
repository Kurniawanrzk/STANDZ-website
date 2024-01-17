import axios from 'axios';

const BaseURL = "http://127.0.0.1:8000/api/v1";

const AuthService = {
  getUser: async (token) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseURL}/auth/user`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.request(config);

      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', 1);
      // You might want to return some data from the API response here if needed
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      throw error; // Re-throw the error to handle it in your component or elsewhere
    }
  },
  logout: async (token) => {
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseURL}/auth/logout`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.request(config);

      localStorage.removeItem("token")
      localStorage.removeItem('isLoggedIn');
      // You might want to return some data from the API response here if needed
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      throw error; // Re-throw the error to handle it in your component or elsewhere
    }
  }
};

export default AuthService;
