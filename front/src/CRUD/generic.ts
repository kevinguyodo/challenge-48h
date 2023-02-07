import axios from "axios";

// TODO Change by your IP address
const baseURL: string = "http://10.44.17.147:3333/";

export const getData = (endPoint: string) => {
  try {
    const response = axios.get(baseURL + endPoint); //use data destructuring to get data from the promise object
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = (endPoint: string, newData: object) => {
  try {
    const response = axios.post(baseURL + endPoint, newData);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const putData = (
  endPoint: string,
  URLParameter: string,
  newData: object
) => {
  try {
    const response = axios.put(baseURL + endPoint + URLParameter, newData);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
