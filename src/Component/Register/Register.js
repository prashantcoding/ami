import React, { useState } from 'react';
import styles from './Rstyle.module.css'
import axios from "axios";
import Alert from '../Alert/Alert';
const Register = (props) => {
  const [alert, setalert] = useState(false);
    const [alert_data,setalert_data]=useState('');
    const get_alert=(data)=>{
      console.log("get_alert is reaching here");
      setalert(true)
      setalert_data(data);
      
    }
    const show=(value)=>{
        setalert(value);
    }
    const handleOnclick=async(e)=>{
        e.preventDefault();
        console.log("Trying To Register .....")
        
        
          axios.post('http://localhost:5000/api/event/eventRegister', {
            event: props.title,
            
          },{
            headers: {'Auth_token':localStorage.getItem('Auth_token')},
          })
          .then((response)=>{
              console.log(response)
               setalert_data(response.data);
              setalert(true);
          }
          )
          .catch(function (error) {
            setalert_data(error.data);
              setalert(true);
            
          });
        }
        
  return (
    <>
    <div className={styles.alert_box}>
    {alert&&<Alert data={alert_data} disp={show} />}
    </div>
    <div className={styles.buttonbox}>
    
    <button onClick={handleOnclick}className={styles.button_register}>Register</button>
    </div>
    
    </>
  );
}

export default Register;
