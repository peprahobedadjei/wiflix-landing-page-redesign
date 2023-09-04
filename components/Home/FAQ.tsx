'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react'

import { useBreakpointValue } from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
      // Use useBreakpointValue to conditionally set maxW
  const maxContainerWidth = useBreakpointValue({ base: '100%', sm: '80%', md: '70%', lg: '60%' });
    return (
        <Flex
            alignContent={'center'}
            mt={6}>
            
        <Container maxW={1260} bg="#19191A">
          <Heading
            fontWeight={400}
            fontSize={'20'}
            color={'white'}
            mt={10}>
           Frequently Asked Questions
          </Heading>
                <Accordion 
                allowToggle 
                bg="white"
                mt={5}
                >
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}>
                            <Text fontSize="md" color="gray.800" textAlign='left'>
                                What is Wi-flix?
                            </Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text fontSize= '16' color="gray.600">
                                Wi-flix is a streaming service that offers the very best of
                                Traditional and 360° Entertainment anywhere, anytime, and
                                cancel anytime. Overall 30,000+ hours of entertainment including
                                African drama series, Telenovelas, movies, sports, Kids, Documentaries,
                                Educational, 360° videos, and 10+ most watched worldwide Live TV Channels.
                                Make friends and family happy by activating unlimited accounts with Wi-flix
                                today. No restrictions, no hidden charges, you can add as many profiles as you want.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>How much does Wi-flix cost?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                                Watch Wi-flix on your smartphone, tablet, Smart TV, laptop,
                                or streaming device at a flexible Daily, Weekly, and Monthly
                                fee that fits your pocket. Access only of $2.99 a month.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>Where can I watch Wi-flix?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                                Watch anywhere, anytime, on an unlimited number of devices. Subscribe to Wi-flix
                                account today and enjoy Traditional, International and 360° entertainment right
                                on your mobile phone, Tablet, Smart TV or streaming device. Download Wi-flix app
                                from Google Play store for Android devices, App store for iOS devices and Web for
                                Windows 10 app. Watch Wi-flix on the go, your choice, your freedom.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>How can I subscribe or become a member?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                            Subscribe with your Master or Visa card, Mobile Money or Airtime wherever,
                             whenever for access only plans.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>How can I cancel?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                            Wi-flix is very dynamic and flexible. You can cancel your subscription in two 
                            easy steps on your mobile phone, Tablet, laptop or streaming device. 
                            There are no hidden charges, you get exactly what you pay for.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>What can I watch on Wi-flix?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                            Wi-flix has a captivating catalogue of entertainment. Over 30,000+ hours of 
                            Traditional and international entertainment collections ranging from 
                            Blockbuster movies, Thrillers, Telenovelas, African drama series from West, 
                            South East and Central Africa with 10+ most watched worldwide Live TV channels.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}
                            _hover={{ bg: 'gray.100' }}
                            color="gray.800">
                            <Text fontSize="md" textAlign='left'>What other platform can I watch wi-flix?</Text>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Text fontSize= '16' color="gray.600">
                            Our apps are now available on Android, iOS, Web, TVOS, Android TV for Smart TV.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Flex>
    )
}