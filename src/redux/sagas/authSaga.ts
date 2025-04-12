import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess, registrationFailure, registrationSuccess } from "../actions/authActions";
import { loginApi, registerApi } from "../../api/services/authServices";
import { AuthActionTypes, LoginPayload, RegistrationPayload } from "../types/authTypes";
import { toast } from "react-toastify";
import { CUSTOM_CODES } from "../../constants/app.constants";

function* loginSaga(action: { type: string; payload: { values: LoginPayload; navigate: (path: string) => void } }): Generator {
    try {
        const response = yield call(loginApi, action.payload.values);
        toast.success(CUSTOM_CODES.LOGIN_SUCCESS.message);
        action.payload.navigate('/');
        yield put(loginSuccess(response.data.data.token, response.data.data.name, response.data.data.role, response.data.message));    } catch (error: any) {
        toast.error(error.response.data.message);
        yield put(loginFailure(error.response.data.message || "Login failed"));
    }
}

function* registrationSaga(action: { type: string; payload: { data: RegistrationPayload; navigate: (path: string) => void } }): Generator {
    try {
        const response = yield call(registerApi, action.payload.data);
        toast.success(response.data.message);
        action.payload.navigate('/auth/login');
        yield put(registrationSuccess(response.data.message));
    } catch (error: any) {
        toast.error(error.response.data.message);
        yield put(registrationFailure(error.response.data.message || "Registration failed"));
    }
}

export function* authSaga() {
    yield takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga);
    yield takeLatest(AuthActionTypes.REGISTRATION_REQUEST, registrationSaga);
}