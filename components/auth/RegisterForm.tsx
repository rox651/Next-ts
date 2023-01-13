import { useAuthStore } from "@/store";
import { Inputs } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
const RegisterForm = () => {
   // const authStore = useAuthStore()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = data => {
      console.log(data);
   };

   return (
      <section className="w-11/12 bg-white  py-8 px-8 shadow-xl sm:w-[400px]">
         <h1 className="mb-3 text-3xl font-semibold">Register</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username" className="mb-2 block font-semibold">
               Username:
            </label>
            <input
               type="text"
               placeholder="user-1"
               className="w-full border-[1px] border-gray-300 py-1 px-2"
               {...register("username", { required: true })}
            />
            <label htmlFor="email" className="mb-2 block font-semibold">
               Email:
            </label>
            <input
               type="email"
               placeholder="example@gmail.com"
               className="w-full border-[1px] border-gray-300 py-1 px-2"
               {...register("email")}
            />
            <label htmlFor="email" className="my-2 block font-semibold">
               Password:
            </label>
            <input
               type="password"
               placeholder="1234"
               className="w-full border-[1px] border-gray-300 py-1 px-2"
               {...register("password")}
            />
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
