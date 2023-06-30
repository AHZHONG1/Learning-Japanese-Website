import Modal from 'react-bootstrap/Modal';
import { DevVocabViewResult } from "../components"

function VocabViewModal({ show, handleClose, viewData, previous, next }) {

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
        >
            <Modal.Header closeButton style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                <Modal.Title>Vocab Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {viewData && <DevVocabViewResult data={viewData} />}
            </Modal.Body>
            <Modal.Footer>
                <button id="prevBtn1" onClick={previous}>Previous</button>
                <button id="nextBtn1" onClick={next}>Next</button>
            </Modal.Footer>
        </Modal>
    )
}

export default VocabViewModal