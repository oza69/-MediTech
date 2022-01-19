import React from "react";
import logo from "../Images/Bansi.PNG";
import boy from "../Images/Kishan.PNG";
import dhruv from "../Images/Dhruv.PNG";
import eklavya from "../Images/Eklavya.PNG";
import akash from "../Images/Akash.PNG";
import philemon from "../Images/Philemon.PNG";
import backgroundImage from "../Images/landing_page_background_2.jpg";
import NavMenu from "../Component/NavMenu";
import {Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack} from "@chakra-ui/react";


const Team = () => {
    const handleChange = (event) => {
        //do something
      };
    return (
       <Box height='170vh' align="center" bgImage={backgroundImage} bgPosition="center"
                bgRepeat="no-repeat" bgSize="cover">
            <NavMenu color='white' loggedIn={false}/>
                <Center m='20px'>
                    <Box borderRadius='lg' w='xl' p='20px' bg='white' align="center" bgGradient='linear(to-r, teal.100, green.100)' bgPosition="center">
                        <Stack spacing='10px'>
                            <Heading align="center" fontSize='4xl' color='teal.700'>Meet Our Team</Heading>
                                <div className="row">
                                    <div className="column">
                                        <div className="card">
                                        <img src={logo} alt="Bansi" style={{width:150, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Bansi Mehta</b></h2>
                                            <p><i>Full Stack Developer</i></p>
                                            <p>Scrum Master</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="card">
                                        <img src={boy} alt="Kishan" style={{width:100, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Kishan Kahodariya</b></h2>
                                            <p><i>Front-end Developer</i></p>
                                            <p>Project Manager</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="card">
                                        <img src={dhruv} alt="Dhruv" style={{width:100, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Dhruv Oza</b></h2>
                                            <p><i>Front-end Developer</i></p>
                                            <p>Customer Relations</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="card">
                                        <img src={eklavya} alt="Eklavya" style={{width:100, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Eklavya Nautiyal</b></h2>
                                            <p><i>Test Developer</i></p>
                                            <p>Financial Consultant</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="card">
                                        <img src={akash} alt="Akash" style={{width:100, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Akash Madan</b></h2>
                                            <p><i>Back-end Developer</i></p>
                                            <p>React Expert</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="card">
                                        <img src={philemon} alt="Philemon" style={{width:100, display:"flex", marginLeft:"auto", marginRight:"auto"}}/>
                                        <div>
                                            <h2 style={{fontSize:"large", color:"teal.700"}}><b>Philemon Lee</b></h2>
                                            <p><i>Full Stack Developer</i></p>
                                            <p>Quality Control</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </Stack>
                    </Box>
                </Center>
            </Box>
    );
};
export default Team;