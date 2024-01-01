import { useEffect } from "react";
import { axiosCustom } from "../../../api/axiosCustome";
import { useLogIn } from "../../../context/useLogIn";
import { useMutation } from "@tanstack/react-query";

const useAxiosInterceptors = () => {
  const { mutateAsync, data } = useMutation({
    mutationKey: ["refreshToken"],
    mutationFn: async () => {
      const { data } = await axiosCustom({
        method: "POST",
        url: "/user/refreshtoken",
      });
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { userAuth } = useLogIn();
  useEffect(() => {
    const requestInterceptor = axiosCustom.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${userAuth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosCustom.interceptors.response.use(
      (response) => {
        return response;
      },

      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await mutateAsync();

          prevRequest.headers["Authorization"] = `Bearer ${data?.token}`;
          return axiosCustom(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosCustom.interceptors.request.eject(requestInterceptor);
      axiosCustom.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return axiosCustom;
};

export default useAxiosInterceptors;
