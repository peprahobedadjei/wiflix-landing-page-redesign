
'use client'
import MainCategoriesCard from '../../components/Home/MainCategoriesCard'
import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'


export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="3xl" color={'white'}>
          Amazing Categories
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Get all your exciting movies, series and  more on Wi-flix.
        </Text>
      </VStack>
      <MainCategoriesCard/>

    </Box>
  )
}