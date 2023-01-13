import { NextPage } from "next";
import Head from "next/head";
import { RegisterForm } from "@/components";

const Register: NextPage = () => {
   return (
      <>
         <Head>
            <title>Register</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <RegisterForm />
      </>
   );
};

export default Register;
