import React, { Component } from 'react';
import NavMenu from "../Component/NavMenu"
import { withRouter } from 'react-router-dom';
import { Heading, Text, Box, Button, Spacer } from '@chakra-ui/react'
import backgroundImage from '../Images/landing_page_background_2.jpg'
import { Link as RouterLink } from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props)
    }

    loginCustomer = () => {
        this.props.history.push({ pathname: '/login' }, {
            isCustomer: true
        })
    }

    loginDasher = () => {
        this.props.history.push({ pathname: '/login' }, {
            isCustomer: false
        })
    }

    contactForm = () => {
        this.props.history.push('/contactform')
    }

    meetTeam = () => {
        this.props.history.push({ pathname: '/meetourteam' }, {
            isCustomer: false
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Box height='100vh' align="center" bgImage={backgroundImage} bgPosition="center"
                    bgRepeat="no-repeat" bgSize="cover">
                    <NavMenu color='white' loggedIn={false} />
                    <Box color='white' borderRadius='lg' mt='200px' ml='10px' mr='10px' p='20px'>
                        <Heading m='10px' align="center" fontSize='5xl'>Accessible Healthcare Products for All</Heading>
                        <Heading m='10px' align="center" size='md'>
                            We aim to create a better infrastructure to distribute medicines and get it in the hands of someone who needs it
                        </Heading>
                    </Box>
                    <Spacer />
                    <Box p='20px'>
                        <Button m='5px' colorScheme='blue' size='lg' onClick={this.loginCustomer}>Request Delivery</Button>
                        <Button m='5px' colorScheme='teal' size='lg' onClick={this.loginDasher}>Sign up as a Driver</Button>
                    </Box>
                </Box>
                <Box align="center" bgGradient='linear(to-r, teal.100, green.100)' bgPosition="center">
                    <Box p='100px' maxW='100ch' centerContent={"true"}>
                        <Heading m='10px' align="center" fontSize='5xl'>About Us</Heading>
                        <Text fontSize='2xl' m='20px'>
                            We aim to deliver prescribed medications from manufacturers to different sets of customer groups (i.e., from hospitals and pharmacies). The proposed solution is similar to delivering orders that are placed on e-commerce websites where one of the logistics carriers would deliver it to your doorstep. We will be providing a platform that will help manufacturers and distributors interconnect with the delivery services to provide vaccines and health care medicines to hospitals and pharmacies, then ultimately patients by leveraging the already existing delivery infrastructure of food delivery.
                        </Text>
                    </Box>
                    <Box>
                        <Heading m='10px' align="center" fontSize='5xl'>Discreet Packaging</Heading>
                        <Text fontSize='2xl' m='10px'>
                            Your privacy is prominent. Therefore we send your medication inside a plain delivery box so no one will know what's inside.
                        </Text>
                    </Box>
                    <br /><br /><br />
                    <Box>
                        <Heading m='10px' align="center" fontSize='5xl'>Pricing</Heading>
                        <Text fontSize='2xl' m='10px'>
                            Each drug have different price. 
                        </Text>
                        <Button m='5px' colorScheme='blue' size='lg' as={RouterLink} to='/register'>Click here to start</Button>
                        
                    </Box>
                    <br /><br /><br />
                    <Box>
                        <Heading m='10px' align="center" fontSize='5xl'>Contact Us</Heading>
                        <Text fontSize='2xl' m='20px'>
                            Meditech
                            <br />
                            meditech@dal.ca
                            <br />
                            +1 (902)-123-0009
                            <br />
                            6050 University Ave, Halifax, NS B3H 4R2
                        </Text>
                        <Button m='5px' colorScheme='teal' size='lg' onClick={this.contactForm}>Contact Form</Button>
                    </Box>
                    <br /><br /><br /><br /><br /><br />
                </Box>
            </div>
        )
    }
}

export default withRouter(LandingPage);
