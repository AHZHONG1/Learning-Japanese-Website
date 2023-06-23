import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function DevNavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Nav className="row w-100">
                    <Nav.Link className='col-3 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "green"}} to="/dev/view">View</Nav.Link>
                    <Nav.Link className='col-3 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "gray"}} to="/dev/add">Add</Nav.Link>
                    <Nav.Link className='col-3 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "red"}} to="/dev/edit">Edit</Nav.Link>
                    <Nav.Link className='col-3 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "yellow"}} to="/dev/delete">Delete</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default DevNavBar;