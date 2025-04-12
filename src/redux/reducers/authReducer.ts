import { AuthActionTypes, AuthState, AuthAction } from "../types/authTypes";

const initialState: AuthState = {
    token: null,
    name: "",
    role: null,
    loading: false,
    error: null,
    message: "",
    isLoggedIn: false
};

export const authReducer = (state = initialState, action: AuthAction): any => {
    switch (action.type) {
        /** Login cases */
        case AuthActionTypes.LOGIN_REQUEST:
            return { ...state, loading: true, error: null };

        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                name: action.payload.name,
                role: action.payload.role,
                message: action.payload.message,
                isLoggedIn: true
            };

        case AuthActionTypes.LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload.error, isLoggedIn: false };

        case AuthActionTypes.LOGOUT:
            return { ...initialState };

        /** Registration cases */
        case AuthActionTypes.REGISTRATION_REQUEST:
            return { ...state, loading: true, error: null };

        case AuthActionTypes.REGISTRATION_SUCCESS:
            return { ...state, loading: false, message: action.payload.message };

        case AuthActionTypes.REGISTRATION_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state;
    }
};