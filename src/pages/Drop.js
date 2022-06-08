import { LinkContainer } from "react-router-bootstrap";
import DropPage from "../assets/images/DropPage.png"
function Drop({loggedIn}) {
  

  return (
    <div
      className="Drop"
      style={{
        backgroundImage: "url(" + DropPage + ")",
        
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
      
   
     
    </div>
  );
}

export default Drop;
