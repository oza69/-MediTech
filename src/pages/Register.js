import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from "axios"
import {
    Box,
    Center,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Flex,
    FormErrorMessage
} from "@chakra-ui/react";
import backgroundImage from "../Images/landing_page_background_2.jpg";
import NavMenu from "../Component/NavMenu";

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            phone: '',
            username: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            phoneError: '',
            registrationError: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Regex From: "How to create a regex for accepting only alphanumeric characters?", Stack Overflow, 2021. [Online]. 
    // Available: https://stackoverflow.com/questions/5988228/how-to-create-a-regex-for-accepting-only-alphanumeric-characters. [Accessed: 31- May- 2021].
    onlyAlphaNumeric = (value) => {
        return new RegExp(/^[a-zA-Z0-9]*$/g).test(value)
    }

    // Regex From: A. Gittemeier, 
    // "Regex to accept alphanumeric and some special character in Javascript?", Stack Overflow, 2021. [Online]. 
    // Available: https://stackoverflow.com/questions/17439917/regex-to-accept-alphanumeric-and-some-special-character-in-javascript. [Accessed: 31- May- 2021].
    alphaNumericAndSpecialCharacters = (value) => {
        return new RegExp(/^[A-Za-z0-9_@./#&+-]*$/g).test(value)
    }

    // Regex From: "Checking for valid email address using regular expressions in Java", Tutorialspoint.com, 2021. [Online]. 
    // Available: https://www.tutorialspoint.com/checking-for-valid-email-address-using-regular-expressions-in-java. [Accessed: 31- May- 2021].
    validateEmailFormat = (value) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value)
    }

    validateForm = (event) => {
        let isValid = true
        if (!this.validateFirstName(event)) {
            isValid = false
        }
        if (!this.validateLastName(event)) {
            isValid = false
        }
        if (!this.validateEmail(event)) {
            isValid = false
        }
        if (!this.validatePasswordGroup(event)) {
            isValid = false
        }
        return isValid
    }

    validateFirstName = (event) => {
        let isValid = true
        if (!this.state.firstName) {
            this.setState({ firstNameError: "First Name is required" })
            isValid = false
        } else if (!this.onlyAlphaNumeric(this.state.firstName)) {
            this.setState({ firstNameError: "First Name should be alpha-numeric" })
            isValid = false
        } else {
            this.setState({ firstNameError: '' })
        }
        return isValid;
    }

    validateLastName = (event) => {
        let isValid = true
        if (!this.state.lastName) {
            this.setState({ lastNameError: "Last Name is required" })
            isValid = false
        } else if (!this.onlyAlphaNumeric(this.state.lastName)) {
            this.setState({ lastNameError: "Last Name should be alpha-numeric" })
            isValid = false
        } else {
            this.setState({ lastNameError: '' })
        }
        return isValid;
    }

    validateEmail = (event) => {
        let isValid = true
        if (!this.state.emailId) {
            this.setState({ emailError: "Email is required" })
            isValid = false
        } else if (!this.validateEmailFormat(this.state.emailId)) {
            this.setState({ emailError: "Email format wrong" })
            isValid = false
        } else {
            this.setState({ emailError: '' })
        }
        return isValid
    }

    validatePassword = (event) => {
        let isValid = true
        if (!this.state.password) {
            this.setState({ passwordError: "Password is required" })
            isValid = false
        } else if (!this.alphaNumericAndSpecialCharacters(this.state.password)) {
            this.setState({ passwordError: "Password can be alpha-numeric and special characters" })
            isValid = false
        } else if (this.state.password.length < 8) {
            this.setState({ passwordError: "Password should be at least 8 characters long" })
            isValid = false
        } else {
            this.setState({ passwordError: "" })
        }
        return isValid
    }

    validateConfirmPassword = (event) => {
        let isValid = true
        if (!this.state.confirmPassword) {
            this.setState({ confirmPasswordError: "Confirm Password is required" })
            isValid = false
        } else if (this.state.confirmPassword !== this.state.password) {
            this.setState({ confirmPasswordError: "Password and Confirm Password does not match" })
            isValid = false
        } else {
            this.setState({ confirmPasswordError: "" })
        }
        return isValid
    }

    validatePasswordGroup = (event) => {
        let isValid = true
        if (!this.validatePassword(event)) {
            isValid = false
        }

        if (!this.validateConfirmPassword(event)) {
            isValid = false
        }

        return isValid
    }

    getPostObject() {
        let postObject = {}
        postObject['emailID'] = this.state.emailId
        postObject['password'] = this.state.password
        postObject['username'] = this.state.firstName + " " + this.state.lastName
        postObject['phone'] = this.state.phone
        return postObject
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm(event)
        if (isValid) {
            axios.post('https://meditech-backend.herokuapp.com/register', this.getPostObject()).then((response) => {
                console.log(response)
                if (response && response.data && response.data.status == 200) {
                    this.props.history.push({ pathname: '/login' }, {
                        isCustomer: true
                    })
                } else if (response && response.data && response.data.status == 400) {
                    this.setState({ registrationError: response.data.message })
                }
                
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div>
                <Box height='100vh' align="center" bgImage={backgroundImage} bgPosition="center"
                     bgRepeat="no-repeat" bgSize="cover">
                    <NavMenu color='white' loggedIn={false}/>
                    <Center m='20px'>
                        <Box borderRadius='lg' w='xl' p='20px' bg='white'>
                            <Stack spacing='10px'>
                                <Heading align="center" fontSize='4xl' color='teal.700'>Customer Registration</Heading>
                                <Flex pr='10px'>
                                    <FormControl isRequired isInvalid={this.state.firstNameError} mr='5px'>
                                        <FormLabel>First Name</FormLabel>
                                        <Input placeholder="First name" size='md'
                                               name="firstName"
                                               value={this.state.firstName}
                                               onChange={this.onValueChange}
                                               onBlur={this.validateFirstName}/>
                                        <FormErrorMessage>{this.state.firstNameError}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isRequired isInvalid={this.state.lastNameError} ml='5px'>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input placeholder="Last name" size='md'
                                               name="lastName"
                                               value={this.state.lastName}
                                               onChange={this.onValueChange}
                                               onBlur={this.validateLastName}/>
                                        <FormErrorMessage>{this.state.lastNameError}</FormErrorMessage>
                                    </FormControl>
                                </Flex>
                                <FormControl isRequired isInvalid={this.state.emailError}>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder="Email" size='md'
                                           name="emailId"
                                           value={this.state.emailId}
                                           onChange={this.onValueChange}
                                           onBlur={this.validateEmail}/>
                                    <FormErrorMessage>{this.state.emailError}</FormErrorMessage>
                                </FormControl>
                                <Flex pr='10px'>
                                <FormControl isRequired isInvalid={this.state.passwordError} mr='5px'>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' type="password" size='md'
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onValueChange}
                                           onBlur={this.validatePasswordGroup}/>
                                    <FormErrorMessage>{this.state.passwordError}</FormErrorMessage>
                                </FormControl>
                                <FormControl isRequired isInvalid={this.state.confirmPasswordError} ml='5px'>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input placeholder='Password' type="password" size='md'
                                           name="confirmPassword"
                                           value={this.state.confirmPassword}
                                           onChange={this.onValueChange}
                                           onBlur={this.validatePasswordGroup}/>
                                    <FormErrorMessage>{this.state.confirmPasswordError}</FormErrorMessage>
                                </FormControl>
                                </Flex>
                                <FormControl isRequired>
                                    <FormLabel>Phone</FormLabel>
                                    <Input placeholder='Phone' type="number" maxLength="10" size='md'
                                           name="phone"
                                           onChange={this.onValueChange}
                                           value={this.state.phone}/>
                                </FormControl>
                                <Button onClick={this.handleSubmit} m='5px' type='submit' colorScheme='teal' size='md'>Register</Button>
                                <Button m='5px' colorScheme='gray' onClick={() => this.props.history.goBack()} size='md'>Back</Button>
                                <Heading size='sm' color='red'>{this.state.registrationError}</Heading>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </div>
        )
    }
}

export default withRouter(Register)
