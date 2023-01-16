import {  sendUserInfo } from '@/api'
import { useMutation, } from '@tanstack/react-query'

const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: sendUserInfo,
  })

  return registerMutation
}

export default useAuth
