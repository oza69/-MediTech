import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DasherHeader.css'

class DasherHeader extends Component {
    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark" className="dasher-page-header">
                    <Navbar.Brand>
                        <Link to="/" className="application-logo" onClick={() => window.scrollTo(0, 0)}>
                            <i class="fas fa-capsules application-logo-details"></i>
                            <span className="application-tag-details">Healthcare For All  | </span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="navigation-bar-menu">
                        <Nav>
                            <Link to="/dasher/dasher-orders" className="navigation-link">
                                Active Orders
                            </Link>
                            <Link to="/dasher/past-orders" className="navigation-link">
                                Past Orders
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default DasherHeader;
