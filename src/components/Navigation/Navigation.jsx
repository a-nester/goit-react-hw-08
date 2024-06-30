import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>}
      </ul>
    </nav>
  );
};

export default Navigation;
