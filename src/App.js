import { useState } from "react";

import HomePage from "./assets/images/HomePage.png";
import PlzLogin from "./assets/images/PlzLogin.png";
import Drop from "./assets/images/Drop.png"
import Drip from "./assets/images/Drip.png"
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home"


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoggedIn = () =>{
    if(!loggedIn){
      setLoggedIn(true);
=======

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundImage: loggedIn
          ? "url(" + HomePage + ")"
          : "url(" + PlzLogin + ")",
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
      {!loggedIn && 
      
      <p
        style={{
          zIndex: "1",
          color: "white",
          position: "absolute",
          top:"50vh",
          left:"29vw",
          fontSize:50
        }}
      >
        Please Login/Register First
      </p>
      
    }
    {loggedIn &&
    <>
    <div className="Drip" style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      position : "absolute",
      top:"42vh",
      left:"17vw",
      color:"white"
    }}>
      <h1 >Drip</h1>
      <img src={Drip} 
       style={{
        height:"40vh",
        width:"20vw"
      }} />
    </div>
    <div className="Drop" style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      position : "absolute",
      top:"42vh",
      right:"22vw",
      color:"white"
    }}>
      <h1>Drop</h1>
      <img src={Drop} style={{
        height:"25vh",
        width:"15vw"
      }}/>

    </div>
    </>
>>>>>>> 816960978137ffa8f04f94808043ca41b3ad17a2
    }
    return;
  }
  
  return (
    <div className="App">

    <Navigation loggedIn={loggedIn}
    />
      <Routes>
          <Route exact path="/" element={<Home loggedIn={loggedIn}/>} />
          <Route exact path="/login" element={<Login loggedIn={loggedIn} handleLoggedIn={handleLoggedIn}/>} />
          <Route exact path="/register" element={<Register loggedIn={loggedIn}/>} />
        </Routes>
    </div>
  );
}

export default App;