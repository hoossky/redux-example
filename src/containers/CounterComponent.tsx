import React, {useState} from "react";
// 프로퍼티로 number, onIncrease, onDecrease를 JSX에 전달한다.
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

const initialState = {
    number: 0
}
function conter(state, action) {

}
//----------------------------------------------------------------------------------------------------------------------
const CounterComponent = ({number, onIncrease, onDecrease}) => {

    return(
        <>
            <h1>숫자 : {number}</h1>
            <br/>
            <button onClick={onIncrease}>+ 1</button>
            <button onClick={onDecrease}>- 1</button>
        </>
    )
}
export default CounterComponent