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


  var imagesArray = [
    'banner/banner-0.jpg',
    'banner/banner-1.jpg',
    'banner/banner-2.jpg',
    'banner/banner-3.jpg',
    'banner/banner-4.jpg',
    'banner/banner-5.jpg',
    'banner/banner-6.jpg',
  ];
  var randomNumber = Math.floor(Math.random() * imagesArray.length);
  var SrcImage = imagesArray[randomNumber];

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
                //   zIndex: -1,
                //   bg: 'blue.400',
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
            SrcImage
          }
        />
      </Flex>
    </Stack>
  );
}