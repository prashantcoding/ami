import React from 'react';
import styles from "./knowStyle.module.css";
import poster from "./dacne.jpg";
import cod1 from "./cod1.jfif";
import cod2 from "./cod2.jfif";
import cod3 from "./cod3.jfif";
const KnowMore = () => {
    const handleOnclick=async()=>{
            console.log('Registered')
    }
    return (
        <div className={styles.container}>
            <div className={styles.poster}></div>
                <img src={poster} className={styles.poster_img}></img>
             <div>
             <h1 className={styles.rules_and_reg}>Rules and Regulations</h1>
             </div>
             <hr className={styles.break}/>
                <div className={styles.Rulescontainer}>
             <h3 className={styles.rules}>i)Participation in the Youth Festival is open to AUMP students and bonafide regular students of educational Institutes anywhere.</h3>
             <h3 className={styles.rules}>
             ii) The upper age limit on 1st February of the Academic year will be 25 years (valid certificate to be given by the participant).
             </h3>
             <h3 className={styles.rules}>
             iii)Maximum 25 students can be part of a team. Three accompanists would be allowed.
             </h3>
             <h3 className={styles.rules}>
             iv)The willing team needs to register themselves till 31st of January 2019. The REGISTRATION FEE (non-refundable) is Rupees 100/- (One Hundred) per person. 
             </h3>
             </div>
             <h1 style={{margin:'1%'}}>Coordinators</h1>
             <div className={styles.coordinators}>
                 <div className={styles.cod_small_containers}>
                 
                 <img src={cod1} className={styles.cod_img}></img>
                
                 </div>
                 <div className={styles.cod_small_containers}>
                 <img src={cod2} className={styles.cod_img}></img>
                 
                 </div>
                 <div className={styles.cod_small_containers}>
                 <img src={cod3} className={styles.cod_img}></img>
                 
                 </div>

             </div>
             <button onClick={handleOnclick} className={styles.button_register}>Register</button>
        </div>
    )
}

export default KnowMore
