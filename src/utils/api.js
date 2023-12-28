import axios from "axios";

// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'b8584b8d1cmsh9fe36dd68babfdbp1a8f94jsn7e2bcc98d87d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}