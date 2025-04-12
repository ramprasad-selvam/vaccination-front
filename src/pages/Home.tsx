import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import AdminDashboard from "./AdminDashboard";
import PatientDashboard from "./PatientDashboard";


const Home: React.FC = () => {
  type TDesignation = 'provider' | 'patient';
  // Use store to get the user role
  const { role } = useSelector((state: RootState) => state.auth);

  if (!role) {
    return <div>Loading...</div>;
  }

  // Ensure role matches one of the allowed values
  const designation: TDesignation = role as TDesignation;

  return (
    <div className="overflow-auto">
      {designation === "patient" && <PatientDashboard />}
      {designation === "provider" && <AdminDashboard />}
    </div>
  );
};

export default Home;