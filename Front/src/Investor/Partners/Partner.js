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
import loan from './loan.png';
import invoice from './invoice.png';
import pos from './pos.png';
import { SettingsOverscanOutlined } from "@material-ui/icons";

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
    const [step, setStep] = useState(4);


    const [searchTerm, setSearchTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);

    const [itemResults, setItemResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
        );
        const results2 = searchItems.filter(it => it.toLowerCase().includes(searchTerm));

        setItemResults(results2);
        setSearchResults(results);
    }, [searchTerm]);
    const [showItemForPurchase, setShowItemForPurchase] = useState(false);
    const [whichEvent, setWhichEvent] = useState();
    const onPartnerClick = async (e) => {
        console.log(parseInt(e));
        // console.log(showItemForPurchase);
        // console.log(!showItemForPurchase);
        setShowItemForPurchase(!showItemForPurchase);
        setWhichEvent(parseInt(e));
        console.log(partnerIdedData[0][e]["items"]);
    };
    const [total, setTotal] = useState(0);

    const InvocingHandler = (e) => {
        // history.push('/invoice');
        setTotal(total + parseInt(e));
    }

    const payHandler = (e) => history.push('/invoice');

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

            <div style={{ border: "1px solid black", margin: "10vw", marginTop: "5vh", marginBottom: "5vh", marginTop: "5vh", padding: "10px", borderRadius: "5px" }}>

                <div style={{ marginLeft: "10vw", marginTop: "5vh", height: "5vh", marginBottom: "15vh" }} >
                    <h4 style={{ color: "rgba(104, 10, 52, 1)" }}>About Services</h4>
                    <h5 style={{ color: "grey" }}><a style={{ color: "red" }}>*</a>We are providing banking services to make your journey smoother with our partnered companies</h5>

                </div>

                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "10vw", marginTop: "5vh" }}>
                    <div><a><img src={loan} alt={loan} style={{ borderRadius: "5px" }} /><br />Loan</a></div>
                    <div><a><img src={pos} alt={pos} style={{ borderRadius: "5px" }} /><br />pos machine</a></div>
                    <div><a><img src={invoice} alt={invoice} style={{ borderRadius: "5px" }} /><br />Invoice Generation</a></div>
                </div>

            </div>
            <div style={{ marginLeft: "10vw", marginTop: "5vh", width: "80vw" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div>
                        <input
                            type="text"
                            placeholder="Search Partners"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <ul>
                            {searchResults.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul></div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search Items"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <ul>
                            {itemResults.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {!showItemForPurchase && (partnerData[0].id,
                    partnerData.map(partners => (
                        <div style={{ border: '1px solid black', borderRadius: "10px", margin: "15px" }} >
                            <div >{partners.id}</div>,
                            <div>{partners.name}</div>,
                            <Button size="sm" style={{ width: "30vw", color: "rgba(104, 10, 52, 1)", marginLeft: "25vw", marginBottom: "15px" }} onClick={() => onPartnerClick(partners.id, partners.name)} >See Items</Button>
                        </div>
                    )
                    ))
                }
                {
                    showItemForPurchase && (
                        partnerIdedData[0][whichEvent]["items"].map(it => (
                            <div style={{ border: '1px solid black', borderRadius: "10px", margin: "15px" }} >
                                <div>{it.name}</div>,
                                <div>{it.price}</div>,
                                <div><Button onClick={() => InvocingHandler(parseInt(it.price))}>Add</Button></div>
                            </div>
                        ))
                    )
                }
                <div style={{ height: '20vh' }}>
                    <h1>{total}</h1>
                    <Button onClick={() => payHandler(total)}>PayNow / Later </Button>
                </div>
            </div>
        </div>
    );
};

export default Partner;
