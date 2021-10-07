import React from "react";
import { FormSec, FormDesc1, GotoSignUp } from "./StyleLoginForm";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <>
      <FormSec>
        {/* Login FORM  */}
        <FormDesc1>
          <p>Login Form.</p>
        </FormDesc1>
        <GotoSignUp>
          <p>
            Dont you have an acount? <Link to="/register">Sign Up</Link>
          </p>
        </GotoSignUp>
        <form action="">
          <div className="form-item">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button>login</button>
        </form>
      </FormSec>
    </>
  );
};
