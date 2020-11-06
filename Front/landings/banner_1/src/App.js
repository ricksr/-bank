
// import styles from './App.css';
import React, { useState } from 'react';

import banner_1 from './banner_2.jpeg';
import banner_2 from './digiDukaan.jpeg';

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
  Button
} from 'reactstrap';



const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: '#680A34' }} light expand="md" >
        <NavbarBrand style={{ color: 'white' }}>Axis Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          {/* <a href='http://phnx.surge.sh'><Button style={{ backgroundColor: '#680A34', opacity: "1", border: '1px solid #FFFFFF' }}>Login / signup</Button></a> */}
        </Collapse>
      </Navbar>
      <div style={{ marginLeft: "13vw", marginRight: "1vw", marginTop: "1vh", marginBottom: "1vh" }}>
        <a href="http://axis-merchant-features.surge.sh/"> <img style={{ width: "70vw", borderRadius: "5px" }} src={banner_2} alt="banner_2" /> </a>
      </div>
    </div>
  );
}

export default App;
