import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validation/validationSchema";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";
import { AuthActionTypes } from "../redux/types/authTypes";
import { Link, useNavigate } from "react-router-dom";
 

/**
 * @returns Login page to login with email and password
 */
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-indigo-200 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
 
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={ async (values , { setSubmitting, resetForm }) => {
          dispatch({type : AuthActionTypes.LOGIN_REQUEST, payload : { values, navigate }})
          setSubmitting(false);
          resetForm()
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4" noValidate>
            <InputField label="Email" name="email" type="email" placeholder="Enter your email" required={true}/>
            <InputField label="Password" name="password" type="password" placeholder="Enter your password" required={true}/>
 
            <Button text="Login" type="submit" disabled={isSubmitting} style="w-full bg-blue" />

            <Link to={"/auth/register"}>New user? <span className="text-blue-400 underline">Register</span></Link>
          
          </Form>
        )}
      </Formik>
    </div>
  );
};
 
export default Login;