import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} bgColor={"blackAlpha.50"}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                //   bg: 'blue.400',
                //   zIndex: -1,
              }}>
              Christian Alliance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Adoptions
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            A child is waiting...Are you waiting for a child?
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create Project
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack> */}
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          alt={'Banner Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1540429071038-04d88623bc9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}