import React, {Component} from 'react'
import "./Address.css";
import {withRouter} from 'react-router-dom';
import NavMenu from "../../Component/NavMenu";
import {
    Box,
    Center,
    Heading,
    Input,
    Stack,
    Button,
    InputGroup,
    InputLeftElement,
    FormControl,
    FormLabel
} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons"

export class Address extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            address1: '',
            address2: '',
            postalcode: '',
            city: '',
            province: '',
            phonenumber: '',
            fnameError: '',
            lnameError: '',
            address1Error: '',
            postalcodeError: '',
            cityError: '',
            provinceError: '',
            phoneError: '',
            receiver_address: '',
            receiver_name: '',
            receiver_phone: ''
        };
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    getDeliveryAddressData = (event) => {
        event.preventDefault()
        let address = this.state.address1 + "\n" + this.state.address2 + "\n" + this.state.city + "," + this.state.province + " - " + this.state.postalcode
        let name = this.state.fname + " " + this.state.lname
        this.props.history.push({
            pathname: '/customer/order-review',
            products: this.props.location.products,
            totalprice: this.props.location.totalprice,
            receiver_name: name,
            receiver_address: address,
            receiver_phone: this.state.phonenumber
        })
    }

    validate = (event) => {
        if (event.target.value === "") {
            let controlName = event.target.name + 'Error'
            this.setState({[controlName]: "Invalid"})
        }
    }

    render() {
        return (
            <div>
                <Box height='100vh' align="center" bgGradient='linear(to-r, green.100, pink.200)'>
                    <NavMenu color='teal' loggedIn={true}/>
                    <Heading m='20px' align="center" fontSize='5xl' color='teal.700'>Delivery Info</Heading>
                    <Center m='20px'>
                        <Box borderRadius='lg' w='xl' p='20px' bg='white'>
                            <Stack spacing='10px'>
                                <FormControl isRequired>
                                    <FormLabel>Full name</FormLabel>
                                    <InputGroup>
                                        <Input placeholder='First Name' size='md' value={this.state.fname}
                                               name="fname" onChange={event => this.onValueChange(event)} mr='5px'/>
                                        <Input placeholder='Last Name' size='md' value={this.state.lname}
                                               name="lname" onChange={event => this.onValueChange(event)} ml='5px'/>
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Delivery address</FormLabel>
                                    <Input placeholder='Address' size='md' value={this.state.address1}
                                           name="address1" onChange={event => this.onValueChange(event)}/>
                                </FormControl>
                                <InputGroup>
                                    <Input placeholder='City' size='md' mr='5px' value={this.state.city}
                                           name="city" onChange={event => this.onValueChange(event)}/>
                                    <Input placeholder='Province' size='md' ml='5px' mr='5px'
                                           value={this.state.province}
                                           name="province" onChange={event => this.onValueChange(event)}/>
                                    <Input placeholder='Postal Code' size='md' ml='5px' value={this.state.postalcode}
                                           name="postalcode" onChange={event => this.onValueChange(event)}/>
                                </InputGroup>
                                <FormLabel>Phone</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<PhoneIcon color='gray.300'/>}
                                    />
                                    <Input type='tel' placeholder='Phone number' size='md'
                                           value={this.state.phonenumber}
                                           name="phonenumber" onChange={event => this.onValueChange(event)}/>
                                </InputGroup>
                                <Button m='5px' colorScheme='blue' size='md' type='submit'
                                        onClick={this.getDeliveryAddressData}>Continue</Button>
                                <Button m='5px' colorScheme='gray' size='md' onClick={() => this.props.history.goBack()}>Back</Button>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </div>
            /*<div className="address-page">
              <div className="address-page-container">
                <div className="address-page-content">
                  <Form onSubmit={this.getDeliveryAddressData}>
                    Delivery Address
                    <Form.Group controlId="fname" className="form-control-group">
                      <Form.Label className="required">First Name</Form.Label>
                      <Form.Control type="text" name="fname" className="address-form-control"
                        value={this.state.fname}
                        onChange={this.onValueChange}
                        isInvalid={this.state.fnameError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.fnameError}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="lname" className="form-control-group">
                      <Form.Label className="required">Last Name</Form.Label>
                      <Form.Control type="text" name="lname" className="address-form-control"
                        value={this.state.lname}
                        onChange={this.onValueChange}
                        isInvalid={this.state.lnameError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.lnameError}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="address1" className="form-control-group">
                      <Form.Label className="required">Address 1</Form.Label>
                      <Form.Control type="text" name="address1" className="address-form-control"
                        value={this.state.address1}
                        onChange={this.onValueChange}
                        isInvalid={this.state.address1Error}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.address1Error}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="address2" className="form-control-group">
                      <Form.Label className="required">Address 2</Form.Label>
                      <Form.Control type="text" name="address2" className="address-form-control"
                        value={this.state.address2}
                        onChange={this.onValueChange} />
                    </Form.Group>

                    <Form.Group controlId="postalcode" className="form-control-group">
                      <Form.Label className="required">Postal Code</Form.Label>
                      <Form.Control type="text" name="postalcode" className="address-form-control"
                        value={this.state.postalcode}
                        onChange={this.onValueChange}
                        isInvalid={this.state.postalcodeError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.postalcodeerror}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="city" className="form-control-group">
                      <Form.Label className="required">City</Form.Label>
                      <Form.Control type="text" name="city" className="address-form-control"
                        value={this.state.city}
                        onChange={this.onValueChange}
                        isInvalid={this.state.cityError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.cityError}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="province" className="form-control-group">
                      <Form.Label className="required">Province</Form.Label>
                      <Form.Control type="text" name="province" className="address-form-control"
                        value={this.state.province}
                        onChange={this.onValueChange}
                        isInvalid={this.state.provinceError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.provinceError}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="phone" className="form-control-group">
                      <Form.Label className="required">Phone Number</Form.Label>
                      <Form.Control type="number" name="phone" className="address-form-control"
                        value={this.state.phone}
                        onChange={this.onValueChange}
                        isInvalid={this.state.phoneError}
                        onBlur={this.validate} />
                      <Form.Control.Feedback type="invalid">
                        {this.state.phoneError}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div>
                      <Button variant="outline-primary" className="button-accept" onClick={this.getDeliveryAddressData}>Next</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>*/
        );
    }
}

export default withRouter(Address);