import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendSignup } from "../../store/user/action";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input } from "@material-ui/core";

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
      <form className="loginlogoutform" onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>EMAIL*</InputLabel>
          <Input
            label="Standard"
            type="email"
            name="email"
            value={signupData.email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>PASSWORD*</InputLabel>
          <Input
            label="Standard"
            type="text"
            name="password"
            value={signupData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>NAME</InputLabel>
          <Input
            label="Standard"
            type="text"
            name="name"
            value={signupData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignupContainer;
