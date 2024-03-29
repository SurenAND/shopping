import axios from "axios";

const BASE_URL = "http://localhost:5002";

// fetch data
export async function fetchData(endpiont, page, perPage) {
  const { data } = await axios.get(
    `${BASE_URL}/${endpiont}?_page=${page}&_per_page=${perPage}`
  );
  return data;
}

// add data to API
export async function addDataToApi(endpiont, Data) {
  const { data } = await axios.post(`${BASE_URL}/${endpiont}`, Data);
}
