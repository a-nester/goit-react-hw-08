import { NavLink } from 'react-router-dom';
import css from './Authorization.module.css';

export const Authorization = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Authorization;
