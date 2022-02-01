import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import styles from './Lstyles.module.css'
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignIn(props) {
   let history=useHistory();
    const [status, setstatus] = useState('');
    const responseGoogle = async(response) => {
        console.log(response);
       axios({
          
            method: "post",
            url: "http://localhost:5000/api/users/register",
            
            data: {
              id:response.profileObj.googleId,
              email:response.profileObj.email,
              name:response.profileObj.name,
            },
            
          }).then(async(res) => {
            
           await localStorage.setItem('Auth_token',res.data.Auth_token)
            history.push('/');
          })
          .catch((err) => console.log(err));;
      }
     
  return (
    
    <GoogleLogin
      clientId="936450679141-cfca18f007e6322fadv7l1s3b7qokh20.apps.googleusercontent.com"
      render={renderProps => (
        <div className={styles.box}>
        <button className={styles.button} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        </div>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      
      cookiePolicy={"single_host_origin"}
    />
    
    
  );
}

export default SignIn;