import axios from "axios";

const BASE_URL = "http://localhost:5001";

// fetch data
export async function fetchData(endpiont) {
  const response = await axios.get(`${BASE_URL}/${endpiont}`);
  return response.data;
}

// add data to API
export async function addDataToApi(endpiont, Data) {
  const response = await axios.post(`${BASE_URL}/${endpiont}`, Data);
  return response.data;
}
