import { useState } from "react";

import HomePage from "./assets/images/HomePage.png";
import PlzLogin from "./assets/images/PlzLogin.png";

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
      <>
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
      </>
    }
     
    </div>
  );
}

export default App;
