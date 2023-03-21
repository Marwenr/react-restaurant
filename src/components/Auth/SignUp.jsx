import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";

const SignUp = () => {
  const style = { width: "100%" };
  const [info, setInfo] = useState({
    id: Math.round(Math.random() * 100),
    userName: "",
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
  };

  return (
    <>
      <Form className="p-4" onSubmit={onSubmitHandler}>
        <h4>Create an Account</h4>

        <Form.Group className="mb-3 mt-4" controlId="formBasicUserName">
          <Form.Control
            type="text"
            name="username"
            placeholder="UserName"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </Form.Group>

        <Button contentButton={"Create an Account"} style={style} />
      </Form>
    </>
  );
};

export default SignUp;
