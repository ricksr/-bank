import React, { } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { Progress, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';


const Documents = (props) => {
    let history = useHistory(props.history);
    return (
        <div >
            <div style={{ marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw" }}>
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" onClick={() => history.push("/profile")}>Profile</BreadcrumbItem>
                    <BreadcrumbItem tag="a" onClick={() => history.push("/documents")}>Documents</BreadcrumbItem>
                    <BreadcrumbItem tag="a" onClick={() => history.push("/success")}>Success</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div style={{ marginTop: "5vh", marginLeft: "15vw", marginRight: "15vw" }}>
                <Progress value="2" max="3" />
            </div>
            <div style={{ marginLeft: "15vw", marginRight: "15vw", marginTop: "10vh" }}>
                <FilePond allowMultiple={true} />
            </div>
            <div style={{ marginLeft: "15vw", marginRight: "15vw", marginTop: "10vh" }}>
                <Button onClick={() => history.push("/Success")} onLoading="true">Proceed</Button>
            </div>
        </div>
    );
};

export default Documents;
