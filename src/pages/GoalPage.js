import NavMenu from "../Component/NavMenu"
import {Heading, Box, Text, Center, Button, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

export const GoalPage = () => {
    return (
        <div>
            <Box height='100vh' align="center" bgPosition="center"
                 bgRepeat="no-repeat" bgSize="cover">
                <NavMenu color='teal'/>
                <Box p='100px' maxW='100ch' centerContent={"true"}>
                    <Heading  m='10px' align="center" fontSize='5xl'>We believe that healthcare should be accessible for all.</Heading>
                    <Text fontSize='2xl' m='20px'>
                        Our web app allow users to have healthcare products delivered to their door through companies offering delivery services. By leveraging technology and collaborating with partners, we hope to create a world where everyone has safe and timely access to the healthcare products they need.
                    </Text>
                    <Button m='5px' colorScheme='blue' size='lg' as={RouterLink} to='/register'>Request Delivery</Button>
                    <Button m='5px' colorScheme='blue' size='lg' as={RouterLink} to='/register'>Become a Driver</Button>
                </Box>
            </Box>
        </div>
    )
}