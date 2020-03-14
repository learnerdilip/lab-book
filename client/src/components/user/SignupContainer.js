import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendSignup } from "../../store/user/action";
import { Link } from "react-router-dom";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
    name: ""
  };
  const [signupData, setSignupData] = useState(initialState);
  // console.log("the signup state--", signupData);

  const state = useSelector(reduxState => {
    return {
      userState: reduxState.user
    };
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setSignupData(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendSignup(signupData));
    setSignupData(initialState);
  };

  if (state.userState.newUser)
    return (
      <div className="loginhomeredirect">
        <h2>You are registered now!</h2>
        <Link to="/">GO TO HOME</Link>
        <br />
        <Link to="/login">GO TO LOGIN</Link>
      </div>
    );
  return (
    <div>
      <h2>Please SignUp here!</h2>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={signupData.email}
          placeholder="Your email"
          onChange={handleChange}
        />{" "}
        <label>PASSWORD</label>
        <input
          type="text"
          name="password"
          value={signupData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={signupData.name}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupContainer;
