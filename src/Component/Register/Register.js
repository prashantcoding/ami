import React, { useState } from 'react';
import styles from './Rstyle.module.css'
import axios from "axios";
import Alert from '../Alert/Alert';

const Register = (props) => {
  const [alert, setalert] = useState(false);
  const [data,setdata]=useState('');
   
    const show=(value)=>{
        setalert(value);
    }
    const[num,setnum]=useState('')
    const handleChange=async(e)=>{ 
      e.preventDefault();
      console.log(num);
      
      setnum(e.target.value);
      
    }
    const handleOnclick=async(e)=>{
        e.preventDefault();
        console.log("Trying To Register .....")
        
        
          axios.post('http://localhost:5000/api/event/eventRegister', {
            event: props.title,
            number:num,
          },{
            headers: {'Auth_token':localStorage.getItem('Auth_token')},
          })
          .then(async(response)=>{
              console.log(response)
              setalert(true);
              setdata(response.data)
              
          }
          )
          .catch(function (error) {
            console.log(error);
            
            setdata(error);
            setalert(true);
            
          });
        }
        
  return (
    <>
    <div className={styles.alert_box}>
    {alert&&<Alert data={data} disp={show} />}
    </div>
    <div className={styles.buttonbox}>
    <input type="text" onChange={handleChange} className={styles.enter} placeholder="Enter Phone Number "></input>
    <button onClick={handleOnclick}className={styles.button_register}>Register</button>
    </div>
    
    </>
  );
}

export default Register;
