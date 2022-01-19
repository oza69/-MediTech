import React, { Component } from 'react'
import { withRouter, Link as RouterLink } from 'react-router-dom';
import axios from 'axios'
import backgroundImage from "../Images/landing_page_background_2.jpg";
import NavMenu from "../Component/NavMenu";
import {Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack} from "@chakra-ui/react";

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            loginError: '',
            isCustomer: false,
            isLoading: false
        }
    }

    componentDidMount() {
        let isCustomer = this.props && this.props.location && this.props.location.state && this.props.location.state.isCustomer
        this.setState({isCustomer: isCustomer})
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateForm = (event) => {
        let isValid = true
        if (!this.validateEmail(event)) {
            isValid = false
        }
        if (!this.validatePassword(event)) {
            isValid = false
        }
        return isValid
    }

    validateEmail = (event) => {
        let isValid = true
        if (!this.state.email) {
            this.setState({ emailError: "Email is required" })
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
        } else {
            this.setState({ passwordError: "" })
        }
        return isValid
    }

    getPostData() {
        let postData = {}
        postData.emailID = this.state.email
        postData.password = this.state.password
        return postData
    }

    handleLogin = (event) => {
        event.preventDefault();
        const isValid = this.validateForm(event)
        if (isValid) {
            this.setState({isLoading: true})
            axios.post('https://meditech-backend.herokuapp.com/login/user', this.getPostData()).then((response) => {
                if (response && response.data && response.data.status === 200) {
                    localStorage.setItem('emailId', this.state.email)
                    if (this.state.isCustomer) {
                        this.props.history.push({pathname: '/customer/search-product'})
                    } else {
                        this.props.history.push({pathname: '/dasher/dasher-orders'})
                    }
                }
            }).catch((error) => {
                this.setState({ loginError: "Invalid credentials!" })
                console.log(error)
            })
        }
    }

    handleRegistration = (event) => {
        this.props.history.push({pathname: '/register'})
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
                                <Heading align="center" fontSize='4xl' color='teal.700'>{this.state.isCustomer ? "Customer Login" : "Driver Login"}</Heading>
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder="Email" size='md' mr='5px'
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.onValueChange}
                                           isInvalid={this.state.emailError}
                                           onBlur={this.validateEmail}/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' type="password" maxLength="16" size='md'
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onValueChange}
                                           isInvalid={this.state.passwordError}
                                           onBlur={this.validatePassword}/>
                                </FormControl>
                                <Button m='5px'
                                        colorScheme='blue'
                                        size='md'
                                        type='submit'
                                        isLoading={this.state.isLoading}
                                        onClick={this.handleLogin}>
                                    Login
                                </Button>
                                {this.state.isCustomer ? <Button onClick={() => {this.props.history.push({pathname: '/register'}, {emailId: this.state.email})}} m='5px' colorScheme='teal' size='md'>Sign up</Button> : <></>}
                                <Button m='5px' colorScheme='gray' onClick={() => this.props.history.goBack()} size='md'>Back</Button>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </div>
            /*<div className="page-container">
                <div className="login-form-container">
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email" className="form-control-group">
                                <Form.Label className="required">Email</Form.Label>
                                <Form.Control type="email" name="email"
                                    value={this.state.email}
                                    onChange={this.onValueChange}
                                    isInvalid={this.state.emailError}
                                    onBlur={this.validateEmail} />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.emailError}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password" className="form-control-group">
                                <Form.Label className="required">Password</Form.Label>
                                <Form.Control type="password" name="password"
                                    value={this.state.password}
                                    onChange={this.onValueChange}
                                    isInvalid={this.state.passwordError}
                                    onBlur={this.validatePassword} />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.passwordError}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Col xs={12}>
                                    <span className="invalid-credentails">{this.state.loginError}</span>
                                </Col>
                                <Col xs={12}>
                                    <Row>
                                        <Col>
                                            <Button className="login-button" variant="primary" type="submit" onClick={this.handleLogin}>
                                                Login
                                            </Button>
                                        </Col>
                                        {
                                            this.state.isCustomer == true ? (
                                                <Col>
                                                    <Button className="register-button" variant="outline-dark" type="submit" onClick={this.handleRegistration}>
                                                        Register
                                                    </Button>
                                                </Col>
                                            ) : (<div></div>)
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>*/
        )
    }
}

export default withRouter(Login)
