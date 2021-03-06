import { ReactNode, useEffect } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import { data } from '../../lib/testees';
import ReactHtmlParser from 'react-html-parser';

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'left'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {ReactHtmlParser(children)}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} size="2xl" />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {/* {title} */}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function WithSpeechBubbles() {
    useEffect(() => {
        console.log(data)
    })

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Listen to voice of our childern</Heading>
                    <Text>We have been working with clients around the world</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    {data?.map(test =>
                        <Testimonial key={test.id}>
                            <TestimonialContent>
                                <TestimonialHeading>{test.title}</TestimonialHeading>
                                <TestimonialText>
                                    {test.para}
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                size='2xl'
                                src={test.image}
                                name={test.name}
                                title={'CEO at ABC Corporation'}
                            />
                        </Testimonial>)
                    }
                </Stack>
            </Container>
        </Box>
    );
}