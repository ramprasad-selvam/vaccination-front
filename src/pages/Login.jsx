function Login() {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required style={styles.input} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required style={styles.input} />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;
