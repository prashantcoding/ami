import React from "react";
import { GoogleLogin } from "react-google-login";


function SignIn() {
    const responseGoogle = (response) => {
        console.log("HIi")
        console.log(response);
      }
      
  return (
    <GoogleLogin
      clientId="936450679141-cfca18f007e6322fadv7l1s3b7qokh20.apps.googleusercontent.com"
      
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;