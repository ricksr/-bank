import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { Col, Button, Form, FormGroup, Label, Input, Row, Progress, Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Profile = (props) => {
  let history = useHistory(props.history);
  return (
    <div >
      <div style={{ marginTop: "5vh", marginLeft: "25vw", marginRight: "15vw" }}>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" >Profile</BreadcrumbItem>
          <BreadcrumbItem tag="a" >Documents</BreadcrumbItem>
          <BreadcrumbItem tag="a" >Success</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ marginTop: "5vh", marginLeft: "25vw", marginRight: "15vw" }}>

        <Progress value="1" max="3" />

      </div>
      <div style={{ marginRight: "15vw", marginLeft: "25vw", marginTop: "50px" }}>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Enter Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Phone">Phone</Label>
                <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="ShopNumber">ShopNumber</Label>
            <Input type="text" name="ShopNumber" id="ShopNumber" placeholder="ShopNumber" />
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

          {/* <Button onClick={() => history.push("/documents")}>Proceed</Button> */}
        </Form>
      </div>
    </div>
  );
};

export default Profile;
