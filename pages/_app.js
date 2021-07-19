import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS >
      <Component {...pageProps} />    </ChakraProvider>
  )
}

export default MyApp
