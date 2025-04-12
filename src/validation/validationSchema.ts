import * as Yup from "yup";
 
export const registrationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters").max(50, "Name cannot exceed 50 characters").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber : Yup.string().matches(/^[6-9][0-9]{9}$/, "Please enter a valid phone number").required("Phone number is required"),
  age : Yup.number().min(0.1,"Minimum age cannot be less than or equal to 0").max(125, "please enter a valid age").required("Age is required"),
  gender : Yup.string().oneOf(["male", "female", "others"], "Gender is required").required("Gender is required"),
  password: Yup.string().min( 6, 'Password must be at least 6 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
  .required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
});
 
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
 
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
});

