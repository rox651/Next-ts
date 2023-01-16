import { create } from "zustand";
import { AuthProps } from "@/types";
import { instance } from "@/api/apiRequests";

export const useAuthStore = create<AuthProps>(set => ({
   userCredentials: {
      userId: "",
      username: "",
      password: "",
      email: "",
   },
   isUserActive: false,
   
}));
