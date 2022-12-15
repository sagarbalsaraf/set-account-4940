import {Text, Box, Grid } from "@chakra-ui/react";

function BgImage() {
    return (
        <Box>
             <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <Box >
                <Text>Remove barriers,</Text>
                <Text> find clarity,</Text>
                <Text> exceed goals</Text>
                
            </Box>
            <Box>
                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=719,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png" alt="bgImage" />
            </Box>
            </Grid>
        </Box>
    )
}

export default BgImage;