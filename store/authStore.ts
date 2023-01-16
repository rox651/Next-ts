import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'universal-cookie'
import { AuthProps } from '@/types'
import { getUser } from '@/api'

const cookies = new Cookies()

export const useAuthStore = create(
  persist<AuthProps>(
    (set) => ({
      userCredentials: {
        id: '',
        username: '',
        password: '',
        email: '',
        isUserActive: false,
      },
      isUserActive: false,
      updateUser: async (userCredentials) => {
        const user = await getUser(userCredentials)
        if (user.length === 0) return

        cookies.set(
          'user-token',
          '12361873612873yuhsdahdjghsadyasdhauiwieuqy71361783jsadjihas',
        )

        set(() => ({ userCredentials: { ...user[0], isUserActive: true } }))
      },
    }),
    {
      name: 'user',
    },
  ),
)
