import React, {Component} from "react";

class Test extends Component<any, any>{
    render() {
        return(
            <></>
        )
    }
}

const actionType = 'TEST_MEMBER'

const actionCreator = data => {
    return{
        type: "actionType",data
    }
}

const action = actionCreator({})