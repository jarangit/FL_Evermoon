import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </GlobalProvider>
  )
}

export default MyApp
