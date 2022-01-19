import React, { Component } from 'react';
import DasherHeader from "../Component/DasherHeader";
import "./DasherOrder.css"
import DeliveryDetail from "../Component/DeliveryDetail";
import axios from "axios"
import NavMenu from "../Component/NavMenu";
import {Heading, Box, Center, VStack, StackDivider} from "@chakra-ui/react";
// import Stack from "react-bootstrap/Stack";

class DasherOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = 'https://meditech-backend.herokuapp.com/order/activeOrders'
        axios.get(url).then(response => {
            if (response && response.data && response.data.status === 200) {
                this.setState({data: response.data.data})
            }
        })
    }

    render() {
        return (
            <>
                <Box h='100vh' align="center" overflowY='scroll'>
                    <NavMenu color='teal' loggedIn isDasher/>
                    <Heading m='20px' align="center" fontSize='5xl' color='teal.700'>Active Orders</Heading>
                    <Center m='20px'>
                        <VStack spacing={4}
                                align='stretch'>
                            {this.state.data.map((row) => (
                                <Box boxShadow='outline' borderRadius='lg' w='xl' p='20px' bg='white'>
                                    <DeliveryDetail items={row} isCurrentOrder />
                                </Box>
                            ))}
                        </VStack>
                    </Center>
                </Box>
            </>
        )
    }
}

export default DasherOrder;
