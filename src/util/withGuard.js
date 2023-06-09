import React from "react";
import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Wraper = (props) => {
    const { isLoggedIn } = useSelector(state => state.auth);
    return isLoggedIn ? <Component {...props} /> : <div>Please log in first</div>;
  };
  return Wraper;
};

export default withGuard;
