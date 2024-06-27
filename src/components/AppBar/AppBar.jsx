import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

export const AppBar = () => {
    return <>
        <header>
            <nav className={css.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Login">Log in</NavLink>
                <NavLink to="/Register">Register</NavLink>
            </nav>
        </header>
    </>
}

export default AppBar