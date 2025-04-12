import { AuthActionTypes, LoginPayload, RegistrationPayload } from "../types/authTypes";

// Registration
export const registrationRequest = (payload: RegistrationPayload) => ({
    type: AuthActionTypes.REGISTRATION_REQUEST,
    payload: payload
});

export const registrationSuccess = (message: string) => ({
    type: AuthActionTypes.REGISTRATION_SUCCESS,
    payload: { message }
});

export const registrationFailure = (error: string) => ({
    type: AuthActionTypes.REGISTRATION_FAILURE,
    payload: { error }
});

// Login
export const loginRequest = (payload: LoginPayload) => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: payload
});

export const loginSuccess = (token: string, name: string, role: "user" | "admin", message: string) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: { token, name, role, message }
});

export const loginFailure = (error: string) => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: { error }
});

export const logout = () => ({
    type: AuthActionTypes.LOGOUT
});