'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'20vh'} direction={{ base: 'column', md: 'row',}}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              color={'white'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.100',
                zIndex: -1,
              }}>
              All you favourite
            </Text>
            <br />{' '}
            <Text color={'white'} as={'span'}>
              Series in One place
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          Explore new Worlds and indulge in your favourite movies, series, tv series with Wiflix! 
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={400}
            width={150}
            borderRadius={0}
            color={'white'}
            bg={'brand.100'}
            href={'#'}
            _hover={{
              bg: 'brand.200',
            }}>
            Watch Now
          </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justify={'center'} align={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          height={'320'}
          width={700}
          src={
           'assets/logo.gif'
          }
        />
        </Flex>
    </Stack>
  )
}