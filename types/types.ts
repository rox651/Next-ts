export interface AuthProps {
  userCredentials: UserCredentials 
  updateUser: (value: Omit<UserCredentials, "username">) => void
}

export interface UserCredentials {
  id?: number | string
  username: string
  password: string
  email: string
  isUserActive?: boolean
}

export interface InputsAuth {
  username: string
  password: string
  email: string
}
