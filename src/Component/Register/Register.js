import React from 'react';
import styles from './Rstyle.module.css'
import axios from "axios";
const Register = (props) => {
    const handleOnclick=async(e)=>{
        e.preventDefault();
        console.log("Trying To Register .....")
        const useremail= localStorage.getItem("user_email");
        if(useremail){
          axios.post('http://localhost:5000/api/users/eventRegister', {
            email: useremail,
            event: props.title,
          })
          .then(function (response) {
            console.log(response);
            props.func(response.data);
          })
          .catch(function (error) {
            console.log(error);
            props.func(error.data);
          });
        }}
        
  return (
    <div className={styles.buttonbox}>
    <button  className={styles.button_register}>Register</button>
    </div>
  );
}

export default Register;
