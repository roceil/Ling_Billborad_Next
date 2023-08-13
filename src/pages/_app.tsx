import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import PageHead from '@/components/PageHead'
import CreateModal from '@/components/CreateModal'
import Loading from '@/components/Loading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Header />
      <Component {...pageProps} />
      <CreateModal />
      <Loading />
    </>
  )
}
