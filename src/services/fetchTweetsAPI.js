import axios from 'axios';

axios.defaults.baseURL = 'https://646635009c09d77a62004f02.mockapi.io';

export const fetchAllTweets = async controller => {
  const response = await axios.get(`/users`, {
    signal: controller.signal,
  });
  console.log(response.data);
  return response.data;
};
