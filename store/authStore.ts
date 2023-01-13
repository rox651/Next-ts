import { AuthProps } from '@/types'
import { create } from 'zustand'

export const useAuthStore = create<AuthProps>((set) => ({
    userCredentials:{
        userId: "",
        username: "",
        password: "",
        email: ""
    },
    isUserActive: false,
    validateUser: (userInfo)=>{
        set(state=>({
            userCredentials: userInfo
        }))
    },
}))