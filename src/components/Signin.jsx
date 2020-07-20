import React,{useState} from "react";
import { MDBInput } from "mdbreact";

const Info = () => {
    const [userid,setUserid] = useState('')
    const [password, setPassword] = useState('')
    const onChanerUserid = e => setUserid(e.target.value)
    const onChanerPassword = e => setPassword(e.target.value)
    return(
        <>
            <div>
                <MDBInput label="userid input" size="lg" type="text" value={userid} className="form-control form-control-md" onChange={e=>setUserid(e.target.value)}/>
                <MDBInput label="password input" size="lg" type="password" value={password} className="form-control form-control-md" onChange={e=>setPassword(e.target.value)}/>
                <MDBInput label="userid input" size="lg" type="text" value={userid} className="form-control form-control-md" onChange={onChanerUserid}/>
                <MDBInput label="password input" size="lg" type="password" value={password} className="form-control form-control-md" onChange={onChanerPassword}/>
            </div>
            <div>
                <b>아이디: </b> {userid} <br/>
                <b>비밀번호: </b> {password} <br/>
            </div>
        </>
    )
}
export default Info