import axios from "axios";

const BASE_URL = "http://localhost:5002";

// fetch data
export async function fetchData(endpoint, searchParam, page, perPage) {
  const response = await axios.get(
    `${BASE_URL}/${endpoint}?q=${searchParam}&_page=${page}&_per_page=${perPage}&_limit=5000`
  );
  console.log(response);
  return response.data;
}

// add data to API
export async function addDataToApi(endpiont, Data) {
  const { data } = await axios.post(`${BASE_URL}/${endpiont}`, Data);
}
