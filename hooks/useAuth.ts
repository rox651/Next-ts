import { instance } from "@/api";
import { UserCredentials } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const sendUserInfo = async (userInfo: UserCredentials) => {
   const user = { id: 3, ...userInfo };

   const response = await instance.post("/users", {
      ...user,
   });
   return response;
};

const useAuth = () => {
    return useMutation({
        mutationFn: sendUserInfo
    })
};

export default useAuth;
