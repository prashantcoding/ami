import React from 'react';
import Login from './Login'
import styles from './Lstyles.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const LogOut = (props) => {
    let history=useHistory();
    const logout=async()=>{

        await localStorage.clear();
        history.push('/');
    }
  return(
    <div className={styles.box}>
    <button className={styles.button} onClick={logout} >LogOut</button>
    </div>
  )
    
};

export default LogOut;
