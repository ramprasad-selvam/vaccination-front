import logo from "../assets/logo.svg";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on change
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("https://your-api.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await res.json();
      setSuccess("Registration successful!");
      setFormData({ name: "", username: "", password: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" role="main">
      <img src={logo} alt="Company Logo" className="logo" />
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" autoComplete="username" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="new-password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
