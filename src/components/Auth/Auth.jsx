import { useState } from "react";

import Nav from "../Nav/Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ close }) => {
  const [Auth, setAuth] = useState("Sign In");

  const handleMenu = (value) => {
    setAuth(value);
  };

  const authItems = [
    {
      id: 1,
      name: "Sign In",
    },
    {
      id: 2,
      name: "Sign Up",
    },
  ];

  return (
    <>
      <Nav items={authItems} handleMenu={handleMenu} />
      {Auth === "Sign In" ? <SignIn close={close} /> : <SignUp />}
    </>
  );
};

export default Auth;
