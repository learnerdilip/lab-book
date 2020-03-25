import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../store/user/action";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input } from "@material-ui/core";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  if (state.userState.token) {
    history.push("/");
    return (
      <div className="loginhomeredirect">
        <h2>Welcome, You are Logged in!</h2>
        <Link to="/">GO TO HOME</Link>
      </div>
    );
  }
  return (
    <div>
      <h2>Please Login here!</h2>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>EMAIL*</InputLabel>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>PASSWORD*</InputLabel>
          <Input
            type="text"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoginContainer;
