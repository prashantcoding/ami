import axios from 'axios';
import React, { useState } from 'react';
import styles from './Astyle.module.css'
import showUser from './showUser';
import exportFromJSON from 'export-from-json'

const AdminHome = () => {
  
    const handleOnclick=async(e)=>{
        e.preventDefault();
        console.log("Trying To Register .....")
        
        
          axios.get('http://localhost:5000/api/admin/getAlluser', {
            headers: {'Auth_token':localStorage.getItem('Auth_token')},
          })
          .then((response)=>{
              
              const data = [response.data]  
              const fileName = 'download'  
              const exportType = 'csv'
              exportFromJSON({ data, fileName, exportType })
          }
          )
          .catch(function (error) {
            
          });
        }
        const handleOnclick2=async(e)=>{
          e.preventDefault();
          console.log("Trying To Register .....")
          const event= await window. prompt("Enter Event name ");
          
            if(!event) return;
            console.log(event);
            
            axios.post('http://localhost:5000/api/admin/getSomeuser', 
              
  
               { event:event}
                
              ,{
            headers: {'Auth_token':localStorage.getItem('Auth_token')},
          })
            .then((response)=>{
              var data2=response.data;
              console.log(response);
                if(Object.keys(data2).length===0) return;
                
                const data = [response.data]  
                const fileName = 'download'  
                const exportType = 'csv'
                exportFromJSON({ data, fileName, exportType })
            }
            )
            .catch(function (error) {
               console.log(error);
            });
          }
   return( 
     <>
     <div className={styles.box}>
    <button className={styles.button} onClick={handleOnclick}>Get Registerd User</button></div>
    <div className={styles.box}>
    <button className={styles.button} onClick={handleOnclick2}>Get Particular User</button></div>
     </>
   )
}

export default AdminHome;

