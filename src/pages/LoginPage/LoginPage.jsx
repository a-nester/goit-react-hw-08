import { useDispatch } from "react-redux"
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";

export const LoginPage = () => {
    const dispatch = useDispatch();

    const log = (userLogData) => {
        dispatch(login(userLogData))
    }
    return <div>
        <h2>LoginPage</h2>
    <LoginForm submit={log} />
</div>
}

export default LoginPage;