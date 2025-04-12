import axios from "axios";
import api from "..";
import { LoginPayload, RegistrationPayload } from "../../redux/types/authTypes";

//Auth
export const loginApi = (payload : LoginPayload) =>{
    return axios.post(api.login, payload)
}

export const registerApi = (payload : RegistrationPayload ) => {
    return axios.post(api.register, payload);
}
