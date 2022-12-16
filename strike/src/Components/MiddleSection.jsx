import { Box, Flex,Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import { ArrowForwardIcon } from '@chakra-ui/icons'


function MiddleSection(){
    return (

        <Box bg={'#181f38'} mt={'5%'}>
            <Box width={'80%'} margin={'auto'}>
            <Flex gap={'10%'}>
            <Box color={'white'} margin={'auto'} textAlign={'left'}>
            <Text fontSize={'14px'} color={'#c1c9d8'} fontWeight={"semibold"}>HOLIDAY PROMOTION </Text>
            <Text fontSize={'4xl'} fontWeight={'bold'}>Get your free gift!</Text>
            <Text fontSize={'large'} mt={'2%'} lineHeight={'30px'}>For a limited time only, Wrike is offering a free gift to new customers! Sign up with a qualifying subscription before December 31 to claim your prize.</Text>
           <Text color={'#08cd63'} fontSize={'xl'} fontWeight={'bold'} mt={'10%'}><NavLink>Learn more <ArrowForwardIcon/> </NavLink></Text> 
            </Box>
            <Box width={'120%'}>
                <img  src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=656,dpr=1/tp/storage/uploads/24da2538-075d-4fa9-9a78-b73af61d7628/gift-by-wrike-promo-2x.png" alt="image" />
            </Box>
            </Flex>
            </Box>
        </Box>
    )
}

export default MiddleSection;