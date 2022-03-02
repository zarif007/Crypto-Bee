import Header from '../components/Header'

import Head from 'next/head'
import Main from '../components/Main'

const style = {
    wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-black text-white select-none flex flex-col justify-between'
}

export default function Home() {
  return (
    <div className={style.wrapper}> 
      <Head>
          <title>Crypto BEE</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://kit.fontawesome.com/538078a3ee.js" crossorigin="anonymous"></script>
        </Head>
      <Header />
      <Main />
    </div>
  )
}
