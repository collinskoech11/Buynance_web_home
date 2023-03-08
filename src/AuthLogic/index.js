import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  localStorage.clear()
  if (isAuthenticated) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  if (!JSON.parse(localStorage.getItem("user"))) {
    return (
      <>
        <button className="yellow_button" onClick={() => loginWithRedirect()} style={{color:"#000"}}>
          Get Started
        </button>
      </>
    );
  }
  const user_info = JSON.parse(localStorage.getItem("user"));
  const logout_fx = () => {
    localStorage.clear();
    logout();
  };
  return (
    <>
      <button
        className="grey_button yellow_button"
        style={{ border: "1px solid yellow", color: "yellow" }}
      >
        {user_info.given_name}
      </button>
      <button className="yellow_button " onClick={logout_fx}>
        Start Buying Crypto
      </button>
    </>
  );
}

export default Login;
