import { Box, Text, Input, Button, Flex } from "@chakra-ui/react";
function FooterTop(){
    return (
        <Box bgColor={'#ebf5f3'} pt={'4%'} pb={'4%'}>
            <Flex  margin={'auto'} >
        <Box margin={'auto'}>
           <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=432,dpr=1/tp/static/assets/img/raster/default/4.png?v2" alt="topImage" /> 
        </Box>
        <Box margin={'auto'} >
            <Text fontSize={'5xl'} color={'black'} fontWeight={'bold'}>Try our powerful work management software for free</Text>
            <Text color={'#2e3857'} mt={'2%'} fontSize={'xl'} mb={'3%'}>Sign up for a free two-week trial of Wrike today — no credit card required.</Text>
            <Input p={'3%'} bg={'white'} m={'1%'} width={'35%'} outline={'2px solid grey'}  placeholder={"Enter your business email"}/>
            <Button p={'3.2%'} bg={'#08cf65'} color={'white'}  width={'20%'} _hover={{bg:'#08cf65'}}>Get Started</Button>
            
        </Box>
        <Box>
           <img  src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=432,dpr=1/tp/static/assets/img/raster/default/3.png?v2" alt="botImage" /> 
        </Box>
        </Flex>
        </Box>
    )
}

export default FooterTop