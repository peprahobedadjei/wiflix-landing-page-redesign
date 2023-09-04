'use client'

import {
    Box,
    Stack,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'


interface Props {
    children: React.ReactNode
}

function MovieWrapper(props: Props) {
    const { children } = props

    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    )
}

export default function CategoryCard() {
    return (
        <Box cursor={'pointer'}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
                px={5}
                bgGradient={'linear(to-t, gray.900, transparent)'}>
                <MovieCard1 />
                <MovieCard2 />
                <MovieCard3 />
                <MovieCard4 />
                <MovieCard5 />
            </Stack>
        </Box>
    )
}

const MovieCard1 = () => {
    return (
        <MovieWrapper>
            <Box
                position="relative">
                <Box
                    position="absolute"
                    top="-16px"
                    left="50%"

                    style={{ transform: 'translate(-50%)' }}>
                    <Text
                        textTransform="uppercase"
                        bg={'brand.100'}
                        px={3}
                        py={1}
                        color={'white'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Action
                    </Text>
                </Box>

                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={'xl'}
                    height={400}
                    src={
                        'assets/images/Blackfish.png'
                    }
                />
                <Box
                    position="absolute"
                    top="0"
                    borderRadius={'xl'}
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
                ></Box>

                <Text
                    position="absolute"
                    bottom="30px"
                    left="20px"
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize="1xl"
                >
                    Action Packed
                </Text>

            </Box>
        </MovieWrapper>

    )
}


const MovieCard2 = () => {
    return (
        <MovieWrapper>
            <Box
                position="relative">
                <Box
                    position="absolute"
                    top="-16px"
                    left="50%"

                    style={{ transform: 'translate(-50%)' }}>
                    <Text
                        textTransform="uppercase"
                        bg={'brand.100'}
                        px={3}
                        py={1}
                        color={'white'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Family
                    </Text>
                </Box>

                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={'xl'}
                    height={400}
                    src={
                        'assets/images/Miracle.png'
                    }
                />
                <Box
                    position="absolute"
                    top="0"
                    borderRadius={'xl'}
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
                ></Box>

                <Text
                    position="absolute"
                    bottom="30px"
                    left="20px"
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize="1xl"
                >
                   For the Family
                </Text>

            </Box>
        </MovieWrapper>

    )
}
const MovieCard3 = () => {
    return (
        <MovieWrapper>
            <Box
                position="relative">
                <Box
                    position="absolute"
                    top="-16px"
                    left="50%"

                    style={{ transform: 'translate(-50%)' }}>
                    <Text
                        textTransform="uppercase"
                        bg={'brand.100'}
                        px={3}
                        py={1}
                        color={'white'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Love
                    </Text>
                </Box>

                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={'xl'}
                    height={400}
                    src={
                        'assets/images/love.png'
                    }
                />
                <Box
                    position="absolute"
                    top="0"
                    borderRadius={'xl'}
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
                ></Box>

                <Text
                    position="absolute"
                    bottom="30px"
                    left="20px"
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize="1xl"
                >
                    Action Packed
                </Text>

            </Box>
        </MovieWrapper>

    )
}
const MovieCard4 = () => {
    return (
        <MovieWrapper>
            <Box
                position="relative">
                <Box
                    position="absolute"
                    top="-16px"
                    left="50%"

                    style={{ transform: 'translate(-50%)' }}>
                    <Text
                        textTransform="uppercase"
                        bg={'brand.100'}
                        px={3}
                        py={1}
                        color={'white'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Drama
                    </Text>
                </Box>

                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={'xl'}
                    height={400}
                    src={
                        'assets/images/Bridesmaids.png'
                    }
                />
                <Box
                    position="absolute"
                    top="0"
                    borderRadius={'xl'}
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
                ></Box>

                <Text
                    position="absolute"
                    bottom="30px"
                    left="20px"
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize="1xl"
                >
                   Full of Happiness
                </Text>

            </Box>
        </MovieWrapper>

    )
}
const MovieCard5 = () => {
    return (
        <MovieWrapper>
            <Box
                position="relative">
                <Box
                    position="absolute"
                    top="-16px"
                    left="50%"

                    style={{ transform: 'translate(-50%)' }}>
                    <Text
                        textTransform="uppercase"
                        bg={'brand.100'}
                        px={3}
                        py={1}
                        color={'white'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Horror
                    </Text>
                </Box>

                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    borderRadius={'xl'}
                    height={400}
                    src={
                        'assets/images/Dracula.png'
                    }
                />
                <Box
                    position="absolute"
                    top="0"
                    borderRadius={'xl'}
                    left="0"
                    width="100%"
                    height="100%"
                    background="linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
                ></Box>

                <Text
                    position="absolute"
                    bottom="30px"
                    left="20px"
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize="1xl"
                >
                   For Movie Night
                </Text>

            </Box>
        </MovieWrapper>

    )
}

