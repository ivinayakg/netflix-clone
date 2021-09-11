import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

const Fetch = async (url) => {
  const res = await instance.get(url);
  const data = await res.data.results;
  const id = await Object.keys(data);
  return { data, id };
};

export default Fetch;
