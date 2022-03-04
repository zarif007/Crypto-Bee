import Header from '../components/Header'

import Head from 'next/head'
import Main from '../components/Main'

const style = {
    wrapper: ' max-h-screen h-min-screen w-screen bg-black text-white select-none flex flex-col justify-between'
}

export default function Home() {
  return (
    <div className={style.wrapper}> 
      <Head>
          <title>Crypto BEE</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
