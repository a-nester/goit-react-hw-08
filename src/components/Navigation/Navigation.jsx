import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <NavLink to="/Login">Log in</NavLink>
      <NavLink to="/Register">Register</NavLink>
    </>
  );
};

export default Navigation