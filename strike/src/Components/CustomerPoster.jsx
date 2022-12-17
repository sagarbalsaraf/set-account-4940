import React from "react"
import { Box, Heading, Image, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { AiOutlinePlayCircle } from 'react-icons/ai';

class Question extends React.Component {
    render() {
        return <AiOutlinePlayCircle />
    }
}

function Poster() {
    return (
        <Box bg={'#0c3245'}>
            <Box width={'80%'} margin={'auto'}>
                <Box p={'4% 0%'}><Heading>Stories from our customers</Heading></Box>

                <Box bg={'#0a615a'} borderRadius={'10px'}>
                    <Flex gap={'6%'}>
                        <Box width={'180%'} pt={'0px'}>
                            <Image borderLeftRadius={'10px'} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=496,fit=crop,dpr=1/tp/storage/uploads/2fd8f120-42dc-41e0-8188-e8b527393365/rebrand-quote-slider-image-walmart.jpg" />
                        </Box>
                        <Box mt={'4%'}>
                            <Box textAlign={'left'}>
                                <Text fontSize={'4xl'}>"Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a  for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work."</Text>
                                <Text mt={'2%'} fontSize={'18px'}>Francis Lalonde, Vice President of Transportation, Walmart Canada</Text>
                            </Box>

                            <Flex pt={'8%'} gap={'10%'} fontSize={'20px'} color={'#08cf65'}>
                                <Link><Flex gap={'10px'} alignItems={'center'} _hover={{ color: "#0df479" }}><AiOutlinePlayCircle fontSize={'25px'} /><Text>Watch video</Text></Flex></Link>
                                <Text _hover={{ color: "#0df479" }}><Link>Read syneos Heath's Story  <ArrowForwardIcon /></Link></Text>

                            </Flex>

                        </Box>
                    </Flex>

                </Box>
            </Box>
            <Box width={'80%'} margin={'auto'}  p={'3% 0%'}>
                <Box width={'20%'} margin={'auto'}>
                <Flex gap={'20%'} >
                <Button _hover={{bg:'#08cf65'}} ></Button><Button _hover={{bg:'#08cf65'}}></Button><Button _hover={{bg:'#08cf65'}}></Button><Button _hover={{bg:'#08cf65'}}></Button><Button _hover={{bg:'#08cf65'}}></Button>

                </Flex>
                </Box>
                

            </Box>

        </Box>
    )
}

export default Poster