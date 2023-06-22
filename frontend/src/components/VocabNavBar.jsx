import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function VocabNavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Nav className="row w-100">
                    <Nav.Link className='col-6 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "green"}} to="/vocab/learn">Learn</Nav.Link>
                    <Nav.Link className='col-6 text-center' as={Link} style={{textDecoration: 'none', backgroundColor: "gray"}} to="/vocab/quiz">Quiz</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default VocabNavBar;