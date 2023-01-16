import { UserCredentials } from '@/types'
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

export const sendUserInfo = async (userInfo: UserCredentials) => {
  const user = { id: 3, ...userInfo }

  const response = await instance.post('/users', {
    ...user,
  })
  return response
}

export const getUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserCredentials[]> => {
  const response = await instance(`/users?email=${email}&password=${password}`)
  return response.data
}
