import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import PageHead from '@/components/PageHead'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
