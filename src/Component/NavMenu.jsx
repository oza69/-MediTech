import React, { useState } from 'react';
import {
    Flex,
    Box,
    Button,
    Spacer,
    Heading,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

function NavMenu(props) {

    const Buttons = () => {
        if (props.isDasher) {
            return (
                <Box>
                    <Button as={RouterLink} to='/dasher/dasher-orders' colorScheme='teal' mr='4'>Active Orders</Button>
                    <Button as={RouterLink} to='/dasher/past-orders' colorScheme='teal'>Past Orders</Button>
                </Box>
            )
        } else {
            return (
                <Box>
                    <Button as={RouterLink} to='/' colorScheme='teal' mr='4'>Home</Button>
                    <Button as={RouterLink} to='/goal' colorScheme='teal' mr='4'>Our Goal</Button>
                    <Button as={RouterLink} to='/meetourteam' colorScheme='teal'>Meet Our Team</Button>
                </Box>
            )
        }
    }

    return (
        <div>
            <Flex p='20px'>
                <Box p='2' mr='20px'>
                    <Heading color={props.color} size='md'>Meditech: Healthcare for All</Heading>
                </Box>
                {props.loggedIn && !props.isDasher ? <></> : <Buttons />}
                <Spacer />
                <Box>
                    {
                        props.loggedIn
                        ?
                        <Button as={RouterLink} to='/' colorScheme='teal'>Sign out</Button>
                        :
                        <Box>
                            <Button as={RouterLink} to='/register' colorScheme='teal' mr='4'>Sign Up</Button>
                            <Button as={RouterLink} to='/login' colorScheme='teal'>Log in</Button>
                        </Box>
                    }
                </Box>
            </Flex>
        </div>
    );
}

export default NavMenu