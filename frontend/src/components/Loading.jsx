import Modal from 'react-bootstrap/Modal';

function Loading() {

    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
            size="xs"
        >
            <Modal.Body style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                Loading
            </Modal.Body>
        </Modal>
    )
}

export default Loading