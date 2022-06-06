import { Navbar, Container,Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            DripDrop
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  );
}

export default App;
