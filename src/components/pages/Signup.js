import classes from "../../styles/Signup.module.css";
import imageSignup from "../../images/signup.svg";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';
import { useState } from "react";

export default function Signup() {
  const [userName, setUserName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [agree, setAgree]= useState();
  const [error, setError]= useState("");
  const [loading, setLoading]= useState("");
  const {signup}= useAuth()
  const navigate= useNavigate()
  
  async function handleSubmit(e){
      e.preventDefault();
      //password validation
      console.log(password+ confirmPassword+ userName+ email)
      if(password !== confirmPassword){
        console.log(error+"passin")
        return setError("Password Does Not Match")
      }
      console.log(error+"pass")
      try{
        console.log(password+ confirmPassword+ userName+ email+"he")
          setError("");
          setLoading(true)
          await signup(email, password, userName);
          navigate('/')

      }catch(err){
          console.log(err)
          setLoading(false)
          setError("Failed to Sign Up, Please Resubmit Form")
          console.log(error)
          

        }
  }
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image= {imageSignup}/>
        <Form className={classes.signup} action="#" onSubmit={handleSubmit} >
          <Textinput type="text" placeholder="Enter Name" icon="person"
            value={userName} onChange={(e)=> (setUserName(e.target.value))}/>
          <Textinput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <Textinput type="password" placeholder="Enter password" icon="lock"
            value={password} onChange={(e)=> (setPassword(e.target.value))}/>
          <Textinput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
            value={confirmPassword} 
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
          <Checkbox label="I agree to the Terms &amp; Conditions"
            value={agree} onChange={(e)=> setAgree(e.target.value)}/>
          {error && <span className="error" >{error}</span>}
          <Button type="submit" disabled={loading}><span>Sign Up</span></Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
      <Outlet/>
    </>
  );
}
