import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link style={{textDecoration: 'none'}} to="/"><Navbar.Brand>Learning Japanese</Navbar.Brand></Link>
                <Nav>
                    <Nav.Link as={Link} style={{textDecoration: 'none'}} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} style={{textDecoration: 'none'}} to="/vocab">Vocab</Nav.Link>
                    <Nav.Link as={Link} style={{textDecoration: 'none'}} to="/grammar">Grammar</Nav.Link>
                    <Nav.Link as={Link} style={{textDecoration: 'none'}} to="/dev">Dev</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;