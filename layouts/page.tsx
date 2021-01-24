import {ReactNode} from 'react'
import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'

type PageProps = {
  children?: ReactNode
}

export default function Page({children}: PageProps) {
  return (
    <>
      <Head>
        <title>NextJS Tuts</title>
      </Head>
      
        <main>
          <Header />
          <Navigation />
          {children}
        </main>
    </>
  )
}
