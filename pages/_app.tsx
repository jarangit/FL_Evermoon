import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </GlobalProvider>
  )
}

export default MyApp
