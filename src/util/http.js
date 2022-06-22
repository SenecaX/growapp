import axios from "axios";

const BACKEND_URL =
  "https://backend-dde8e-default-rtdb.europe-west1.firebasedatabase.app/";

export async function post(data) {
  const response = await axios.post(BACKEND_URL + "/diary.json", data);
  const id = response.data.name;
  return id;
}

export async function get() {
  const response = await axios.get(BACKEND_URL + "/diary.json");

  const diary = [];

  for (const key in response.data) {
    const object = {
      id: key,
      name: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    diary.push(object);
  }

  return diary;
}

export function put(id, data) {
  return axios.put(BACKEND_URL + `/diary/${id}.json`, data);
}

export function deleting(id) {
  return axios.delete(BACKEND_URL + `/diary/${id}.json`);
}
