import { Login } from 'views/Auth/Login';
import Register from 'views/Auth/Register';
import Recovery from 'views/Auth/Recovery';
import Dashboard from 'views/Dashboard'

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth",
        invisible: true
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/auth",
        invisible: true
    },
    {
        path: "/recovery",
        name: "Recovery",
        component: Recovery,
        layout: "/auth",
        invisible: true
    },

    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        layout: "/user"
    }
]

export default routes;