import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Navigate } from "react-router-dom";
import { loginOAuth } from "../../redux/auth/operations";
import { useEffect } from "react";
import { selectLoggedIn } from "../../redux/auth/selectors.js";

export const OAuthLogin = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const code = searchParams.get("code");
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(loginOAuth(code));
  }, [isLoggedIn]);

  return <>{isLoggedIn && <Navigate to="/contacts" />}</>;
};

export default OAuthLogin;
