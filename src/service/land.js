import axios from 'axios';

const BaseURL = "http://127.0.0.1:8000/api/v1";

const LandService = {
  CheckAsLandowner: async (token) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${BaseURL}/land/check/landowner`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      throw error; 
    }
  },
  
  RegisterAsLandowner: async(cred) => {
    try {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('phone_number', cred.phone_number);
        data.append('owner_adress', cred.owner_address);

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseURL}/land/landowner/register`,
        headers: { 
            Authorization: `Bearer ${cred.token}`, 
            Accept:"application/json"
        },
        data : data
        };

        const response = await axios.request(config);
        return response.data;
      } catch (error) {
        console.error('API error:', error);
        throw error; 
      }
  },
  CreateNewLand: async(cred) => {
    try {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('land_name', cred.land_name);
        data.append('location', cred.location);
        data.append('surface_area', cred.surface_area);
        data.append('deskripsi', cred.deskripsi);
        data.append('rental_price',cred.rental_price);
        data.append('provinsi', cred.provinsi);
        data.append('kota', cred.kota);
        data.append('kecamatan', cred.kecamatan);
        data.append('kelurahan', cred.kelurahan);
        data.append('batas_tagihan', cred.batas_tagihan);
    
        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseURL}/land/create`,
        headers: { 
            Authorization: `Bearer ${cred.token}`, 
            Accept:"application/json"
        },
        data : data
        };
    
        const response = await axios.request(config);
        return response
    } catch (error) {
        throw error;
    }

  }
};

export default LandService;
