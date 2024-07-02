import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/selectors';
import UserInfo from '../UserInfo/UserInfo';
import Authorization from '../Authorization/Authorization';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <header>
        <nav className={css.nav}>
          <Navigation />
          {isLoggedIn ? <UserInfo /> : <Authorization />}
        </nav>
      </header>
    </>
  );
};

export default AppBar;
