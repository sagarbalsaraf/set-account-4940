import { Text, Box, Grid, Input, Button, Flex } from "@chakra-ui/react";

import React from "react"
import { AiOutlinePlayCircle } from 'react-icons/ai';
class Question extends React.Component {
    render() {
        return <AiOutlinePlayCircle />
    }
}
function BgImage() {
    return (
        <Box bgColor={'#181f38'}>
            <Box margin={'auto'} width={'80%'} fontFamily={'TT_Norms_Pro,-apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Roboto,Oxygen-Sans,Fira Sans,Droid Sans,Ubuntu,Cantarell,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;'}>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <Box textAlign={'left'}>
                        <Box color={'white'} mt={'6%'} fontSize={'50px'} fontWeight={'extrabold'}>
                            <Text >Remove barriers,</Text>
                            <Text>find clarity,</Text>
                            <Text>exceed goals</Text>
                        </Box>
                        <Text noOfLines={[1, 2]} fontSize={'18px'} fontWeight={'400'}>Anything is possible with the most powerful work management software at your fingertips.</Text>
                        <Input placeholder='Enter your business email' bg={'white'} color={'black'}  p={'4%'} mt={'5%'} width={'60%'} type="email" />
                        <Button color={'white'} bg={'#08cf65'} fontSize={'18px'} p={'4.3%'} width={'30%'} ml={'5%'} _hover={{bg:'#007860'}}>Get Started</Button>
                        <Flex mt={'2%'} fontSize={'larger'} gap={'10px'} alignItems={'center'}><AiOutlinePlayCircle fontSize={'larger'} color={'#08cf65'} /><Text color={'#08cf65'}>Explore our new platform</Text></Flex>
                    </Box>

                    <Box>
                        <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=719,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png" alt="bgImage" />
                    </Box>
                </Grid>
            </Box>
            <Box p={'5%'} bgColor={'#ebf5f3'} >
                <Box width={'80%'} margin={'auto'}>
                    <Flex gap={'4%'} >
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg" alt="google" />
                        </Box>
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg" alt="syneos" />
                        </Box>
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg" alt="lyft" />
                        </Box>
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg" alt="seimens" />
                        </Box>
                        <Box width={'18%'} margin={'auto'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg" alt="nicklodeon" />
                        </Box>
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg" alt="ogilvy" />
                        </Box>
                        <Box>
                            <img src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg" alt="slowflake" />
                        </Box>
                    </Flex>
                    <Box mt={'2%'}><Text fontWeight={'medium'} fontSize={'14px'} color={'grey'}>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text></Box>
                    <Box mt={'9%'}><Text fontWeight={'bold'} fontSize={'4xl'} color={'black'}>Transform the way your teams work</Text></Box>
                    <Box mt={'3%'}><Text margin={'auto'} width={'70%'}  fontSize={'18px'} color={'black'}>Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Text></Box>
                </Box>

            </Box>
        </Box>
    )
}

export default BgImage;