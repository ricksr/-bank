import React, { } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { Progress, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';


const Success = (props) => {
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
                <Progress value="3" max="3" />
                Some SVG
            </div>

        </div>
    );
};

export default Success;
