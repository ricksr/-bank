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
} from "reactstrap";

import pic from './pic.png';

const Partner = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let history = useHistory(props.history);
    const user = localStorage.getItem("user");
    const [userName, setUserName] = useState(user);
    const token = localStorage.getItem("tok");
    const toggle = () => setIsOpen(!isOpen);
    const [step, setStep] = useState(1);

    const partnerData = [
        {
            name: "HUL",
            id: "1"
        },
        {
            name: "itc",
            id: "2"
        },
        {
            name: "mos-cow",
            id: "3"
        }
    ];

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
            <img style={{ marginLeft: "10vw", marginTop: "5vh", width: "80vw", height: "30vh" }} src={pic} alt={pic} />
            <div style={{ marginLeft: "10vw", marginTop: "5vh", width: "80vw"}}>
                {partnerData[0].id,
                    partnerData.map(partners => (
                        <div style={{border:'1px solid black', borderRadius:"10px", margin: "15px"}}>
                            <div>{partners.id}</div>,
                            <div>{partners.name}</div>,
                            <Button  size="sm" style={{width:"30vw", color:"rgba(104, 10, 52, 1)", marginLeft:"25vw", marginBottom:"15px"}}>See Items</Button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Partner;
