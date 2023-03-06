import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if (isAuthenticated) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  if (!JSON.parse(localStorage.getItem("user"))) {
    return (
      <>
        <button
          className="grey_button yellow_button"
          onClick={() => loginWithRedirect()}
          style={{border:"1px solid yellow", color:"yellow"}}
        >
          Login
        </button>
        <button className="yellow_button " onClick={() => loginWithRedirect()}>
          Register
        </button>
      </>
    );
  }
  const user_info = JSON.parse(localStorage.getItem('user'))
  const logout_fx = () => {
    localStorage.clear()
    logout()
  }
  return (
    <>
      <button
        className="grey_button yellow_button"
        style={{border:"1px solid yellow", color:"yellow"}}
      >
        {user_info.given_name}
      </button>
      <button className="yellow_button " onClick={logout_fx}>
          Log Out
        </button>
    </>
  );
}

export default Login;
