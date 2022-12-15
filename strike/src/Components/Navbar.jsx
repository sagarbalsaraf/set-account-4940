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




export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = () => {
    
  }
  return (
    
    <Box>
      <Text p={'0.8%'} bg={'#007860'}>Give your teams the gift of Wrike this holiday season and you’ll get a free gift, too! <Link textDecoration={'underline'}>Learn more.</Link><CloseIcon  onClick={handleClick} ml={'1%'} fontSize={'10px'}/></Text>
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
          <img align={'center'} width={'3%'} src="https://previews.123rf.com/images/nappelbaum/nappelbaum1610/nappelbaum161000013/64571350-bowling-emblem-and-badge-club-gaming-play-skittle-and-strike-illustration-template-for-bowling-club-.jpg" alt="" />
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
             <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'m'}
            fontWeight={600}
            color={'white'}
            margin={'auto'}
            href={'#'}
            bg= {'#1a202c'}
            _hover={{
              bg: '#0c3245',
            }}
            >
             Contact Sales
          </Button>
            <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'m'}
            fontWeight={600}
            color={'white'}
            margin={'auto'}
            href={'#'}
            bg= {'#1a202c'}
            _hover={{
              bg: '#0c3245',
            }}
            >
             En
          </Button>
          <Button
            as={'a'}
            fontSize={'sm'}
            color={'#08cf65'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Log in
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#08cf65'}
            href={'#'}
            _hover={{
              bg: '#007860',
            }}>
            Start for Free
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
       
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
                {navItem.label}<Icon color={'pink.400'} w={5} h={5} as={ChevronDownIcon} /> 
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

const DesktopSubNav = ({ tag, label, href, subLabel }: NavItem) => {
  return (
    
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>

        <Box>
        <Text mb={'8%'} color={'grey'}>{tag}</Text>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}

          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
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


interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Why Strike? v',
    children: [
      {
        tag: 'For Teams',
        label: 'Marketing',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Profession Services',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Project managers',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Creative & Design',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
    children: [
      {
        tag: 'For Team',
        label: 'Marketing',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Profession Services',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Project managers',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Creative & Design',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Features  v',
    children: [
      {
        tag: '',
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Resources  v',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
];