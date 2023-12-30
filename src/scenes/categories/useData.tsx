import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";

const useData = ({ handleClose }: { handleClose?: () => void }) => {
  const axiosInterceptor = useAxiosInterceptors();

  const {
    data: categories,
    isLoading,
    isError: fetchingError,
    refetch,
  } = useQuery<
    { id: number; categoryName: string; products: null; imgeUrl: string }[]
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInterceptor({
        url: "/category/getallcategory",
        method: "GET",
      });
      return res.data;
    },
  });

  const {
    mutate,
    isError: muationError,
    isPending: pendingMutation,
  } = useMutation({
    mutationKey: ["addNewCategory"],
    mutationFn: async ({
      categoryName,
      imageUrl,
    }: {
      categoryName: string;
      imageUrl: string | null;
    }) => {
      if (imageUrl == null) throw new Error("image is required");
      const { data } = await axiosInterceptor({
        url: "/category/addcategory",
        method: "POST",
        withCredentials: true,
        data: {
          categoryName,
          imgeUrl: imageUrl,
        },
      });
      return data;
    },
    onSuccess: () => {
      if (handleClose) handleClose();
      refetch();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return {
    categories,
    isLoading,
    fetchingError,
    mutate,
    muationError,
    pendingMutation,
    refetch,
  };
};

export default useData;
