import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import backgroundImage from "../Images/landing_page_background_2.jpg";
import NavMenu from "../Component/NavMenu";
import {Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack} from "@chakra-ui/react";
//import logo from "./Sign.jpg";

export class ContactForm extends Component {
    

    render() {
        return (
            <div>
            <Box height='100vh' align="center" bgImage={backgroundImage} bgPosition="center"
                 bgRepeat="no-repeat" bgSize="cover">
                <NavMenu color='white' loggedIn={false}/>
                <Center m='20px'>
                    <Box borderRadius='lg' w='xl' p='20px' bg='white'>
                        <Stack spacing='10px'>
                            <Heading align="center" fontSize='4xl' color='teal.700'>Need Help?</Heading>
                            <p>Our specialists will contact you for details and clarification. We’ll be glad to help you find the course.</p>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input placeholder="Name" size='md' mr='5px'
                                       name="Name"
                                       />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder='Email' type="email" maxLength="16" size='md'
                                       name="Email"
                                       />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Query</FormLabel>
                                <Input placeholder='Query' type="text" maxLength="16" size='md'
                                       name="Query"
                                       />
                            </FormControl>
                            <Button m='5px' colorScheme='blue' size='md'>Submit Form</Button>
                        </Stack>
                    </Box>
                </Center>
            </Box>
        </div>
    );
}
};
export default withRouter(ContactForm)