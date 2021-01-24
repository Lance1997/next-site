import Head from 'next/head'
import Header from '@components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Tuts</title>
      </Head>
      
        <main>
          <Header />
        </main>
    </>
  )
}
