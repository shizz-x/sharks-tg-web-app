"use client";
import Axios from "@/app/actions/axios";
export default async function createUser(xauth) {
  const axios = new Axios(xauth);

  const response = await axios
    .get(axios.urlsMap.hero)
    .then((r) => r.data)
    .catch((e) => console.log(e));
  return response;
}
