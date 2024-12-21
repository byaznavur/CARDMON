import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Username va passwordni to'ldiring!");
      return;
    }

    setError("");
    console.log("Username:", username, "Password:", password);

    navigate("/home");
  };

  return (
    <div className="container vh-100 d-flex align-items-center flex-column justify-content-center">
      <h2>Login</h2>

      <form
        onSubmit={login}
        className="d-flex align-items-center flex-column justify-content-center"
      >
        <label>
          Username
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
            className="form-control"
          />
        </label>
        <label>
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            className="form-control"
          />
        </label>
        {error && <p className="text-danger mt-2">{error}</p>}{" "}
        <button className="btn w-100 mt-2 btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
