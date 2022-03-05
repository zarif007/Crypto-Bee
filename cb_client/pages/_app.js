import { TransactionProvider } from '../context/TransactionContexst'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
