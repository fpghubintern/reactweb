import React from 'react'
import classes from './loginSuccess.module.css'
import mark from '../../assests/images/correct.png'

const success = () => (

 <div className={classes.cover}>
    <div className={classes.background}> 
    
    

        <div className={classes.form__box}>
            <div className={classes.image_container}> 
                <img  className={classes.image} src={mark} alt='mark Logo'/>
             </div>
             <div className={classes.para_div} > <p className={classes.para}> Log in successful </p></div>
             <div className={classes.btt}><a href="/"  className={classes.btn}> Go to dashboard </a> </div>
        </div>
   </div>
</div>
)



export default success;