import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const userObject = jwt_decode(credentialResponse.credential);
        //console.log(userObject);
        localStorage.setItem("user", JSON.stringify(userObject));
        const { name, sub, picture } = userObject;
        const doc = {
          _id: sub,
          _type: "user",
          userName: name,
          image: picture,
        };

        // console.log(credentialResponse);
        localStorage.setItem("image", doc.image);
        localStorage.setItem("Name", doc.userName);
        localStorage.setItem("Log", true);
        // localStorage.setItem("cred",true)
        window.location.reload(false);
        // const dta = localStorage.getItem("image")
        // localStorage.setItem("cred", credentialResponse.clientId);
        // const cred = localStorage.getItem("cred");
        // console.log(dta + "  Login Success");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
export default google;
