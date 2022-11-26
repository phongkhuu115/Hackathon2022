import axios from "axios";

export function GetToken() {
  let jwt = localStorage.getItem('auth')
  if (jwt !== null) {
    return jwt;
  }
}

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

export let GetAPIToken = async (url) => {
  console.log(GetToken());
  let request = await axios(url, {
    headers: {
      'Authorization': `Bearer ${GetToken()}`,
      'Content-Type': 'application/json',
    },
  })
  return request;
}