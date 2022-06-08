import {Form,Button} from "react-bootstrap"
import PlzLogin from "../assets/images/PlzLogin.png";
<<<<<<< HEAD
import { Navigate, useNavigate} from "react-router-dom"
import { useEffect } from "react";


function Login({loggedIn,handleLoggedIn}) {
  const navigate = useNavigate()
  const useHandleSubmit = (event) =>{
    event.preventDefault();
    handleLoggedIn();
    console.log(loggedIn);


    navigate('/');



=======

function Login() {
  const handleSubmit = (event) =>{
    event.preventDefault();
>>>>>>> 816960978137ffa8f04f94808043ca41b3ad17a2
  }
  return (
    <div className="Login" style={{
      backgroundImage:  "url(" + PlzLogin + ")",
      opacity:"0.8",
      backgroundColor: "black",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "91.9vh",
      width: "99.99vw",
      position:"relative",
      zIndex: "0",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Form style={{
        width:"40%"
<<<<<<< HEAD
      }} onSubmit={useHandleSubmit}>
=======
      }} onSubmit={handleSubmit}>
>>>>>>> 816960978137ffa8f04f94808043ca41b3ad17a2
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label style={{
      color:"white"
    }}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{
      color:"white"
    }}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Login;
