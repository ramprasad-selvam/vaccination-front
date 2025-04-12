import { Formik, Form} from "formik";
import { useDispatch } from "react-redux";
import { registrationSchema } from "../validation/validationSchema";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";
import { AuthActionTypes } from "../redux/types/authTypes";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/reusable/Dropdown";


const initialValues = {
  name: "",
  email: "",
  phoneNumber: '',
  gender: "",
  age: '',
  password: "",
  confirmPassword: ""
}

const genderOptions = [
  {value : undefined,  label : "Select gender"},
  {value : "male",  label : "Male"},
  {value : "female",  label : "Female"},
  {value : "others",  label : "Others"},
]


/**
 * @returns Registration page with all data required for register as user
 */
const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-lg my-20 mx-auto p-6 bg-indigo-200 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { name, email, phoneNumber, gender, age, password } = values
          const payload = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            age: age,
            gender: gender,
            password: password,
          }
          dispatch({ type: AuthActionTypes.REGISTRATION_REQUEST, payload: {data: payload, navigate }});
          setSubmitting(false);
          resetForm()
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4" noValidate>
            <InputField label="Name" type="text" name="name" placeholder="Enter your name" required={true} />
            <InputField label="Email" name="email" type="email" placeholder="Enter your email" required={true} />
            <InputField label="Phone Number" name="phoneNumber" type="number" placeholder="Enter your phone number" min="0" required={true} />
            <div className="flex justify-between items-center">
            <InputField label="Age" name="age" type="number" placeholder="Age" required={true} />
            <Dropdown label="Gender" name="gender" options={genderOptions} required={true} />
            </div>
            <InputField label="Password" name="password" type="password" placeholder="Enter your password" required={true}  />
            <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm password" required={true}  />

            <Button text="Submit" type="submit" disabled={isSubmitting} style="w-full" />
            <Link to={"/auth/login"}>Already a user? <span className="text-blue-400 underline"> Login</span></Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
