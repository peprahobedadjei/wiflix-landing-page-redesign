'use client'

import { Stack, Flex, useBreakpointValue } from '@chakra-ui/react'
import Navbar from '../../components/Home/Nabar'
export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(assets/background.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack
        w={'full'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.900,blackAlpha.800, blackAlpha.700,  transparent)'}>
            <Navbar/>
      </Stack>
    </Flex>
  )
}