'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={'brand.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: ('brand.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={'black'}
      color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
          <Image 
        src='/assets/logo.png' 
        alt='Wi-flix'
        objectFit='contain'
        width={130}
         />
            <Text fontSize={'sm'}>© 2023 Wi-Flix. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton  label={'Twitter'} href={'https://twitter.com/WiflixGhana'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.facebook.com/people/Wi-flix/100068368823908/'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/wi_flix/'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Customer</ListHeader>
            <Box as="a" href={'#'}>
              Sign Up
            </Box>
            <Box as="a" href={'#'}>
              Log In
            </Box>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'https://onboarding.wi-flix.com/terms-and-conditions'}>
              Terms of Service
            </Box>
            <Box as="a" href={'https://onboarding.wi-flix.com/privacy-policy'}>
              Privacy Policy
            </Box>
          </Stack>
          <Stack align={'flex-start'} spacing={'4'}>
            <ListHeader>Install Wi-flix App</ListHeader>
            <a href="https://play.google.com/store/apps/details?id=com.smartboxtv.nunchee.android.wiflixchannel&pli=1">
              <Image
                src='/assets/google_play.png'
                alt='Wi-flix'
                objectFit='contain'
                width={130}
              />
            </a>

            <a href="https://apps.apple.com/us/app/wi-flix/id1528421824">
              <Image
                src='/assets/app_store.png'
                alt="Wi-flix"
                objectFit="contain"
                width={130}
              />
            </a>
        
            


          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}