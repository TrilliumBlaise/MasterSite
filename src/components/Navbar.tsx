import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <NavbarBS
      sticky="top"
      className="shadow-sm bm-3"
      style={{ backgroundImage: `url('/images/background.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
    >
      <Container>
        <Nav className="me-auto fs-2">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/projects" as={NavLink}>
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  )
}
