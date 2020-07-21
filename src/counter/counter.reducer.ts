import { createAction, handleActions} from 'redux-actions'
import {number} from "prop-types";

const INCREASE = 'count/INCREASE'
const DECREASE = 'count/DECREASE'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState = {number: 0}

const counterReducer = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1})
    },
    initialState
)
export default counterReducer