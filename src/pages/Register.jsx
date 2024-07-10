import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <div>
          <FormRow
            type="text"
            name="name"
            className="form-input"
            labelText="first Name"
            defaultValue="john"
          />
          <FormRow
            type="text"
            name="lastname"
            className="form-input"
            labelText="Last Name"
            defaultValue=""
          />
          <FormRow
            type="text"
            name="location"
            className="form-input"
            labelText="Location"
            defaultValue=""
          />
          <FormRow
            type="email"
            name="email"
            className="form-input"
            labelText="Email"
            defaultValue=""
          />
          <FormRow
            type="password"
            name="password"
            className="form-input"
            labelText="Password"
            defaultValue=""
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
