// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "http://localhost:4000/api/v1";

const api = {
    login: BASE_URL + '/auth/login',
    register: BASE_URL + '/auth/register',

    patients: BASE_URL + '/patients',

}

export default api;