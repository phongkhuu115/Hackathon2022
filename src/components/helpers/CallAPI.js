import axios from "axios";

export let PostAPINoToken = async (url, body) => {
  let request = await axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body
  })
  return request;
}

export let GetAPINoToken = async (url) => {
  let request = await axios(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return request;
}