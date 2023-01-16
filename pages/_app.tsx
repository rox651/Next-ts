import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextProgress from 'next-progress'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="grid min-h-screen place-content-center place-items-center gap-4">
        <NextProgress
          delay={500}
          height="5px"
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
