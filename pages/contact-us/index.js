import React from 'react'
import Layout from '../../components/core/Layout'
import { GrLocation, GrMapLocation } from 'react-icons/gr'
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Textarea,
    Icon,
    Center,
} from '@chakra-ui/react';


function ContactUs() {
    return (
        <Layout>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'xl'}
                    py={{ base: 10, sm: 20, lg: 32 }}
                >
                    <Center>
                        <Heading
                            color={'gray.800'}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Our Address
                        </Heading>
                    </Center>
                    <Center>
                        <Box mb="152.24">
                            <br />
                            <br />
                            {/* <Center>
                                <GrLocation />
                            </Center> */}
                             Address : 165 St Emanuel St, Mobile, AL 36602
                            <br />
                            <br />
                            Phone : +1 781 786 4586
                            <br />
                            <br />
                            Email : info@christianallainceadopt.com</Box>
                    </Center>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                Get in touch with us
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, blue.400,cyan.400)"
                                    bgClip="text">
                                    !
                                </Text>
                            </Heading>
                            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                While we’re good with blessed childern, there are simpler ways for us to get in touch.
                            </Text>
                        </Stack>
                        <Box as={'form'} mt={10}>
                            <Stack spacing={4}>
                                <Input
                                    placeholder="Firstname"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    placeholder="youremail@example.com"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    placeholder="+1 (___) __-___-___"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Textarea placeholder="Please enter your query in a brief"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                            </Stack>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, blue.400,cyan.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, blue.400,cyan.400)',
                                    boxShadow: 'xl',
                                }}>
                                Submit
                            </Button>
                        </Box>
                        form
                    </Stack>
                </Container>

            </Box>
        </Layout>
    )
}

export default ContactUs

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};