import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import { appConstants } from "../constants/app.constants";

interface AuthLayoutProps {
    children?: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
    <div className="overflow-auto m-0 p-0 fixed top-0 right-0 left-0 w-full h-full bg-no-repeat object-fit bg-cover">
        <nav className={`fixed top-0 left-0 right-0 m-0 px-3 py-1 flex items-center justify-between font-bold ${appConstants.APP_BG_PRIMARY}`}>
            <div className="flex items-center">
                <img src={appConstants.APP_ICON} className="w-10 h-10" alt="Logo" />
            </div>
            <div className="flex-grow text-center">
                <span className="text-3xl">{appConstants.APP_NAME}</span>
            </div>
            <div className="w-10 h-10"></div>
        </nav>
        <div className="pt-4">
            {children || <Outlet />}
        </div>
        <Footer />
    </div>
);

export default AuthLayout;