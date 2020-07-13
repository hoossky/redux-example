import React from "react";
import Countdown from "../components/Countdown"
const Counter = () =>
    <div>
        <Countdown count={0} tick={10} reset={1000}/>
    </div>

export default Counter