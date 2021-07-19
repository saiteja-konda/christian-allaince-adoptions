import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize={'xl'}
            color={useColorModeValue('black', 'white')}>
            Christian Alliance
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            // variant={'link'}
            bg={'gray.300'}
            href={'#'}>
            Contact Us
          </Button>
          <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Contact Us
            </Button>
        </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}>
            {label}
          </Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Home',
    children: [
      {
        label: 'E-Heartbeat Archives',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Annual Reports',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'About Us',
    children: [
      {
        label: "Licensing, Accreditation, and Affiliations",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Executive Director",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Our Awards",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Career Opportunities",
        subLabel: 'Find your dream design job',
        href: "#"

      },
    ]
  },
  {
    label: 'Adoption Services',
    children: [
      {
        label: "Adopt a Waiting Foster Child",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Adopt a Child Internationally",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Adopt a Baby through Private Adoption",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Adoption without an Agency",
        subLabel: 'Find your dream design job',
        href: "#"

      },
      {
        label: "Guardianship Adoption",
        subLabel: 'Find your dream design job',
        href: "#"

      },
    ]

  },
  {
    label: 'The Process',
    children: [
      {
        label: "Find an Adoption Opportunity",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Need an Adoption Home Study?",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "How Much is Adoption?",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "How Long Does It Take to Adopt?",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "What is Open Adoption?",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Preparing for Transracial Adoption",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Is Special Needs Adoption Right for You?",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Termination of Parental Rights",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Finalizing an Adoption in California",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "California Adoption Laws",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Adoption in California",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Adoption Tips",
        subLabel: "bla bla",
        href: "#"
      },
      {
        label: "Resources",
        subLabel: "bla bla",
        href: "#"
      },
    ]


  },
  {
    label: 'Are You Pregnant?',
    children: [
      { label: "How to Find an Adoptive Family", subLabel: "bla", href: "#" },
      { label: "Open Adoption with Your Baby", subLabel: "bla", href: "#" },
      { label: "Keeping Your Adoption Plan Private", subLabel: "bla", href: "#" },
      { label: "Adoption with or without Birth Father Consent", subLabel: "bla", href: "#" },
      { label: "Native American Heritage and Adoption", subLabel: "bla", href: "#" },
      { label: "Can a Birth Mother Get Paid for Adoption?", subLabel: "bla", href: "#" },
      { label: "24/7 Adoption Counseling and Support", subLabel: "bla", href: "#" },
      { label: "Revoking Consent to Adoption", subLabel: "bla", href: "#" },
      { label: "Paperwork Required to Make Adoption Plan", subLabel: "bla", href: "#" },
      { label: "Adoption Without an Adoption Agency?", subLabel: "bla", href: "#" },
      { label: "Too Late to Choose Adoption?", subLabel: "bla", href: "#" },
      { label: "Adoption or Abortion?", subLabel: "bla", href: "#" },
      { label: "Unplanned Pregnancy Help and Options", subLabel: "bla", href: "#" },
      { label: "Confidential Inquiry", subLabel: "bla", href: "#" },
    ]
  },
  {
    label: 'Family Camp',
    href: '#',
  },
  {
    label: 'Contact Us',
    href: '#',
  },

];