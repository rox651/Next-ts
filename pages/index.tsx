import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Welcome</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <h1 className="text-6xl font-bold">Welcome </h1>
         <nav className="grid gap-5">
            <Link href="/login" className="bg-blue-500 text-center px-2 py-2 text-white">Login here</Link>
            <Link href="/register" className="bg-blue-500 text-center px-2 py-2 text-white">Register here</Link>
         </nav>
      </>
   );
};

export default Home;
