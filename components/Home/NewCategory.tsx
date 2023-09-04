'use client'
import NewCategoryCard from '../../components/Home/NewCategoryCard'
import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}


export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h6" fontSize="2xl" color={'white'}>
          New on Wi-flix
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Discover the Latest Cinematic Adventures Only on Wi-flix
        </Text>
      </VStack>
      <NewCategoryCard/>
    </Box>
  )
}