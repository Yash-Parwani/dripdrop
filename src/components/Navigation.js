import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import DripDrop from "../assets/images/DripDrop.png";


function Navigation({loggedIn}) {
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
              <span className="center">DripDrop</span>
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
          
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
