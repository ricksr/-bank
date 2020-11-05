import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    CardDeck,
    Input,
} from "reactstrap";



const Rating = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let history = useHistory(props.history);
    const user = localStorage.getItem("user");
    const [userName, setUserName] = useState(user);
    const token = localStorage.getItem("tok");
    const toggle = () => setIsOpen(!isOpen);
    const [step, setStep] = useState(1);
    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Some Name !</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                </DropdownToggle>
                                <DropdownMenu right>
                                    {/* <DropdownItem onClick={() => history.push("/profile")}>
                    Documents
                  </DropdownItem> */}
                                    <DropdownItem >
                                        Partners
                  </DropdownItem>
                                    <DropdownItem >
                                        Axis Features
                  </DropdownItem>
                                    <DropdownItem >
                                        Personal Advisor
                  </DropdownItem>
                                    <DropdownItem >
                                        Dukkandaar Rating
                  </DropdownItem>
                                    <DropdownItem >
                                        Invoice
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>^</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>{userName}</NavbarText>

                    </Collapse>
                </Navbar>
            </div>
            <div style={{ margin: "30px" }}>
                Enter Customer Phone Number :
                <Input style={{ width: "35vw", margin: "10px" }} placeholder="Phone Number" type="text" />
                <Button style={{ width: "35vw", margin: "10px" }} >Send</Button>
            </div>
        </div>
    );
};

export default Rating;
