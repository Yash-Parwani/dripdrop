import { LinkContainer } from "react-router-bootstrap";
import DripPage from "../assets/images/DripPage.png"
import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import db from "..firebase/";
import { setDoc ,doc } from "firebase/firestore";
import { auth } from "./firebase";



function Drip({loggedIn,usertype,phone,id}) {
  const navigate = useNavigate();
  const handleSubmit =async (event) =>{
    event.preventDefault();
    const unit = event.target.formBasicUnits.value;
    const blood = event.target.formBasicBlood.value;
    const location = event.target.formBasicLocation.value;
    await setDoc(doc(db, "messages", `${id}`), {
         to: `+91${phone}`,
         body: `Hold tight!! Sending ${unit}'s of ${blood} at ${location} ASAP`
    });
    


    navigate('/');



  }
  
  return (



     
    <div
      className="Drip"
      style={{
        backgroundImage: "url(" + DripPage + ")",
        backgroundColor: "black",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "91.9vh",
        width: "99.99vw",
        position:"relative",
        zIndex: "0",
      }}
    >
      <Form onSubmit={handleSubmit} style={{
        position:"relative",
        top:"40%",
        width:"40%"
        
      }} >
  <Form.Group className="mb-3 " controlId="formBasicLocation">
    <Form.Label style={{
      color:"white"
    }}>Location To Drip</Form.Label>
    <Form.Control type="text" placeholder="Enter drip location"  />
    
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicBlood">
    <Form.Label style={{
      color:"white"
    }}>Type of blood</Form.Label>
    <Form.Control type="text" placeholder="Type of blood"  />
    
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicUnits">
    <Form.Label style={{
      color:"white"
    }}>Unit of blood required</Form.Label>
    <Form.Control type="number" placeholder="Enter unit of blood required"  />
    
  </Form.Group>
  

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Drip;
