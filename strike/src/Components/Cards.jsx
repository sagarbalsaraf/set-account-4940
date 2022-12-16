import {Card, CardBody, Image, Stack, Heading, Text, CardFooter, Box, Flex, Button} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import MiddleSection from "./MiddleSection"



function CardLink(){
    return (
        <Box bgColor={'#ebf5f3'}>
        <Box width={'80%'} margin={'auto'} >

            <Flex gap={'2%'}>

<Card maxW='sm'bgColor={'white'} pb={'2%'} width={'25%'} borderRadius={'15px'}
 _hover={{
    bgColor: '#007860',
    
  }}>
  <CardBody textAlign={'left'} _hover={{color:'white'}}>
    <Image margin={'auto'}
      src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/f12bf685-64af-4413-a42e-80e58ed088ee/evo-icp-hp-ps-light.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
    <Stack mt='6' spacing='3' _hover={{color:'white'}} >
   
      <Heading size='md' color={'black'} >Professional Services</Heading>
      <Text  color={'black'}>
      Take service delivery to the next level with Wrike's powerful platform. Manage resources, track billable hours, and make informed decisions with ease.
      </Text>
    </Stack>
 
  </CardBody>
  <CardFooter>
   <Text color={"black"} _hover={{color:'white'}} fontWeight={'medium'} fontSize={'xl'}><NavLink >Learn more <ArrowForwardIcon fontSize={'20px'}/></NavLink></Text>
  </CardFooter>
  
</Card>

<Card maxW='sm'bgColor={'white'} pb={'2%'} width={'25%'} borderRadius={'15px'}
 _hover={{
    bgColor: '#007860',
    
  }}>
  <CardBody textAlign={'left'} _hover={{color:'white'}}>
    <Image margin={'auto'}
      src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/8b283fef-6bd1-4513-8398-228095b64833/evo-icp-hp-marketing-light.png'
      alt='Marketing'
      borderRadius='lg'
    />
   
    <Stack mt='6' spacing='3' _hover={{color:'white'}} >
   
      <Heading size='md' color={'black'} >Marketing</Heading>
      <Text  color={'black'}>
      Empower your marketing team with customizable workflows, leading DAM tools, and dynamic reporting to help create high-performing campaigns.
      </Text>
    </Stack>
 
  </CardBody>
  <CardFooter>
   <Text color={"black"} _hover={{color:'white'}} fontWeight={'medium'} fontSize={'xl'}><NavLink >Learn more <ArrowForwardIcon fontSize={'20px'}/></NavLink></Text>
  </CardFooter>
  
</Card>

<Card maxW='sm'bgColor={'white'} pb={'2%'} width={'25%'} borderRadius={'15px'}
 _hover={{
    bgColor: '#007860',
    
  }}>
  <CardBody textAlign={'left'} _hover={{color:'white'}}>
    <Image margin={'auto'}
      src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/4486fa19-a0c3-4f16-8d12-60ddfefec7c8/evo-icp-hp-pm-light.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
    <Stack mt='6' spacing='3' _hover={{color:'white'}} >
   
      <Heading size='md' color={'black'} >Project Management</Heading>
      <Text  color={'black'}>
      Be the collaborative force that unifies your business with improved planning, risk management, and automation software to deliver better results.
      </Text>
    </Stack>
 
  </CardBody>
  <CardFooter>
   <Text color={"black"} _hover={{color:'white'}} fontWeight={'medium'} fontSize={'xl'}><NavLink >Learn more <ArrowForwardIcon fontSize={'20px'}/></NavLink></Text>
  </CardFooter>
  
</Card>

<Card maxW='sm'bgColor={'white'} pb={'2%'} width={'25%'} borderRadius={'15px'}
 _hover={{
    bgColor: '#007860',
    
  }}>
  <CardBody textAlign={'left'} _hover={{color:'white'}}>
    <Image margin={'auto'}
      src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=240,dpr=1/tp/storage/uploads/0eadfaae-5c62-44fe-a375-cfdaab468ac0/evo-icp-hp-it-light.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
    <Stack mt='6' spacing='3' _hover={{color:'white'}} >
   
      <Heading size='md' color={'black'} >IT</Heading>
      <Text  color={'black'}>
      Meet workforce and delivery needs by optimizing agile IT workflows. Manage strategic initiatives and service requests alike in the same place.      </Text>
    </Stack>
 
  </CardBody>
  <CardFooter>
   <Text color={"black"} _hover={{color:'white'}} fontWeight={'medium'} fontSize={'xl'}><NavLink >Learn more <ArrowForwardIcon fontSize={'20px'}/></NavLink></Text>
  </CardFooter>
  
</Card>

</Flex>

</Box>
<Text p={'4%'} fontSize={'xl'} fontWeight={'medium'} color= {'#007860'}>See all teams <ArrowForwardIcon fontSize={'20px'}/></Text>
<Button width={'15%'} p={'2.2%'} bg={'#08cf65'} fontSize={'2xl'} color={'white'} _hover={{bg:'#08cf66'}}>Get Started</Button>
<MiddleSection/>
</Box>
    )
}

export default CardLink