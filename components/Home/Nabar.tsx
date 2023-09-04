'use client'
import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react'


export default function WithSubnavigation() {

  return (
    <Box >
      <Flex
        bg={'transparent'}
        minH={'60px'}
        mt={2}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={'center'}>
        <Flex flex={{ base: 1 }}>
        <Image 
        src='/assets/logo.png' 
        alt='Wi-flix'
        objectFit='contain'
        width={100}
         />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            width={150}
            borderRadius={0}
            color={'white'}
            border='1px'
            borderColor={'brand.100'}
            bg={'transparent'}
            href={'#'}
            _hover={{
                bg: 'transparent',
              }}>
            Log In
          </Button>

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
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}
