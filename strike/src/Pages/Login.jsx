import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';




const Login = () => {
  const handleClick=()=> {
    alert('Sign in successfull'+"\n"+"Get Ready to Explore more")
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={'teal'}
        p={20}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading color={'white'} mb={6}>Log In</Heading>
        <Text mb={'2%'} fontWeight={'bold'} fontSize={'20px'} color={'white'}> For Strike</Text>
        <Text fontSize={'20px'} textAlign={'left'} color={'white'}>Email</Text>
        <Input
          placeholder="yourmail@gmail.com"
          type="email"
          variant="filled"
          width={'120%'}
          mb={3}
        />
        <Text fontSize={'20px'} textAlign={'left'} color={'white'}>Password</Text>

        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          width={'120%'}

          mb={6}
        />
        <NavLink to={'/'} target={'_self'}>
        <Button  disabled={Input.variant} colorScheme="teal" mb={8}>
         <Text color={'white'} onClick={handleClick} >Log In</Text> 
        </Button>
        </NavLink>
        <FormControl display="flex" alignItems="center">
          <FormLabel color={'white'} htmlFor="dark_mode" mb="0">
            Please put your credentials.
          </FormLabel>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
