import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4288d54c46msh870af4e6e9e75b1p199a55jsn27455a1fcde3",
    },
  });

  return data;
};
