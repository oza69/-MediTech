import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import NavMenu from "../Component/NavMenu"
import {
    Heading,
    Box,
    Text,
    Grid,
    VStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex,
    Center,
    Button,
    Input,
    InputGroup,
    InputLeftElement, Image
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"
import "./ProductDetails.css"
export class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            searchKey: '',
            totalprice: 0,
            productError: ""
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    searchKeyChange = (event) => {
        this.onValueChange(event)
        this.filterData(event)
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        this.setState({totalprice: this.getAllPrices()})
        this.setState({
            products: [
                {
                    "_id":"61ad00c7beeb0cf98844706d",
                    "product_id":"1",
                    "product_name":"crocin",
                    "product_description":"fever",
                    "product_price":"20",
                    "product_address":"shoppers drug mart",
                    "product_image": require("../Images/Products/61ad00c7beeb0cf98844706d.png").default,
                    "product_quantity": 0
                },
                {
                    "_id":"61ad0117beeb0cf98844706e",
                    "product_id":"2",
                    "product_name":"disprin",
                    "product_description":"headache",
                    "product_price":"10",
                    "product_address":"atlantic superstore",
                    "product_image": require("../Images/Products/61ad0117beeb0cf98844706e.png").default,
                    "product_quantity": 0
                },
                {
                    "_id":"61ad016dbeeb0cf988447070",
                    "product_id":"3",
                    "product_name":"Vicks",
                    "product_description":"cough",
                    "product_price":"30",
                    "product_address":"walmart",
                    "product_image": require("../Images/Products/61ad016dbeeb0cf988447070.png").default,
                    "product_quantity": 0
                }
            ]
        })

        /*axios.get(url).then((response) => {
            if (response && response.data && response.data.status === 200) {
                console.log(response)
                if (response && response.data && response.data.data && response.data.data.length) {
                    response.data.data.forEach((row) => {
                        row['product_quantity'] = 0
                    })
                }
                this.setState({ products: response.data.data })
            }

        }).catch((error) => {
            console.log(error)
        })*/
    }

    filterData = (event) => {
        event.preventDefault();
        if (event.target.value) {
            this.getProducts(event.target.value)
        } else {
            this.getProducts()
        }
    }

    getAllPrices = () => {
        let prices = 0
        this.state.products.forEach((row) => {
            prices += row.product_price * row.product_quantity
        })
        if (prices > 0) {
            this.setState({productError: ""})
        } else {
            this.setState({productError: "Cart Empty!!"})
        }
        return prices
    }

    getPageData = () => {
        let products = []
        this.state.products.forEach((row) => {
            if (row.product_quantity > 0) {
                products.push(row)
            }
        })
        if (products.length > 0) {
            this.props.history.push({
                pathname: '/customer/address',
                products: products,
                totalprice: this.state.totalprice
            })
        } else {
            this.setState({productError: "Cart Empty!!"})
        }
        
    }

    updateValue = (index, value) => {
        this.state.products[index].product_quantity = value
        this.setState({products: this.state.products})
        this.setState({totalprice: this.getAllPrices()})
    }

    render() {
        const apiData = this.state.products

        return (
            <div>
                <Box height='100vh' align="center">
                    <NavMenu color='teal' loggedIn={true}/>
                    <Heading  m='20px' align="center" fontSize='5xl' color='teal.700'>All Products</Heading>
                    <Center>
                    <Flex p='20px'>
                        <VStack>
                            <Box p='20px' width="100%">
                                <InputGroup>
                                    <Input placeholder='Search'
                                           borderRadius='lg'
                                           focusBorderColor='blue'
                                           type="text"
                                           name="searchKey"
                                           value={this.state.searchKey}
                                           onChange={this.searchKeyChange}/>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<SearchIcon color='gray.300' />}
                                    />
                                </InputGroup>
                            </Box>
                            <Grid p='20px' templateColumns='repeat(4, 1fr)' gap={6}>
                                {
                                    apiData.map((row, index) => {
                                        if (
                                            row.product_name.toLowerCase().includes(this.state.searchKey.toLowerCase()) ||
                                            row.product_description.toLowerCase().includes(this.state.searchKey.toLowerCase())
                                        ) return (
                                            <div>
                                                <Box boxShadow='outline' borderRadius='lg'  p='20px' bg='white'>
                                                    <VStack spacing={'5px'}>
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
                            </VStack>
                        </Box>
                        </Flex>
                    </Center>

                </Box>
{/*
                <div className="products-page">
                    <div className="products-page-container">
                        <div className="products-page-content">
                            <Container className="page-header-container">
                                <Row className="page-header">
                                    <Col>
                                        <span className="page-title">All Products</span>
                                    </Col>
                                    <Col>
                                        <div className="search-container">
                                            <Form className="search-container-content">
                                                <Form.Group controlId="searchKey">
                                                    <Form.Control type="text" name="searchKey"
                                                                  value={this.state.searchKey}
                                                                  onChange={this.onValueChange}/>
                                                </Form.Group>
                                                <button onClick={this.filterData}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                                {apiData.length ? (
                                    <Row className="page-content">
                                        {
                                            apiData.map((row, index) => {
                                                return (
                                                    <div className="card-container">
                                                        <Card className="card-content">
                                                            <Card.Body>
                                                                <Card.Title>{row.product_name}</Card.Title>
                                                                <Card.Subtitle
                                                                    className="mb-2 text-muted">{row.product_description}</Card.Subtitle>
                                                                <input type="number" value={row.product_quantity}
                                                                       onChange={(event) => this.updateValue(index, event)}/>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                )
                                            })
                                        }
                                        <span>Total Prices: {this.state.totalprice}</span>
                                        <div>
                                            <Button variant="outline-primary" className="button-accept"
                                                    onClick={this.getPageData}>Next</Button>
                                        </div>

                                    </Row>
                                ) : (<div className="not-found">No Records Found</div>)}

                            </Container>

                        </div>
                    </div>
                </div>
*/}
            </div>
        )
    }
}

export default withRouter(ProductDetails)
