import React from 'react';
 import Validate from './component/validate/validateForm'
import classes from './app.module.css'
import {Route, Switch} from 'react-router-dom'
// import background from './assests/images/background.jpg'
import Success  from './component/loginSuccess/loginSuccess'

function App() {

  return  (
  <Switch>
      <div class={classes.cover}>
          {/* <div class={classes.background}>
            <img className={classes.background} src={background} alt="backgroundImage"/> */}
          <Route path="/" exact component={Validate} />
            {/* <Validate/> */}  
          {/* </div> */}
          {/* <Success/> */}
          <Route path="/checkout" exact component={Success}/>

      </div>
  </Switch>

  ) 
}
export default App;
