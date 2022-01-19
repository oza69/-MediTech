import React, { Component } from 'react'
import {Link as RouterLink, withRouter} from 'react-router-dom';
import backgroundImage from "../Images/landing_page_background_2.jpg";
import NavMenu from "./NavMenu";
import {Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack} from "@chakra-ui/react";
export class OrderSuccess extends Component {

  constructor(props) {
    super(props)
    this.state = {
      orderID: ""
    }
  }

  componentDidMount() {
    this.setState({ orderId: this.props.location.orderId })
  }

  render() {
    return (
      <div>
        <Box h='100vh' align="center" bgGradient='linear(to-r, blue.100, pink.200)'>
          <NavMenu color='teal' loggedIn isDasher/>
          <Center m='20px'>
            <Box borderRadius='lg' w='xl' p='20px' bg='white'>
              <Stack spacing='10px'>
                <Heading align="center" fontSize='3xl' color='teal.700'>{this.state.orderId} - Confirmed</Heading>
                <Button as={RouterLink} to='/dasher/past-orders'  m='5px' colorScheme='teal' size='md'>Past Orders</Button> : <></>}
                <Button m='5px' colorScheme='gray' onClick={() => this.props.history.goBack()} size='md'>Back</Button>
              </Stack>
            </Box>
          </Center>
        </Box>
        <h2 >{this.state.orderId} - Confirmed</h2>
        Order In Progress
      </div>
    );
  }
}

export default withRouter(OrderSuccess);
