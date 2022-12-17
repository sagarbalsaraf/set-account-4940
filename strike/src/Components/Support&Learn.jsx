import { Box, Text, Flex, Image } from "@chakra-ui/react";

function SupportSection() {
    return (
        <Box bg={'#0c3245'} pt={'4%'} pb={'6%'}>

            <Box width={'80%'} margin={'auto'}>
                <Flex gap={'10%'}>
                    <Box width={'100%'} color={'white'} margin={'auto'} textAlign={'left'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>Support and Learning</Text>
                        <Text  fontSize={'large'} mt={'2%'} lineHeight={'30px'}>Wrike offers award-winning support that scales with your business. Choose the solution that caters to all your needs with 24/7 availability and upgradeable support packages.

                            If you want to maximize the utility of your work management system, Wrike offers in-depth guides and articles on the latest product features for better productivity and efficiency.</Text>
                    </Box>
                    <Box width={'120%'}>
                        <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=656,dpr=1/tp/storage/uploads/af67bde2-0417-4ebd-917e-de500cf395fb/hp-evo-support-2x.png" alt="SupportSectionImage" />
                    </Box>
                    </Flex>
            </Box>
        </Box>
    )
}

export default SupportSection;