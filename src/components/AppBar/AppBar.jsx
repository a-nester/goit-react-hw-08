import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <header>
        <nav className={css.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
    </>
  );
};

export default AppBar;
