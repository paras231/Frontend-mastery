export const LoginRequest = (email,password)=>({
    type: 'LOGIN_REQUEST',
});
export const LoginSuccess = (role)=>({
    type: 'LOGIN_SUCCESS',
    payload: role
});
export const LoginFailure = (error)=>({
    type: 'LOGIN_FAILURE',
    payload: error
})