import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../store/user/action";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: ""
  };
  const [loginData, setLoginData] = useState(initialState);

  const state = useSelector(reduxState => {
    return {
      userState: reduxState.user
    };
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendLogin(loginData));
    setLoginData(initialState);
  };

  if (state.userState.token)
    return (
      <div className="loginhomeredirect">
        <h2>Welcome, You are Logged in!</h2>
        <Link to="/">GO TO HOME</Link>
      </div>
    );
  return (
    <div>
      <h2>Please Login here!</h2>
      <form onSubmit={handleSubmit}>
        <label>EMAIL*</label>
        <input
          type="email"
          name="email"
          value={setLoginData.email}
          placeholder="Your email"
          onChange={handleChange}
        />
        <label>PASSWORD*</label>
        <input
          type="text"
          name="password"
          value={setLoginData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginContainer;
