import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

import fire from "../../Firebase/fire";
import Onbarding from "../Onboarding/Profile";
import Partners from "../Onboarding/Documents";
import AxisAccount from "../Onboarding/Success";

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

const Investor = (props) => {
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory(props.history);
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("tok");
  const toggle = () => setIsOpen(!isOpen);
  const [step, setStep] = useState(4);

  useEffect(() => {
    if (token !== history.location.state) handleLogOut();
    console.log(user);
    setUserName(user);
  }, []);

  const handleLogOut = () => {
    history.push("/", "invest");
  };

  const handleOnbardingSteps = () => {
    setStep(step + 1);
  }
  const handlePartnersPage = () => history.push('/partner');
  const handleRatingPage = () => history.push('/rating');

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
            <NavLink onClick={handleLogOut}>Log out</NavLink>
          </Collapse>
        </Navbar>
      </div>
      <div
        style={{
          // margin: "50px",

        }}
      >
        {
          step <= 1 && (
            step === 1 ?
              <div style={{ width: "85vw" }}><Onbarding /></div> :
              step === 2 ?
                <div style={{ width: "85vw" }}><Partners /></div> :
                step === 3 ?
                  <div style={{ width: "85vw" }}><AxisAccount /></div> :
                  <div>Don't show the onboarding steps</div>

          )
        }
        {
          step <= 3 && (<div style={{ width: "50vw", marginTop: "5vh", marginLeft: "23vw", marginRight: "15vw" }}><Button onClick={handleOnbardingSteps}>Next</Button></div>)
        }
        <div style={{
          width: "70vw", display: "flex",
          flexDirection: "column",
          flexFlow: "column",
          justifyContent: "spaceBetween",
          marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw",
          height: "25vh"
        }}>
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle>Order From Our partners</CardTitle>
                <CardSubtitle>partnered companies</CardSubtitle>
                <Button style={{ margin: "5px", backgroundColor: "#680A34" }} onClick={handlePartnersPage} >View</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Grab the Rating</CardTitle>
                <CardSubtitle>send the cutomer a link and ask him / her for a rating</CardSubtitle>
                <Button style={{ margin: "5px", backgroundColor: "#680A34" }} onClick={handleRatingPage} >View</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>

    </div>
  );
};

export default Investor;
