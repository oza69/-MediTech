import React, {Component, useEffect, useState} from 'react';
import {
    Button,
    Flex,
    Box,
    Center,
    VStack,
    StackDivider,
    Heading,
    Spacer,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, useToast
} from "@chakra-ui/react";
import { withRouter } from 'react-router-dom';
import "./DeliveryDetail.css";
import axios from "axios";
import ModalHeader from "react-bootstrap/ModalHeader";
import * as PropTypes from "prop-types";

const DeliveryDetail = (props) => {

    const [item, setItem] = useState(props.items);
    const [currentOrder, setCurrentOrder] = useState(props.isCurrentOrder);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const Confirmation = () => {
        return (
            <>
                <Button onClick={onOpen}>Accept</Button>
                <AlertDialog isOpen={isOpen} onClose={onClose}>
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader>Details</AlertDialogHeader>
                        <ModalCloseButton />
                        <AlertDialogBody>
                            <Box align='left'>
                                <Badge variant='outline' mb='10px'>
                                    {item._id}
                                </Badge>
                                <Heading size='sm'>{item.receiver}</Heading>
                                <Heading size='sm'>{item.receiver_address}</Heading>
                                <Heading size='sm'>{item.receiver_phone}</Heading>
                            </Box>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='blue' mr={3} onClick={orderAccepted}>Accept</Button>
                            <Button variant='ghost' onClick={onClose}>Cancel</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
        )
    }

    const orderAccepted = () => {
        let url = "https://meditech-backend.herokuapp.com/order/updateStatus"
        let object = {}
        object['_id'] = item._id
        object['emailID'] = localStorage.getItem('emailId')
        axios.post(url, object).then(response => {
            if (response && response.data && response.data.status === 200) {
                props.history.push({
                    pathname: '/dasher/order-success',
                    orderId: response.data.data
                })
            }
        })
    }

    return (
        <div>
            <Flex>
                <Box align='left'>
                    <Badge variant='outline' mb='10px'>
                        {item._id}
                    </Badge>
                    <Heading size='sm'>{item.receiver}</Heading>
                    <Heading size='sm'>{item.receiver_address}</Heading>
                    <Heading size='sm'>{item.receiver_phone}</Heading>
                </Box>
                <Spacer />
                {
                    currentOrder ? (
                        <Box>
                            <Confirmation />
                        </Box>
                    ) : (
                        <></>
                    )
                }
            </Flex>
        </div>

    )
}

export default withRouter(DeliveryDetail);
