import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";

const SignUp = ({ close }) => {
  const style = { width: "100%" };
  const [info, setInfo] = useState({
    id: Math.round(Math.random() * 100),
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInfo((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInfo({
      id: "",
      name: "",
      email: "",
      number: 0,
      gender: "",
    });
    close();
  };

  return (
    <>
      <Form className="p-4" onSubmit={onSubmitHandler}>
        <h4>Create an Account</h4>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control
            id="name"
            type="text"
            name="name"
            placeholder="UserName"
            value={info.name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Control
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            value={info.email}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={info.password}
            onChange={handleInput}
          />
        </Form.Group>

        <Button contentButton={"Create an Account"} style={style} />
      </Form>
    </>
  );
};

export default SignUp;
