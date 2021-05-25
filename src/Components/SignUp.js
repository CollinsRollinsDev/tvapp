import react, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
  let [fullName, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [role, setRole] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setconfirmPassword] = useState("");
  let [selectValue, setSelectValue] = useState("");
  let selection = (
    <select
      name="Role"
      id=""
      className="signUpSelect"
      value={selectValue}
      onChange={(e) => setSelectValue((selectValue = e.target.value))}
    >
      <option value="working">Choose a Role</option>
      <option value="Member">Member</option>
      <option value="Worker">Worker</option>
    </select>
  );
  useEffect(() => {
    console.log(selectValue);
  });
  const handleSignUpSubmit = () => {
      let alert2;
      alert(`Your details are about to be sent to the datebase!
      they are:
      ${fullName}
      ${email}
      ${mobileNumber}
      ${role}
      ${password}
      ......Please make sure these are correct!
      `)
      if(alert){
       alert2 = alert(`WELCOME TO THE FAMILY!`);
    }
    // if(alert){
    //     alert(`Going to home page`)
    // }
  }

  return (
    <div className="signUpBody">
      <div className="imgSignUp">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/methodist-church.png?auto=format&q=60&fit=max&w=930"
          alt=""
        />
        <div className="pagebody">
          <div className="signUpHead">
            <h2>
              Welcome, Please Register To Become A Family With TrueVine
              Christian Centre
              <p></p>
              <p>OR</p>
            </h2>
            <Link to="/home">
            <button className="skipSignUp">Skip</button>
            </Link>
          </div>

          <div className="formDiv">
            <form onSubmit={handleSignUpSubmit} className="signUpForm">
              <input
                type="text"
                className="signUpName"
                placeholder="Enter your full name here...."
                value={fullName}
                onChange={(e) => setFullname((fullName = e.target.value))}
              />
              <input
                type="text"
                className="signUpEmail"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail((email = e.target.value))}
              />
              <input
                type="number"
                className="signUpNumber"
                placeholder="Mobile Number..."
                value={mobileNumber}
                onChange={(e) =>
                  setMobileNumber((mobileNumber = e.target.value))
                }
              />
              {selection}
              <input
                type="password"
                className="signUpPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword((password = e.target.value))}
              />
              <input
                type="password"
                className="signUpConfirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setconfirmPassword((confirmPassword = e.target.value))
                }
              />
              <Link to="/home">
              <button className="signUpSubmitBtn">Sign Me Up</button>
              </Link>
            </form>
            <div className="SignUpFoot">
              <p>
                Have an account? <Link to="/signin"><a href="#">Sign in</a></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
