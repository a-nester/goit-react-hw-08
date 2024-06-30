import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export const UserInfo = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut(token));
  };
  return (
    <div>
      <p>Hello, {user.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserInfo;
