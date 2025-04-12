/** Action types */
export enum AuthActionTypes {
    //Login
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",

    //Register
    REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
    REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
    REGISTRATION_FAILURE = "REGISTRATION_FAILURE",

    LOGOUT = "LOGOUT",
}

/**AuthState */
export interface AuthState {
    token: string | null;
    name: string;
    role: "patient" | "provider" | null;
    loading: boolean;
    error: string | null | unknown;
    message: string;
    isLoggedIn: boolean
}

export type AuthAction =
    | { type: AuthActionTypes.LOGIN_REQUEST; payload: LoginPayload }
    | { type: AuthActionTypes.LOGIN_SUCCESS; payload: { token: string; name: string; role: "patient" | "provider"; message: string } }
    | { type: AuthActionTypes.LOGIN_FAILURE; payload: { error: string } }
    | { type: AuthActionTypes.LOGOUT }
    | { type: AuthActionTypes.REGISTRATION_REQUEST; payload: RegistrationPayload }
    | { type: AuthActionTypes.REGISTRATION_SUCCESS; payload: { message: string } }
    | { type: AuthActionTypes.REGISTRATION_FAILURE; payload: { error: string } };

export interface RegistrationPayload {
    name: string | null;
    email: string | null;
    password: string | null;
    phone?: number | null;
}

export interface LoginPayload {
    email: string;
    password: string;
}
