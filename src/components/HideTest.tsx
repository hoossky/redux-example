import React,{useState, useEffect} from 'react';
import {MDBBtn} from "mdbreact";
import SigninTest from "./SigninTest";

const HideTest:React.FC = () => {
    const [visible, setVisible] = useState(false)


    return (
        <>
            <MDBBtn gradient="aqua" onClick={e=>{setVisible(!visible)}}></MDBBtn>
            {visible ? `숨기기` : `보이기`}
            <hr/>
            {visible && <SigninTest/>}
        </>
    );
};

export default HideTest;