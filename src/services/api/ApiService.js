import { apiUrl } from '../../config/config'
import axios from 'axios';

const ApiService = {

  async latest_updates() {
    try {
        const responseData = await axios.get(`${apiUrl.apiUrl}/latest-updates`);
        return responseData.data;
    } catch (e) {
        console.log('Internal server error');
    }
  },

  async anime_details (link_url) {
    try {
        const responseData = await axios.get(`${apiUrl.apiUrl}/anime-details?link-url=${link_url}`);
        return responseData.data;
    } catch (e) {
        console.log('Internal server error');
    }
  },

  async view_toons_info (link_url) {
    try {
        const responseData = await axios.get(`${apiUrl.apiUrl}/view-info?link_url=${link_url}`);
        return responseData.data;
    } catch (e) {
        console.log('Internal server error');
    }
  },

  async read_chapter (link_url) {
    try {
        const responseData = await axios.get(`${apiUrl.apiUrl}/read-chapter?link_url=${link_url}`);
        return responseData.data;
    } catch (e) {
        console.log('Internal server error');
    }
  }

};

export default ApiService;