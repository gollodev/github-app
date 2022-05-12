import React from 'react'

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'

import SearchPage from './SearchPage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Grid p={3}>
          <SearchPage/>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
