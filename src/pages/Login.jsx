import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={login}>
        <input type="text" className="form-control" />
        <input type="password" className="form-control" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
