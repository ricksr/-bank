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

import pic2 from './payment.png';
const people = [
    "hul",
    "itc",
    "mos-cow"
];
const searchItems = [
    'sugar',
    'rice',
    'wheat'
]
const product_ids = {
    "Rice": 1,
    "Sugar": 2,
};

const partnerData = [
    {
        name: "HUL",
        id: "1",
        items: [
            { partner_id: "1", item_id: "12", product_id: product_ids["Rice"], name: "Rice", price: "200INR", metric: "kg" },
            { partner_id: "1", item_id: "13", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    },
    {
        name: "itc",
        id: "2",
        items: [
            { partner_id: "2", item_id: "14", product_id: product_ids["Rice"], name: "Rice", price: "300INR", metric: "kg" },
            { partner_id: "2", item_id: "15", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    },
    {
        name: "mos-cow",
        id: "3",
        items: [
            { partner_id: "3", item_id: "16", product_id: product_ids["Rice"], name: "Rice", price: "190INR", metric: "kg" },
            { partner_id: "3", item_id: "17", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    }
];
const partnerIdedData = [{
    1: {
        name: "HUL",
        id: "1",
        items: [
            { partner_id: "1", item_id: "12", product_id: product_ids["Rice"], name: "Rice", price: "200INR", metric: "kg" },
            { partner_id: "1", item_id: "13", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    },
    2: {
        name: "itc",
        id: "2",
        items: [
            { partner_id: "2", item_id: "14", product_id: product_ids["Rice"], name: "Rice", price: "300INR", metric: "kg" },
            { partner_id: "2", item_id: "15", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    },
    3: {
        name: "mos-cow",
        id: "3",
        items: [
            { partner_id: "3", item_id: "16", product_id: product_ids["Rice"], name: "Rice", price: "190INR", metric: "kg" },
            { partner_id: "3", item_id: "17", product_id: product_ids["Sugar"], name: "Sugar", price: "100INR", metric: "kg" },
        ]
    }
}];

const Partner = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    let history = useHistory(props.history);
    const user = localStorage.getItem("user");
    const [userName, setUserName] = useState(user);
    const token = localStorage.getItem("tok");
    const toggle = () => setIsOpen(!isOpen);




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

            <img style={{ marginLeft: "10vw", marginTop: "5vh", width: "80vw", height: "80vh" }} src={pic2} alt={pic2} />


        </div>
    );
};

export default Partner;
