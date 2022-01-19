import NavMenu from "../Component/NavMenu"
import {Heading, Box, Text, Center, Button, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

export const AboutUs = () => {
    return (
        <div>
            <Box height='100vh' align="center" bgPosition="center"
                 bgRepeat="no-repeat" bgSize="cover">
                <NavMenu color='teal'/>
                <Box p='100px' maxW='100ch' centerContent={"true"}>
                    <Heading  m='10px' align="center" fontSize='5xl'>About Us</Heading>
                    <br/>
                    <Text fontSize='2xl' m='20px'>
                    Meditech is a consumer-based healthcare “wonder web portal" that provides consumers access to on-demand and home delivered medical products such as their monthly prescriptions. We are team of 6 passionate individuals who believes to bring pharmacies to your homes and achieve the ultimate aim of making healthcare easily accessible to all amid this grueling pandemic.                    </Text>
                    <Button m='5px' colorScheme='blue' size='lg' as={RouterLink} to='/home'>Go To Home</Button>
                </Box>
            </Box>
        </div>
    )
}