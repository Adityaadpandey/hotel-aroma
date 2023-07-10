import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "../../Components/Google";
import "./Login.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();

 
  const client =
    "378821471431-sicbspjgtk0bgtbfmdq831q0e90s7mou.apps.googleusercontent.com";
  if (localStorage.getItem("Log") === "true") {
    // window.location.href = "/booking";
    history.goBack()
  }

  return (
    <>
      <div className="container-me">
        <GoogleOAuthProvider clientId={client}>
          <Google />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default Login;
