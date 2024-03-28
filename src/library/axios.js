import axios from "axios";

const BASE_URL = "http://localhost:5002";

// fetch data
export async function fetchData(endpiont) {
  const { data } = await axios.get(`${BASE_URL}/${endpiont}`);
  return data;
}

// add data to API
export async function addDataToApi(endpiont, Data) {
  const { data } = await axios.post(`${BASE_URL}/${endpiont}`, Data);
  return data;
}
