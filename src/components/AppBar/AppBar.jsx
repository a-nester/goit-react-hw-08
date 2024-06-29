import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

export const AppBar = () => {
    return <>
        <header>
            <nav className={css.nav}>
                <NavLink to="/">Home</NavLink>
                <Navigation />
            </nav>
        </header>
    </>
}

export default AppBar