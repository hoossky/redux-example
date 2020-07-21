import React, {useCallback} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {increase, decrease} from "./counter.reducer";
import CounterComponent from "./CounterComponent";

const CounterContainer = () => {
    const number = useSelector(state => state.countReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch])
    return (
        <CounterComponent number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    )
}
export default CounterContainer;