import React, { useState } from "react";
import {
  FormSec,
  FormTitle,
  FormDesc1,
  FormDesc2,
  GotoSignUp,
} from "./StyleForm";
import { Link } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState();
  const [emailvalue, setEmailValue] = useState();
  // const [username, setUsername] = useState();
  const [uservalue, setUserValue] = useState();
  // const [password, setPassword] = useState();
  const [passvalue, setPassValue] = useState();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(emailvalue);
  };
  // const usernameHandler = (e) => {
  //   e.preventDefault();

  //   setUsername(e.target.value);
  // };

  return (
    <>
      <FormSec>
        {/* REGISTER FORM  */}
        <FormTitle>
          <h1>Unlimited movies, TV shows, and more.</h1>
        </FormTitle>

        {!email ? (
          <>
            <FormDesc1>
              <p>Watch anywhere. Cancel anytime.</p>
            </FormDesc1>
            <FormDesc2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </FormDesc2>
            <GotoSignUp>
              <p>
                Already have an acount? <Link to="/login">Sign In</Link>
              </p>
            </GotoSignUp>
            <div className="starter">
              <div className="form-item">
                <label
                  style={{ opacity: `${emailvalue ? 0 : 1}` }}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <button onClick={emailHandler}> your email</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <FormDesc2>
              <p>Enter your username and password</p>
            </FormDesc2>
            <form action="">
              <div className="form-item">
                <label
                  style={{ opacity: `${uservalue ? 0 : 1}` }}
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  onChange={(e) => setUserValue(e.target.value)}
                />
                <button>username</button>
              </div>
              <div className="form-item">
                <label
                  style={{ opacity: `${passvalue ? 0 : 1}` }}
                  htmlFor="password"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassValue(e.target.value)}
                />
                <button>password</button>
              </div>
            </form>
          </>
        )}
      </FormSec>
    </>
  );
};
