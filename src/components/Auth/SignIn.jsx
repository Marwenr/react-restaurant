import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";

import { useDispatch } from "react-redux";
import { signIn } from "../../store/authSlice";

import { users } from "../../data/data";

const SignIn = ({ close }) => {
  const dispatch = useDispatch();

  const style = { width: "100%" };
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInfo((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    users.find((el) => el.email === info.email)
      ? users.find((el) => el.password === info.password)
        ? dispatch(signIn(true))
        : dispatch(signIn(false))
      : dispatch(signIn(false));
    close();
    setInfo({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form
        className="p-4"
        onSubmit={onSubmitHandler}
        style={{ width: "100%" }}
      >
        <h4>Sign in or Create an Account</h4>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={info.email}
            placeholder="Email address"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={info.password}
            placeholder="Password"
            onChange={handleInput}
          />
        </Form.Group>

        <Button contentButton={"Sign In"} style={style} type={"submit"} />
      </Form>
    </>
  );
};

export default SignIn;
