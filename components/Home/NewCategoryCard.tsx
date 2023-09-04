'use client'

import {
  Box,
  Stack,
  SimpleGrid,
  Image
} from '@chakra-ui/react'

export default function ThreeTierPricing() {
  return (
      <Stack
        textAlign="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        px={20}>
        <SimpleGrid minChildWidth='120px'  spacing='40px' cursor={'pointer'}>
          <Box 
          bg='tomato' 
          height={'-webkit-fit-content'}
          border={'1px'}>
          <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
           'assets/images/Lucy.png'
          }
        />
        </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
        <Box 
          bg='tomato' 
          height={'-webkit-fit-content'}
          border={'1px'}>
          <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
           'assets/images/2.png'
          }
        />
        </Box>         
         <Box 
          bg='tomato' 
          height={'-webkit-fit-content'}
          border={'1px'}>
          <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
           'assets/images/3.png'
          }
        />
        </Box>         
         <Box 
          bg='tomato' 
          height={'-webkit-fit-content'}
          border={'1px'}>
          <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
           'assets/images/4.png'
          }
        />
        </Box>          
        <Box 
          bg='tomato' 
          height={'-webkit-fit-content'}
          border={'1px'}>
          <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
           'assets/images/5.png'
          }
        />
        </Box>
        </SimpleGrid>

      </Stack>
  )
}