import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { Col, Button, Form, FormGroup, Label, Input, Row, Progress, Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Profile = (props) => {
  let history = useHistory(props.history);
  return (
    <div style={{ height: "130vh" }}>
      <div style={{ marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw" }}>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" onClick={() => history.push("/profile")}>Profile</BreadcrumbItem>
          <BreadcrumbItem tag="a" onClick={() => history.push("/documents")}>Documents</BreadcrumbItem>
          <BreadcrumbItem tag="a" onClick={() => history.push("/success")}>Success</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw" }}>

        <Progress value="1" max="3" />

      </div>
      <div style={{ marginRight: "15vw", marginLeft: "15vw", marginTop: "50px" }}>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">aadhar</Label>
            <Input type="text" name="aadhar" id="aadhar" placeholder="aadhar" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">pan</Label>
            <Input type="text" name="pan" id="pan" placeholder="pan" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Account Number</Label>
            <Input type="number" name="bankAcNumber" id="bankAcNumber" placeholder="Account Number" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">IFSC</Label>
            <Input type="number" name="bankAcNumber" id="bankAcNumber" placeholder="Account Number" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={() => history.push("/documents")}>Proceed</Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
