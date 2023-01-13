import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <main className="grid place-items-center place-content-center gap-4 min-h-screen">
         <Component {...pageProps} />
      </main>
   );
}

export default MyApp;
