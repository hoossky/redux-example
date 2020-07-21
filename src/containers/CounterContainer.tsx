import React from 'react';
import {connect} from 'react-redux'
import CounterComponent, {increase, decrease} from "./CounterComponent";

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <CounterComponent number={number}
                          onIncrease={increase}
                          onDecrease={decrease}
        />
    );
};

export default connect(
    state => ({
        number: 0

    }),
    dispatch =>({
        increase: ()=> dispatch(increase()),
        decrease: ()=> dispatch(decrease())
    })
)