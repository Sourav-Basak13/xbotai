import { useState } from "react";
import "./App.css";

const intialData = {
  username: "",
  password: "",
};

function App() {
  const [formState, setFormState] = useState(intialData);
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.username === "user" && formState.password === "password") {
      setIsLogin(true);
      error && setError(false);
      // setFormState(intialData);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      {!isLogin && (
        <>
          <div>
            <label>Username:</label>
            <input
              value={formState.username}
              placeholder="username"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, username: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              value={formState.password}
              placeholder="password"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>
          <button type="submit">Submit</button>
        </>
      )}
      {isLogin && <p>Welcome, {formState.username}!</p>}
    </form>
  );
}

export default App;
