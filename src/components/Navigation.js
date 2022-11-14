import { Navbar, Container, Nav  ,Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import DripDrop from "../assets/images/DripDrop.png";
import { auth } from "../firebase";
import {  signOut } from "firebase/auth";



function Navigation({loggedIn,usertype}) {
  const userSignOut= () => {
    signOut(auth)
    .then(()=>{
      alert("Signed out Successfully")
    })
    .catch((error)=>{
      alert("Error in signing out",error.message)
    })
  };
  return (
    <div className="Navigation">
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={DripDrop}
                alt=""
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
              {!usertype && !loggedIn && <span className="center">DripDrop</span>}
              {usertype && !loggedIn && <span className="center">DripDrop</span>}
              {usertype == 'G' && loggedIn && <span className="center">DripDrop Government</span>}
              {usertype == 'P' && loggedIn && <span className="center">DripDrop Personal</span>}
              
            </Navbar.Brand>
            
          </LinkContainer>

          {!loggedIn && 
          <>
             <Nav className="justify-content-end">
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
          </>}
          {
            loggedIn &&
            <Nav className="justify-content-end">
            <Button onClick={userSignOut}>
              Sign Out
            </Button>
           
          </Nav>
          }
          
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
