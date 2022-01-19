import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavMenu from "../Component/NavMenu";
import {
    Heading, Box, Center, VStack, StackDivider, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Image, Text, Flex, Button, Grid
} from "@chakra-ui/react";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            totalprice: "",
            productError: ""
        }
    }

    componentDidMount() {
        this.setState({ product: this.props.location.products })
        this.setState({ totalprice: this.props.location.totalprice })
    }

    updateValue = (index, value) => {
        this.state.product[index].product_quantity = value
        this.setState({ product: this.state.product })
        this.setState({ totalprice: this.getAllPrices() })
    }

    getAllPrices = () => {
        let prices = 0
        this.state.product.forEach((row) => {
            prices += row.product_price * row.product_quantity
        })
        if (prices > 0) {
            this.setState({ productError: "" })
        } else {
            this.setState({ productError: "Cart Empty!!" })
        }
        return prices
    }

    removeItem = (index) => {
        let allProducts = this.state.product
        allProducts.splice(index, 1)
        this.setState({product: allProducts})
        this.setState({ totalprice: this.getAllPrices() })
    }

    redirectToSearchPage = (event) => {
        event.preventDefault()
        this.props.history.push({pathname: '/customer/search-product'})
    }

    getPageData = (event) => {
        event.preventDefault()
        this.props.history.push({
            pathname: '/customer/payment',
            products: this.state.product,
            receiver_name: this.props.location.receiver_name,
            receiver_address: this.props.location.receiver_address,
            receiver_phone: this.props.location.receiver_phone
        })
    }

    render() {
        const product = this.state.product
        return (
            <>
                <Box height='100vh' align="center" bgGradient='linear(to-r, green.100, pink.200)'>
                    <NavMenu color='teal' loggedIn={true} />
                    <Heading m='20px' align="center" fontSize='5xl' color='teal.700'>Order Review</Heading>
                    <Center m='20px'>

                        <Flex p='20px'>
                            <VStack>
                                <Grid p='20px' templateColumns='repeat(4, 1fr)' gap={6}>
                                    {
                                        product.map((row, index) => {
                                            return (
                                                <div>
                                                    <Box boxShadow='outline' borderRadius='lg' p='20px' bg='white'>
                                                        <VStack spacing={'5px'}>
                                                            <div>
                                                                <i class="fas fa-trash-alt" onClick={(index) => this.removeItem(index)}></i>
                                                            </div>
                                                            <Image boxSize='100px' src={row.product_image} alt={row.product_name} />
                                                            <Heading size='md'>
                                                                {row.product_name}
                                                            </Heading>
                                                            <Heading size='sm'>
                                                                ${row.product_price}
                                                            </Heading>
                                                            <Text>
                                                                {row.product_description}
                                                            </Text>
                                                            <NumberInput size='md' maxW={24} defaultValue={0} min={0}
                                                                type="number" value={row.product_quantity}
                                                                onChange={(value) => this.updateValue(index, value)}>
                                                                <NumberInputField />
                                                                <NumberInputStepper>
                                                                    <NumberIncrementStepper />
                                                                    <NumberDecrementStepper />
                                                                </NumberInputStepper>
                                                            </NumberInput>
                                                        </VStack>
                                                    </Box>
                                                </div>
                                            )
                                        })
                                    }
                                </Grid>
                            </VStack>

                            <Box boxShadow='outline' borderRadius='lg' p='20px' bg='white'>
                                <VStack spacing={'10px'}>
                                    <Heading size='lg' color='teal.700'>Current Order</Heading>
                                    <Heading size='md'>Total Price: ${this.state.totalprice}</Heading>
                                    <Button isDisabled={this.state.productError !== ""} m='5px' colorScheme='blue' size='md' onClick={this.getPageData}>Continue</Button>
                                    <Heading size='sm' color='red'>{this.state.productError}</Heading>
                                    <Button isDisabled={this.state.productError === ""} m='5px' colorScheme='blue' size='md' onClick={this.redirectToSearchPage}>Add Product To Card</Button>
                                </VStack>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </>
        )
    }
}

export default withRouter(Cart);
