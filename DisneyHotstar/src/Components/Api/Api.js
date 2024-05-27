import axios from "axios";

export const fetchData = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/movies/animation');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


export const popularData = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/movies/drama');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const asianetData = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/movies/animation');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };