import { GoogleIcon } from "@/public/svgs";

const LoginForm = () => {
   return (
      <section className="w-11/12 sm:w-[400px]  bg-white shadow-xl py-8 px-8">
         <h1 className="text-3xl font-semibold ">Login</h1>
         <p className="text-sm w-full inline-block ">Create users in this web</p>
         <button className="mt-3 mx-auto py-1 flex w-full items-center text-sm justify-center gap-3 border-[1px] border-gray-300">
            <GoogleIcon />
            Sign in with Google
         </button>
         <div className="text-sm w-full flex items-center justify-center mt-5 gap-3">
            <hr className="w-full" /> <p className="w-full text-center">or Sign in with Email</p>
            <hr className="w-full" />
         </div>
         <form>
            <label htmlFor="email" className="block mb-2 font-semibold">
               Email:
            </label>
            <input
               type="email"
               name="email"
               placeholder="example@gmail.com"
               className="w-full py-1 px-2 border-[1px] border-gray-300"
            />
            <label htmlFor="email" className="block my-2 font-semibold">
               Password:
            </label>
            <input
               type="password"
               name="password"
               placeholder="1234"
               className="w-full py-1 px-2 border-[1px] border-gray-300"
            />
            <input
               type="submit"
               className="w-full mt-4 bg-gray-800 text-white py-2 cursor-pointer"
               value="Login"
            />
            <div className="flex justify-between">
               <a href="#" className="text-blue-600 text-xs mt-5 inline-block">
                  Create a account
               </a>
               <a href="#" className="text-blue-600 text-xs mt-5 inline-block">
                  Forgot password?
               </a>
            </div>
         </form>
      </section>
   );
};

export default LoginForm;
