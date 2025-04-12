import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/reducers/rootReducer";

type Props = { element: JSX.Element }

const AuthRoute: React.FC<Props> = ({ element }) => {
    const isLoggedIn: boolean = useSelector((state: RootState) => state.auth.isLoggedIn);
    return isLoggedIn ? <Navigate to="/" replace /> : element;
}

export default AuthRoute;