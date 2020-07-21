/*CHANGE_INPUT, INSERT, TOGGLE, REMOVE*/
import {createAction, handleActions} from 'redux-actions'

const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState = {number: 0}

const todoReducer = handleActions(
    {
    [INSERT]: (state,action) => ({}),
    [TOGGLE]: (state,action) => ({}),
    [REMOVE]: (state,action) => ({})
    },
    initialState
)
export default todoReducer