import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import classes from './validateForm.module.css'
 import background from '../../assests/images/background.jpg'
import {Redirect} from 'react-router-dom' 


const ValidatedLoginForm = () => {

  return( 
  <Formik 
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);  
        window.location.href="http://localhost:3000/checkout"
        // return(
            // <Redirect to="/checkout"/>
            // console.log('redirecting')
        // )      
      }, 500);
    }}
  
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className={classes.agb}>
          <div class={classes.background}>
          <img className={classes.background} src={background} alt="backgroundImage"/>
        <div className={classes.form__box}>
          <h2> Login </h2>
          <form onSubmit={handleSubmit}>
            <label className={classes.label} htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
             
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              // className={errors.email && touched.email && "error"}
              className={classes.input}
            />
            {errors.email && touched.email && (
              <div style={{"color":"red"}} className={classes.feeds}>{errors.email}</div>
            )}
            
            <label className={classes.label} htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
             
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              // className={errors.password && touched.password && "error"}
              className={classes.input}
            />
            {errors.password && touched.password && (
              <div style={{"color":"red","marginTop":"0px"}} className={classes.feeds}>{errors.password} </div>
            )}
            <p className={classes.firstParagraph}> forgot password</p>
            {/* <Link to={isSubmitting && "/checkout"} onClick={()=>console.log(isSubmitting)}> */}
             <button className={classes.btn} type="submit"  disabled={isSubmitting}>
              Log in
            </button> 
            {/* </Link> */}
             {/* <div className={classes.btt}>  
          <a href="/"  type="submit" disabled={isSubmitting}  
              className={classes.btn}> Login </a> 
               </div>   */}
           </form>
           


            <div className={classes.last}>
              <p  className={classes.span__1}> don't have an account? </p> 
              <p className={classes.span__2}> sign up </p> 
            </div>
        </div>
        </div>

        
          
</div>

      );
    }}
  </Formik>
)}

export default ValidatedLoginForm;
