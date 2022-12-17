import { Box, Text, Flex, Image, Button, Heading } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import MiddleCards from "./MiddleCards";


function Middle2() {

    return (
        <Box>
            <Box bg={'#0c3245'} p={'4%'}>
                <Box width={'80%'} margin={'auto'} >
                    <Text width={'50%'} margin={'auto'} fontSize={'4xl'} fontWeight={'bold'}>
                        The Most Versatile Work Management Platform™
                    </Text>
                    <Text width={'70%'} margin={'auto'} fontSize={'19px'} pt={'3%'} pb={'4%'}>
                        Maximize your team's performance, accelerate growth, and improve customer experience with Wrike's robust and extensive features.
                    </Text>
                </Box>

                <Box >
                    <Box width={'45%'} margin={'auto'} >
                        <Flex gap={'5%'} margin={'auto'} fontSize={'18px'} fontWeight={'bold'} borderBottom={'1px solid #08cf65'} paddingBottom={'16px'}>
                            <Text _hover={{ color: "#08cf65" }}><Link>Dashboards</Link></Text>
                            <Text _hover={{ color: "#08cf65" }}><Link>Cross-tagging</Link></Text>
                            <Text _hover={{ color: "#08cf65" }}><Link>Integrations</Link></Text>
                            <Text _hover={{ color: "#08cf65" }}><Link>Proofing</Link></Text>
                            <Text _hover={{ color: "#08cf65" }}><Link>Gants charts</Link></Text>
                        </Flex>
                    </Box>
                    <Box width={'90%'} margin={'auto'} mt={'4%'}>

                        <Flex gap={'6%'}>
                            <Box textAlign={'left'} margin={'auto'}>
                                <Heading>Customizable dashboards</Heading>
                                <Text fontSize={'18px'} mt={'8%'}>Never miss a task with personalized dashboards. See what your team is working on in a comprehensive view and share progress across the organization.</Text>
                                <Text fontSize={'18px'} mt={'8%'}>Get a detailed overview of workloads, pin important to-dos, follow important tasks, and choose exactly what you want to see to keep a close eye on progress.</Text>
                                <Text mt={'8%'} fontSize={'20px'} color={"#08cf65"}><Link>Learn more <ArrowForwardIcon /></Link></Text>
                            </Box>
                            <Box width={'160%'}>
                                <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png" />
                            </Box>
                        </Flex>

                    </Box>

                    <Button width={'16%'} mt={'6%'} color={'black'} bg={'#ffc000'} fontSize={'2xl'} p={'2.5%'} _hover={{ bg: '#ffa200' }}>Get started</Button>
                </Box>

            </Box>

            <Box bg={'white'} pt={'5%'}>
                <Box width={'80%'} margin={'auto'} >
                    <Flex gap={'10%'}>
                        <Box color={'white'} margin={'auto'} textAlign={'left'}>
                            <Text fontSize={'14px'} color={'#6780a9'} fontWeight={"semibold"}>BE THE MASTER OF YOUR DATA</Text>
                            <Text fontSize={'3xl'} color={'black'} fontWeight={'bold'}>Robust, industry-leading security</Text>
                            <Text color={'#6780a9'} fontSize={'large'} mt={'2%'} lineHeight={'30px'}>Ensure peace of mind for your organization with Wrike’s enterprise-grade security, including user authentication, role-based access control, and 99.9% uptime.</Text>
                            <Text mt={'4%'} fontSize={'large'} color={'#6780a9'}>Add an extra layer of security with the Wrike Lock add-on. Own and manage your encryption keys for maximum control of your cloud data.</Text>
                            <Text color={'#007860'} fontSize={'xl'} fontWeight={'bold'} mt={'10%'}><NavLink>Be secure with Wrike<ArrowForwardIcon /> </NavLink></Text>
                        </Box>
                        <Box width={'170%'}>
                            <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/46b5c5fb-dfa2-4aae-a1d0-3e5c7220944c/rebrand-screenshot-lock-scheme-white.png" alt="image" />
                        </Box>
                    </Flex>
                </Box>
                <Button width={'14%'} m={'5% 0%'} color={'white'} bg={'#08cf65'} fontSize={'2xl'} p={'2.3%'} _hover={{ bg: '#04ba71' }}>Get started</Button>
            </Box>
            <MiddleCards/>

        </Box>

    )
}

export default Middle2