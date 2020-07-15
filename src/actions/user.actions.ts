import {userConstants} from '../constants'
import userService from "../apis/user.api";

const userActions = {
    login,
    join
}
function join(userid, password, name) {
    alert(`ID: ${userid}, PW: ${password}, NAME: ${name}`)
    return dispatch => dispatch(request(userid))
}
const request = (userid:string):object => {
    return {type: userConstants.LOGIN_REQUEST, userid}
}
function success(userid:string):object {
    return { type: userConstants.LOGIN_SUCCESS, userid}
}
function failure(userid:string, error:string):object {
    return { type: userConstants.LOGIN_FAIL, userid, error}
}
function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)
    userService.loginService(userid, password)

    return dispatch => {
        dispatch(request(userid))
    }

    const request = user => { return{type:userConstants.LOGIN_REQUEST, user}}
    const success = user => { return{type:userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return{type:userConstants.LOGIN_FAIL, user}}

}
export default userActions
