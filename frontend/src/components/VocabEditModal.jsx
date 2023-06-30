import Modal from 'react-bootstrap/Modal';
import { DevVocabEditResult } from "../components"

function VocabEditModal({ show, handleClose, viewData}) {

    function save() {
        
    }


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
                {viewData && <DevVocabEditResult data={viewData} />}
            </Modal.Body>
            <Modal.Footer>
                <button id="saveBtn" onClick={()=>{save()}}>Save</button>
            </Modal.Footer>
        </Modal>
    )

}

export default VocabEditModal