import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/reducers/rootReducer";

type Props = {element : JSX.Element}

const ProtectedRoute : React.FC<Props> = ({ element }) => {
    const isLoggedIn: boolean = useSelector((state: RootState) => state.auth.isLoggedIn);
    return isLoggedIn ? element : <Navigate to="/auth/login"  />;
}

export default ProtectedRoute;