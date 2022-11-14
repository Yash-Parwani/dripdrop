import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home"
import Drip from "./pages/Drip";
import Drop from "./pages/Drop";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import db from "./firebase";
import { getDoc ,doc } from "firebase/firestore";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState([]);





  useEffect(()=>{
      const unsubscribeAuth = onAuthStateChanged(auth,async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          setLoggedIn(true);
          const docRef = doc(db, "users", `${user.uid}`);
          const docSnap = await getDoc(docRef); 
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setCurrUser(docSnap.data());
          }          

        } else {
          // User is signed out
          // ...
          console.log("Logout Render");
          setLoggedIn(false)
        }
      });





      return unsubscribeAuth
  },[])
  
  return (
    <div className="App">

    <Navigation loggedIn={loggedIn} usertype={currUser.type}/>
      <Routes>
          <Route exact path="/" element={<Home loggedIn={loggedIn}/>} />
          <Route exact path="/login" element={<Login loggedIn={loggedIn} />} />
          <Route exact path="/register" element={<Register loggedIn={loggedIn}/>} />
          <Route exact path="/drip" element={<Drip usertype={currUser.type} id={currUser.id} phone={currUser.phone} loggedIn={loggedIn}/>}  />
          <Route exact path="/drop" element={<Drop usertype={currUser.type} loggedIn={loggedIn}/>} />
        </Routes>
    </div>
  );
}

export default App;