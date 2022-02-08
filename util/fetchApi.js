import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "f40abf164amsh855badceaa2dbbfp1ee31fjsn47762bbf1cf1",
    },
  });

  return data;
};
