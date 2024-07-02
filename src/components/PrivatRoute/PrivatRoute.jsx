import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoggedIn, selectToken } from '../../redux/auth/selectors';

export const PrivatRoute = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const token = useSelector(selectToken);

  if (!isLoggedIn && token) {
    return <p>...loading</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivatRoute;
