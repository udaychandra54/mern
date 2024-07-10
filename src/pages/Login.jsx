import React from "react";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Login</h4>
        <div>
          <FormRow
            name="email"
            type="email"
            id="email"
            className="form-input"
          />
          <FormRow
            name="password"
            type="password"
            id="password"
            className="form-input"
          />
          <button type="submit" className="btn btn-block">
            Login
          </button>
          <button type="submit" className="btn btn-block">
            Explore the App
          </button>
          <p>
            Not a member yet?{" "}
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
