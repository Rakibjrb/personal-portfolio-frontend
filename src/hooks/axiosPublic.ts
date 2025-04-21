import axios from "axios";

export function axiosPublic() {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER}/api`,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Bearer ${process.env.NEXT_SECRET_SITE_TOKEN}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(function (response) {
    return response;
  });

  return instance;
}
