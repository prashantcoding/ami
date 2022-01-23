import React from "react";
import { GoogleLogin } from "react-google-login";

import axios from "axios";
function SignIn() {
    const responseGoogle = async(response) => {
        
       axios({
            method: "post",
            url: "http://localhost:5000/api/users/register",
            
            data: {
              id:response.profileObj.googleId,
              email:response.profileObj.email,
              name:response.profileObj.name,
            },
            
          }).then((res) => {
            console.log(res);
            localStorage.setItem('Auth_token',res.data.Auth_token)
            
          })
          .catch((err) => console.log(err));;
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