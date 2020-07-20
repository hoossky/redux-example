import React, {useState} from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
const Greeting = () => {
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")
    const onClickWelcome = () => setMessage("welcome")
    const onClickBye = () => setMessage("bye")
    const onclickPurple = () => setColor("Purple")
    const onclickBlue = () => setColor("Blue")
    const onclickAqua = () => setColor("Aqua")

    return (
        <>
            <MDBBtn outline color="primary" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn outline color="primary" onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn gradient="purple" onClick={onclickPurple}>Purple</MDBBtn>
            <MDBBtn gradient="blue" onClick={onclickBlue}>Blue</MDBBtn>
            <MDBBtn gradient="aqua" onClick={onclickAqua}>Aqua</MDBBtn>
        </>
    )
}

export default Greeting