import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hello World</h1>
      <p>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/profile">Profile</Link> | <Link to="/patient">Patient</Link>
      </p>
    </div>
  );
}

export default App;
