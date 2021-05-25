import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import {Link} from "react-router-dom";

function SignIn() {
  let [inputEmail, setInputEmail] = useState("");
  let [inputPassword, setInputPassword] = useState("");
  const handlesubmit = () => {
   <Link to="/home">
  {   alert(
      `We are matching the provided value of ${inputEmail} to that of the DB`
    )};
   </Link>

  };
  return (
    <div className="signUpBody">
      <div className="imgSignIn">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/methodist-church.png?auto=format&q=60&fit=max&w=930"
          alt=""
        />
        <div className="pagebody">
          <div className="signUpHead">
            <h2>
              Welcome, Please Sign In To TrueVine Christian Centre
              <p></p>
              <p>OR</p>
            </h2>
            <button className="skipSignUp">Skip</button>
          </div>
          <div className="subBody">
            <div className="formDiv">
              <form className="signUpForm" onSubmit={handlesubmit}>
                <input
                  type="text"
                  className="signInName"
                  placeholder="Email/Username..."
                  value={inputEmail}
                  onChange={(e) => setInputEmail((inputEmail = e.target.value))}
                />
                <input
                  type="password"
                  className="signInPassword"
                  placeholder="Password"
                  value={inputPassword}
                  onChange={(e) =>
                    setInputPassword((inputPassword = e.target.value))
                  }
                />
                {/* <Link to="/home"> */}
                <button className="signIpSubmitBtn">
                  Sign Me In
                </button>
                {/* </Link> */}
              </form>
              <div className="SignInFoot">
                <p>
                  Don't have an account? <Link to="/signup"><a href="">Sign up</a></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
