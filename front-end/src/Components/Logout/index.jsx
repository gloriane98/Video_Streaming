import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../ContextAccount";


const Logout = () => {
  const { setUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  const NavigateSignIn = () => {
    setUserToken(null);
    localStorage.removeItem("userImage");
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <div id="btn-logout" onClick={NavigateSignIn}>
        LogOut
      </div>
    </>
  );
};

export default Logout;
