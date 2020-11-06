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

      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", margin: '10px', marginLeft: '3vw', minWidth: "70vw", padding: "20px" }}>

        <div style={{ border: "1px solid black", width: "35vw", minHeight: "25vh", margin: "5px", borderRadius: "5px", margin: "20px" }}>
          <h5 style={{
            textAlign: 'left',
            letterSpacing: '0px',
            color: '#272738',
            opacity: 1,
            margin: "5px"
          }}>
            <strong>Instant Loan</strong>
          </h5>
          <h6 style={{ color: 'grey', margin: "5px" }}>Features</h6>
          <div style={{ color: 'black', margin: "5px" }}>Instant OD for invoice payments I Enhance limits with increased usage I Flexible repayment dates I Flexible interest rates basis the payment behavior</div>
          <a href='http://phnx.surge.sh'><div style={{ margin: "5px" }}><Button style={{ backgroundColor: "#680A34" }}>APPLY NOW</Button></div></a>

        </div>

        <div style={{ border: "1px solid black", width: "35vw", minHeight: "25vh", margin: "5px", borderRadius: "5px", margin: "20px" }}>
          <h5 style={{
            textAlign: 'left',
            letterSpacing: '0px',
            color: '#272738',
            opacity: 1,
            margin: "5px"
          }}>
            <strong>Payments</strong>
          </h5>
          <h6 style={{ color: 'grey', margin: "5px" }}>Features</h6>
          <div style={{ color: 'black', margin: "5px" }}>You can now make/receive payments on a single click via NEFT/RTGS/UPI/IMPS Axis Easy Pay I QR Codes</div>
          <a href='http://phnx.surge.sh'><div style={{ margin: "5px" }}><Button style={{ backgroundColor: "#680A34" }}>APPLY NOW</Button></div></a>

        </div>

        <div style={{ border: "1px solid black", width: "35vw", minHeight: "25vh", margin: "5px", borderRadius: "5px", margin: "20px" }}>
          <h5 style={{
            textAlign: 'left',
            letterSpacing: '0px',
            color: '#272738',
            opacity: 1,
            margin: "5px"
          }}>
            <strong>E shop – Orders and Inventory Management</strong>
          </h5>
          <h6 style={{ color: 'grey', margin: "5px" }}>Features</h6>
          <div style={{ color: 'black', margin: "5px" }}>
            {/* Instant OD for invoice payments I Enhance limits with increased usage I Flexible repayment dates I Flexible interest rates basis the payment behavior */}
            Orders I Buy new products I Avail best offers I Offers based on advance payment Manage your inventory I Update inventory I Products low on inventory
            </div>
          <a href='http://phnx.surge.sh'><div style={{ margin: "5px" }}><Button style={{ backgroundColor: "#680A34" }}>APPLY NOW</Button></div></a>

        </div>

        <div style={{ border: "1px solid black", width: "35vw", minHeight: "25vh", margin: "5px", borderRadius: "5px", margin: "20px" }}>
          <h5 style={{
            textAlign: 'left',
            letterSpacing: '0px',
            color: '#272738',
            opacity: 1,
            margin: "5px"
          }}>
            <strong>Banking services</strong>
          </h5>
          <h6 style={{ color: 'grey', margin: "5px" }}>Features</h6>
          <div style={{ color: 'black', margin: "5px" }}>

            {/* Instant OD for invoice payments I Enhance limits with increased usage I Flexible repayment dates I Flexible interest rates basis the payment behavior */}
            Check balance I Mini/Detailed statements I Apply for cards I Apply for chequebook I Add beneficiary I Delete beneficiary I Create FD I Fund transfer
            </div>
          <a href='http://phnx.surge.sh'><div style={{ margin: "5px" }}><Button style={{ backgroundColor: "#680A34" }}>APPLY NOW</Button></div></a>

        </div>

      </div>
    </div>
  );
}

export default Example;