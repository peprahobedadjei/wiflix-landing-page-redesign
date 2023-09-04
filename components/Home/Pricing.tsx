'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Center,
  List,
  ListItem,
  ListIcon,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        py={{ base: 20, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
                  <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              color={'white'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.100',
                zIndex: -1,
              }}>
              Plan that
            </Text>
            <br />
            <Text as={'span'} color={'brand.100'}>
            fit your Need!
            </Text>
          </Heading>
          <Text color={'white'}>
          Watch Wi-flix on your smartphone, tablet, Smart TV, laptop, 
          or streaming device at a flexible Daily, Weekly, and Monthly 
          fee that fits your pocket.Watch anywhere, anytime, on an unlimited number of
           devices. Subscribe to Wi-flix account today and enjoy Traditional, 
           International and 360° entertainment right on your mobile phone, Tablet,
           Smart TV or streaming device.Watch Wi-flix on the go, your choice, your freedom.
          </Text>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>

          <Box
            position={'relative'}
            height={'500px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
           // bgColor={'tomato'}
            overflow={'hidden'}>

    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('gray.100', 'green.900')}
            p={2}
            px={3}
            color={'black'}
            rounded={'full'}>
            Wi-flix
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              2.99
            </Text>
            <Text color={'gray.500'}>/month</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              Flexible Package
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              Unlimited number of devices
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              360° Entertainment
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              Traditional, International 
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'brand.100'}
            color={'white'}
            borderRadius={'0'}
            boxShadow={'0 5px 20px 0px rgb( green.200/ 100%)'}
            _hover={{
              bg: 'brand.200',
            }}
            _focus={{
              bg: 'brand.200',
            }}>
            Start Today
          </Button>
        </Box>
      </Box>
    </Center>

      </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
