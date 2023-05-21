import axios from 'axios';

axios.defaults.baseURL = 'https://646635009c09d77a62004f02.mockapi.io';

export const fetchAllTweets = async controller => {
  const response = await axios.get(`/users`, {
    signal: controller.signal,
  });
  return response.data;
};

export const updateTweet = async (id, { followers, isFollowing }) => {
  const response = await axios.put(`/users/${id}`, {
    followers,
    isFollowing,
  });
  return response.data;
};
