import Axios, { AxiosError } from "axios";

export const api = Axios.create({
  timeout: 8000,
});

api.interceptors.request.use((config) => config, handleAxiosError);
api.interceptors.response.use((response) => response, handleAxiosError);

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("[📡 AXIOS_ERROR_RESPONSE_DATA]", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.log("[📡 AXIOS_ERROR_NO_RESPONSE]", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("[📡 AXIOS_ERROR_INVALID_REQUEST]", error.message);
  }
  return Promise.reject(error);
}
