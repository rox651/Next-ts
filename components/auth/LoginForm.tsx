import { GoogleIcon } from '@/public/svgs'
import { useAuthStore } from '@/store'
import { InputsAuth } from '@/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

const LoginForm = () => {
  const { updateUser } = useAuthStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsAuth>()

  const registerPassword = register('password', {
    required: {
      value: true,
      message: 'You must enter a password',
    },
    minLength: {
      value: 5,
      message: 'Your password must be at least 5 characters',
    },
  })

  const registerEmail = register('email', {
    required: {
      value: true,
      message: 'You must enter a valid email',
    },
  })

  const onSubmit: SubmitHandler<InputsAuth> = async (dataForm) => {
    updateUser(dataForm)
    reset()
  }

  return (
    <section className="w-11/12 bg-white  py-8 px-8 shadow-xl sm:w-[400px]">
      <h1 className="text-3xl font-semibold ">Login</h1>
      <p className="inline-block w-full text-sm ">Create users in this web</p>
      <button className="mx-auto mt-3 flex w-full items-center justify-center gap-3 border-[1px] border-gray-300 py-1 text-sm">
        <GoogleIcon />
        Sign in with Google
      </button>
      <div className="mt-5 flex w-full items-center justify-center gap-3 text-sm">
        <hr className="w-full" />{' '}
        <p className="w-full text-center">or Sign in with Email</p>
        <hr className="w-full" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="mb-2 block font-semibold">
          Email:
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full border-[1px] border-gray-300 py-1 px-2"
          {...registerEmail}
        />
        <ErrorMessage children={errors.email?.message} />
        <label htmlFor="email" className="my-2 block font-semibold">
          Password:
        </label>
        <input
          type="password"
          placeholder="1234"
          className="w-full border-[1px] border-gray-300 py-1 px-2"
          {...registerPassword}
        />
        <ErrorMessage children={errors.password?.message} />
        <input
          type="submit"
          className="mt-4 w-full cursor-pointer bg-gray-800 py-2 text-white"
          value="Login"
        />
        <div className="flex justify-between">
          <a href="#" className="mt-5 inline-block text-xs text-blue-600">
            Create a account
          </a>
          <a href="#" className="mt-5 inline-block text-xs text-blue-600">
            Forgot password?
          </a>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
