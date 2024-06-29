import { NavLink } from "react-router-dom"

export const Authorization = () => {
    return (
        <div>
            <NavLink to='/login' >LogIn</NavLink>
            <NavLink to='/register'>Register</NavLink> 
        </div>
    )
}

export default Authorization