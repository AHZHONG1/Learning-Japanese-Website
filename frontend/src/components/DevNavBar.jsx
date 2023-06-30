import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DevNavBar({ func }) {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Nav className="row w-100">
                    <Nav.Link onClick={() => { func("View") }} className='col-3 text-center' style={{textDecoration: 'none', backgroundColor: "green"}} >View</Nav.Link>
                    <Nav.Link onClick={() => { func("Add") }} className='col-3 text-center' style={{textDecoration: 'none', backgroundColor: "gray"}} >Add</Nav.Link>
                    <Nav.Link onClick={() => { func("Edit") }} className='col-3 text-center' style={{textDecoration: 'none', backgroundColor: "red"}} >Edit</Nav.Link>
                    <Nav.Link onClick={() => { func("Delete") }} className='col-3 text-center' style={{textDecoration: 'none', backgroundColor: "yellow"}} >Delete</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default DevNavBar;