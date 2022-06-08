import { useState } from "react";

import HomePage from "./assets/images/HomePage.png";
import PlzLogin from "./assets/images/PlzLogin.png";
import Drop from "./assets/images/Drop.png"
import Drip from "./assets/images/Drip.png"
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