import { Box, Heading, Text, Grid, Image, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"


function MiddleCards(){
    return (
            <Box width={'80%'} margin={'auto'} pb={'6%'}>
                <Box color={'black'} width={'80%'} margin={'auto'} p={'4%'}>
                    <Heading >Integrate apps with just a few clicks</Heading>
                    <Text mt={'4%'} fontSize={'22px'}>Connect your existing apps and workflows with pre-made integrations available for 400+ popular apps, plus custom integrations for more advanced users.</Text>
                </Box>

                <Box color={'black'} pb={'4%'}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-microsoft.svg'}/>
                            <Text>Connect to Microsoft’s powerful suite of workplace productivity tools, from Outlook to Excel.</Text>
                        </Box>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-google.svg'}/>
                            <Text>Familiar with Gmail, Google Drive, or Google Calendar? Wrike integrates with them all.</Text>
                        </Box>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-adobe.svg'}/>
                            <Text>Proof assets for Adobe Creative Cloud and Adobe Experience Manager without leaving Wrike.</Text>
                        </Box>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-slack.svg'}/>
                            <Text>Ever wanted to turn an informal Slack chat into a structured task? It’s easy with Wrike.</Text>
                        </Box>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-salesforce.svg'}/>
                            <Text>Give your account teams 100% visibility into client projects with our Salesforce integration.</Text>
                        </Box>
                        <Box bg={'white'} color={'black'} borderRadius={'10px'} fontSize={'18px'} p={'8%'} textAlign={'left'} _hover={{bg:"#007861", color:'white'}}>
                            <Image mb={'6%'} ml={'4%'} src={'https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-zoom.svg'}/>
                            <Text>Want to manage tasks while on a Zoom call? All you need is Actionable Meetings by Wrike.</Text>
                        </Box>
                    </Grid>


                </Box>

                <Text mb={'8%'} fontWeight={'bold'} fontSize={'20px'} color={'#007860'}><NavLink>See all integration  <ArrowForwardIcon/></NavLink></Text>
                <Button width={'18%'} color={'black'} bg={'#ffc000'} fontSize={'2xl'} p={'3%'} _hover={{ bg: '#ffa200' }}>Get started</Button>
            </Box>
    )
}

export default MiddleCards