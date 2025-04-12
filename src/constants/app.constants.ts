import packageJson from '../../package.json';

export const appConstants = {
    APP_NAME: packageJson.name,
    APP_ICON: "ABC",
    APP_BG_PRIMARY: "bg-indigo-400",
    APP_BG_SECONDARY: "bg-indigo-400",
}

export const CUSTOM_CODES = {

    LOGIN_SUCCESS: {
        code: "LOGIN_USER_1101",
        message: "Logged in successfully"
    },
    LOGIN_FAILED: {
        code: "LOGIN_USER_4101",
        message: "Failed to login"
    },

    REGISTER_SUCCESS: {
        code: "REGISTER_USER_1102",
        message: "Registeres successfully"
    },

    EXISTING_USER: {
        code: "USER_EXISTS_4103",
        message: "User already exists, please login"
    },

    REGISTERN_FAILED: {
        code: "REGISTER_USER_4102",
        message: "Failed to register"
    },

    INVALID_CREDENTIALS: {
        code: "INVALID_CREDENTIALS_4104",
        message: "Invalid credentials"
    },
}

export const ERROR_CODES = {
    SERVER_ERROR: {
        code: "INTERNAL_SERVER_ERROR_4400",
        message: "server error, please try again"
    },
    UNAUTHORIZED: {
        code: "UNAUTHORIZED_4401",
        message: "You are not authorized"
    },
    FORBIDDEN: {
        code: "FORBIDDED_4402",
        message: "You are not authorized"
    },
    BAD_REQUEST: {
        code: "BAD_REQUEST_4403",
        message: "Bad request, please try a different way"
    },
    NOT_FOUND: {
        code: "NOT_FOUND_4404",
        message: "Not found"
    },

    METHOD_ERROR: {
        code: "METHOD_NOT_ALLOW_4405",
        message: "Method not allowed, please check the http method used"
    },

    SUCCESS: {
        code: "SUCCESS 200",
        message: "OK"
    },
}

export const HEADERS = {
    JSON: { "Content-Type": "application/json" },
};