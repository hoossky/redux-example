import {createAction, handleActions} from 'redux-actions'

const PLUS = 'counter/plus'
const MINUS = 'counter/minus'

const plus = createAction(PLUS)
const minus = createAction(MINUS)

const initailState = {number:0}

const creatReducer = handleActions({
    [PLUS]:(state, action) => ({number: state.number+1}),
    [MINUS]:(state, action) => ({number: state.number-1})
},
    initailState
)
export default creatReducer
