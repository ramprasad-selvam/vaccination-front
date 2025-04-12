import logo from "../assets/logo.svg";

function Register() {
  return (
    <div className="container" role="main">
      <img src={logo} alt="Company Logo" className="logo" />
      <h2>Register</h2>
      <form>
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
