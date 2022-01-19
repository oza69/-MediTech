import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPageHeader.css'

class LandingPageHeader extends Component {
    state = {
        toggleOpen: false,
        atTop: true
    };

    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark" className="landing-page-header">
                    <Navbar.Brand>
                        <Link to="/" className="application-logo" onClick={() => window.scrollTo(0, 0)}>
                            <i class="fas fa-capsules application-logo-details"></i>
                            <span className="application-tag-details">Healthcare For All  | </span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="navigation-bar-menu">
                        <Nav>
                            <Link to="/" className="navigation-link">
                                Home
                            </Link>
                            <Link to="/goal" className="navigation-link">
                                Our Goal
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default LandingPageHeader;
