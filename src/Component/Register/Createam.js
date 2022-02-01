import React, { useState } from 'react';
import styles from './Rstyle.module.css'
import axios from "axios";
import Alert from '../Alert/Alert';
import Jointeam from './Jointeam';
const Createam = (props) => {
  const [alert, setalert] = useState(false);
    const [alert_data,setalert_data]=useState('');
    const get_alert=(data)=>{
      console.log("get_alert is reaching join team here");
      setalert(true)
      setalert_data(data);
      
    }
    const show=(value)=>{
        setalert(value);
    }
    const[name,setname]=useState('');
    const handleOnchange=async(e)=>{
        e.preventDefault();
        setname(e.target.value);
    }
    const handleOnclick=async(e)=>{
        e.preventDefault();
        console.log("Trying To Register team .....")
            if(name.length<4){
                setalert_data("Team Name should Have Atleast 4 characters");
                setalert(true);
                return;
            }
            
          axios.post('http://localhost:5000/api/team/teamRegister', {
            event: props.title,
            TeamName:name,
          },{
            headers: {'Auth_token':localStorage.getItem('Auth_token')},
          })
          .then((response)=>{
              console.log("Team is reaching here")
              console.log(response)
               setalert_data(response.data);
              setalert(true);
          }
          )
          .catch(function (error) {
              console.log(error)
            setalert_data(error.data);
              setalert(true);
            
          });
        }
        
  return (
    <>
    <div className={styles.alert_box}>
    
    </div>
    <div className={styles.buttonbox}>
    {alert&&<Alert data={alert_data} disp={show} />}
    <input type="text" onChange={handleOnchange} className={styles.enter}placeholder="Enter Team Name"></input>   
    <button onClick={handleOnclick}className={styles.button_register}>Create Team</button>
    
    
    </div>
    <Jointeam title={props.title}></Jointeam>
    </>
  );
}

export default  Createam;
