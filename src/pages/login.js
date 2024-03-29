import {Form,Button} from "react-bootstrap"
import PlzLogin from "../assets/images/PlzLogin.png";

import { useNavigate} from "react-router-dom"
import { useRef } from "react";
import {auth} from '../firebase'



import { signInWithEmailAndPassword } from "firebase/auth";


function Login({loggedIn,handleLoggedIn}) {
  const navigate = useNavigate();
  const email = useRef(null);
  const pass = useRef(null);
  const handleSubmit = (event) =>{
    event.preventDefault();
    // handleLoggedIn();
    // console.log(loggedIn);
    signInWithEmailAndPassword(auth,email.current.value , pass.current.value)
    .then((authUser) =>{

   
    })
    .catch((error)=> alert(error.message))


    navigate('/');



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
      }} onSubmit={handleSubmit}>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label style={{
      color:"white"
    }}>Email address</Form.Label>
    <Form.Control ref={email} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{
      color:"white"
    }}>Password</Form.Label>
    <Form.Control ref={pass} type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Login;
