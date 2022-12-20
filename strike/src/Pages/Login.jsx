import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';




const Login = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const handleClick=()=> {
    alert('Sign in successfull'+"\n"+"Get Ready to Explore more")
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={'teal'}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading color={'white'} mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <NavLink to={'/'} target={'_self'}>
        <Button  disabled={Input.variant} colorScheme="teal" mb={8}>
         <Text color={'white'} onClick={handleClick} >Log In</Text> 
        </Button>
        </NavLink>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Please put your credentials.
          </FormLabel>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
