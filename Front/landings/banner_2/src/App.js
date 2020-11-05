import React, { useState } from 'react';
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

import head_2 from './head_2.png';
import feature_1 from './features_1.png';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ color: "#680A34" }}>
      <Navbar style={{ backgroundColor: '#680A34' }} light expand="md" >
        <NavbarBrand style={{ color: 'white' }}>Axis Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <a href='http://phnx.surge.sh'><Button style={{ backgroundColor: '#680A34', opacity: "1", border: '1px solid #FFFFFF' }}>Login / signup</Button></a>
        </Collapse>
      </Navbar>
      <div>
        <div >
          <img style={{ margin: '10px', marginLeft: '5vw', height: '10%', width: '90%' }} src={head_2} alt={head_2} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20vw' }}>
          <div >
            <a href='http://phnx.surge.sh'> <img style={{ margin: '10px', marginLeft: '5vw', border: '1px solid black' }} src={feature_1} alt={feature_1} /></a>
          </div>
          <div >
            <a href='http://phnx.surge.sh'><img style={{ margin: '10px', marginLeft: '5vw', border: '1px solid black' }} src={feature_1} alt={feature_1} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;