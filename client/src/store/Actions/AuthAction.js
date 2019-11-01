export const checkSession = () => ({
    type: 'GET_SESSION',
});

export const login = (email, password) => ({
    type: 'LOGIN',
    email,
    password
})