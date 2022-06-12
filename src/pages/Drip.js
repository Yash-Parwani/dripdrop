import { LinkContainer } from "react-router-bootstrap";
import DripPage from "../assets/images/DripPage.png"
function Drip({loggedIn,usertype}) {
  
  console.log(usertype)
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
      
    </div>
  );
}

export default Drip;
