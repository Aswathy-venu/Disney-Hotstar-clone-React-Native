import axios from "axios";

const fetchData = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/movies/animation');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export default fetchData;