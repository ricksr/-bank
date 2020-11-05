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
  const [step, setStep] = useState(1);

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
          step <= 3 && (
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
          marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw"
        }}>
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>CArd</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Card info</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>

    </div>
  );
};

export default Investor;
