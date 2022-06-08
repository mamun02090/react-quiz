import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../../images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";
import {useAuth} from '../../contexts/AuthContext'
import { useState } from "react";

export default function Login() {
  const {login}= useAuth();
  const [email, setEmail]= useState();
  const [password, setPassword]= useState();
  const [loading, setLoading]= useState();
  const [error, setError]= useState()
  const navigate= useNavigate();

  async function handleLogin(e){
      e.preventDefault();
      try{
        setError("");
        setLoading(true)
        await login(email, password)
        navigate('/')

      }catch(err){
        console.log("Error")
        setError("Failed to Login");
        setLoading(false)
      }
  }
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={imageLogin} />
        <Form className={classes.login} action="#" onSubmit={handleLogin}>
          <Textinput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
            value={email}
            onChange= {(e)=> setEmail(e.target.value)}         
          />
          <Textinput type="password" placeholder="Enter Password" icon="lock" value={password}
            onChange= {(e)=> setPassword(e.target.value)}/>
          {error && <p className="error">{error}</p>}
          <Button disabled={loading} type="submit"><span>Login</span></Button>
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
