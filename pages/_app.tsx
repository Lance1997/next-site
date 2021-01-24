import {globalStyles} from '@shared/globals'
import {AppProps} from 'next/app'
import {Global} from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
