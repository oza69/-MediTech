import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {
    Box,
    Button,
    Center, Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack
} from "@chakra-ui/react";
import NavMenu from "../Component/NavMenu";
import {PhoneIcon} from "@chakra-ui/icons";

export class Payment extends Component {

    constructor(props) {
        super(props)
    }

    submitPayment = (event) => {
        event.preventDefault()
        let postObject = {}
        postObject['receiver_address'] = this.props.location.receiver_address;
        postObject['receiver_phone'] = this.props.location.receiver_phone;
        postObject['receiver_name'] = this.props.location.receiver_name

        axios.post('https://meditech-backend.herokuapp.com/order/save', postObject).then((response) => {
            let orderId = ""
            if (response && response.data && response.data.status === 200) {
                orderId = response.data.id
                this.props.history.push(
                    {
                        pathname: '/customer/order-success',
                        orderId: orderId
                    });
            }
        })
    };

    render() {
        return (
            <div>
                <Box height='100vh' align="center" bgGradient='linear(to-r, green.100, pink.200)'>
                    <NavMenu color='teal' loggedIn={true}/>
                    <Heading m='20px' align="center" fontSize='5xl' color='teal.700'>Payment Info</Heading>
                    <Center m='20px'>
                        <Box borderRadius='lg' w='xl' p='20px' bg='white'>
                            <Stack spacing='10px'>
                                <FormControl isRequired>
                                    <FormLabel>Cardholder name</FormLabel>
                                    <Input placeholder="Name on Card" size='md' mr='5px'/>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Card Number</FormLabel>
                                    <Input placeholder='XXXX XXXX XXXX XXXX' type="number" maxLength="16" size='md'/>
                                </FormControl>
                                <Flex>
                                    <FormControl isRequired>
                                        <FormLabel>Expiry date</FormLabel>
                                        <Input placeholder='MMYY' type="number" size='md' maxLength="4" mr='5px' />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Security Code</FormLabel>
                                        <Input placeholder='XXX' size='md' type="number" maxLength="1" ml='5px'/>
                                    </FormControl>
                                </Flex>
                                <Button m='5px' colorScheme='blue' size='md' type='submit'
                                        onClick={this.submitPayment}>Continue</Button>
                                <Button m='5px' colorScheme='gray' onClick={() => this.props.history.goBack()} size='md'>Back</Button>
                            </Stack>
                        </Box>
                    </Center>
                </Box>
            </div>
            /*<div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.submitPayment}>
                        <img
                            src="https://static.thenounproject.com/png/1530786-200.png"
                            alt=""
                            style={{
                                width: "80px",
                                height: "80px",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        />

                        <h3>Payment</h3>
                        <div className="form-group">
                            <div class="container">
                                <div class="row" style={{fontWeight: "bold"}}>
                                    <div class="col">
                                        <label>Name on card</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter name"
                                            required
                                        />
                                    </div>
                                    <div class="col">
                                        <label>Card Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter cardnumber"
                                            required
                                        />
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaW-awAWbkIj0kt7d1oy1-oFsI4FmwGmoyw&usqp=CAU"
                                            className="show-password-icon"
                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div class="row" style={{fontWeight: "bold"}}>
                                    <div class="col">
                                        <label>Expiry Date</label>
                                    </div>
                                    <div class="col">
                                        <label>CVV</label>
                                    </div>
                                </div>
                                <br></br>
                                <div
                                    class="row"
                                    style={{
                                        fontWeight: "bold",
                                        marginTop: "-15px",
                                        fontSize: "12px",
                                    }}
                                >
                                    <div class="col">
                                        <label>Month</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="MM"
                                            required
                                        />
                                    </div>
                                    <div class="col">
                                        <label>Year</label>
                                        <input
                                            className="form-control"
                                            type="number" placeholder="YYYY"
                                            required
                                        />
                                    </div>
                                    <div class="col-6">
                                        <label></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Cvv"
                                            required
                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div class="row">
                                    <div class="col">
                                        <button
                                            type="submit"
                                            onClick={this.submitPayment}
                                            className="btn btn-block"
                                            style={{
                                                background: "#000000",
                                                color: "#FFFFFF",
                                                width: "100%",
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>*/
        )
    }
}

export default withRouter(Payment);
