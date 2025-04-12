import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState } from "../../redux/reducers/rootReducer";
import { useDispatch } from "react-redux";
import { AuthActionTypes } from "../../redux/types/authTypes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { appConstants } from "../../constants/app.constants";

/**
 * @returns a Fixed header that is responsive containing Brand name, logout button
 */
const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const auth = useSelector((state: RootState) => state.auth);

    const handleLogOut = () => {
        dispatch({ type: AuthActionTypes.LOGOUT, navigate });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path: string) => {
        return location.pathname === path ? "text-yellow-500" : "text-white hover:text-blue-800";
    };

    return (
        <div className={`fixed w-full top-0 left-0 ${appConstants.APP_BG_PRIMARY}`}>
            <nav className="m-0 px-3 py-1 flex items-center justify-between font-bold">
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src={appConstants.APP_ICON}
                        className="w-10 h-10"
                        alt="Logo"
                    />
                    <span className="text-2xl font-semibold whitespace-nowrap">{appConstants.APP_NAME}</span>
                </Link>

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                <div className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? "block " : "hidden"} w-full md:w-auto bg-indigo-400 md:bg-transparent absolute md:relative top-12 left-0 md:top-0 md:left-0 md:p-0 p-5 z-10`}>
                    <ul className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <li>
                            <p className="text-black-800">Hi, {auth?.name} [{auth?.role}]</p>
                        </li>
                        <li>
                            <Link className={getLinkClass("/")} to="/">
                                Home
                            </Link>
                        </li>
                        {auth && auth.role === 'user' && (
                            <>
                                <li>
                                    <Link className={getLinkClass("/orders")} to="/orders">
                                        Orders
                                    </Link>
                                </li>
                            </>
                        )}
                        {auth.role === 'admin' && <li>
                            <Link className={getLinkClass("/add-products")} to="/add-products">
                                Add Products
                            </Link>
                        </li>}
                        <li>
                            <Link className="text-white hover:text-blue-800 px-2 border rounded-sm bg-red-500" to="/" onClick={handleLogOut}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;