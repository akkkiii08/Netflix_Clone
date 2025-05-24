import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signUp} from '../../firebase'
import { useState } from 'react'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In") ;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign Up"){
      await signUp(name,email,password);
    }else{
      await login(email,password);
    }
    setLoading(false);

  }
  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="Loading..." /> 
    </div>:
    <div className='login'>
      <img src={logo} alt="Netflix Logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up" ?
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your name'/> : ""}
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
          
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
            <input type="checkbox"/>
            <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In" ?
          <p>New to Netflix ?<span onClick={()=>{setSignState("Sign Up")}}>Sign up now</span></p>
          :<p>Already have account ?<span onClick={()=>{setSignState("Sign In")}}>Sign in now</span></p>
        }
        </div>
      </div>
      
    </div>
  )
}

export default Login
