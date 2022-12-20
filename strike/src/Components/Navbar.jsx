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
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import React from "react"
import { AiOutlineGlobal } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';




export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = () => {
    
  }
  return (
    
    <Box bgColor={'#181f38'} >
      <Text p={'0.8%'} bg={'#007860'} color={'white'}>Give your teams the gift of Wrike this holiday season and you'll get a free gift, too! <Link textDecoration={'underline'}>Learn more.</Link><CloseIcon  onClick={handleClick} ml={'1%'} fontSize={'10px'}/></Text>
      <Flex width={'85%'} margin={'auto'} fontSize={'large'} 
     
        bg={useColorModeValue('white', '#181f38')}
        color={useColorModeValue('white', 'white')}
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
        <Flex flex={{ base: 1 }} color={'white'} justify={{ base: 'center', md: 'start' }}>
          <img align={'center'} width={'5%'} src="https://previews.123rf.com/images/nappelbaum/nappelbaum1610/nappelbaum161000013/64571350-bowling-emblem-and-badge-club-gaming-play-skittle-and-strike-illustration-template-for-bowling-club-.jpg" alt="" />
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
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
            bg= {'#181f38'}
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
            bg= {'#181f38'}
            _hover={{
              bg: '#0c3245',
            }}
            >
            <AiOutlineGlobal /> En
          </Button>
          <NavLink replace to={'/login'}  target={'_self'}>
          <Button
            mt={'12%'}
            fontSize={'l'}
            color={'#08cf65'}
            fontWeight={400}
            variant={'link'}
            >  
            Log in
            
          </Button>
          </NavLink>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'l'}
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
  const linkColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('white', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'white');

  return (
    <Stack direction={'row'} spacing={4} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'l'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}<Icon color={'white.400'} w={5} h={5} as={ChevronDownIcon} /> 
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

const DesktopSubNav = ({ tag, label, href, subLabel }) => {
  return (
    
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      color={'black'}
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

const NAV_ITEMS= [
  {
    label: 'Why Strike? ',
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
    label: 'Features ',
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
    label: 'Resources  ',
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
    label: 'Pricing  ',
    href: '#',
  },
];