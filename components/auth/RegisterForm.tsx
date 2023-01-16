// import { sendUserInfo } from "@/api";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "@/hooks";
import { Inputs } from "@/types";

import ErrorMessage from "./ErrorMessage";

const RegisterForm = () => {
   const { isLoading, mutate, isSuccess, isError, reset: resetQuery } = useAuth();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = data => {
      resetQuery();
      mutate(data);
      if (isError) return;

      reset();
   };

   const registerUsername = register("username", {
      required: {
         value: true,
         message: "You must enter a username",
      },
      minLength: {
         value: 2,
         message: "Your username must be at least 2 characters",
      },
   });

   const registerPassword = register("password", {
      required: {
         value: true,
         message: "You must enter a password",
      },
      minLength: {
         value: 5,
         message: "Your password must be at least 5 characters",
      },
   });

   const registerEmail = register("email", {
      required: {
         value: true,
         message: "You must enter a valid email",
      },
   });

   return (
      <section
         className={clsx(
            isLoading && "opacity-80",
            `w-11/12 bg-white  py-8 px-8 shadow-xl sm:w-[400px]`
         )}
      >
         <h1 className="mb-3 text-3xl font-semibold">Register</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username" className="mb-2 block font-semibold">
               Username:
            </label>
            <input
               type="text"
               placeholder="user-1"
               className="w-full border-[1px] border-gray-300 py-1 px-2"
               {...registerUsername}
            />
            <ErrorMessage children={errors.username?.message} />
            <label htmlFor="email" className="my-2 block font-semibold">
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
            <br></br>
            <span className=" font-bold text-blue-500">{isSuccess && "User created"}</span>
            <span className=" font-bold text-red-500">{isError && "Error"}</span>
            <input
               type="submit"
               className="mt-4 w-full cursor-pointer bg-gray-800 py-2 text-white"
               value="Register"
            />
            <div className="flex justify-between">
               <a href="#" className="mt-5 inline-block text-xs text-blue-600">
                  Login if you already have an account
               </a>
            </div>
         </form>
      </section>
   );
};

export default RegisterForm;
