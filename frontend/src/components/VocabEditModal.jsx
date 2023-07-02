import Modal from 'react-bootstrap/Modal';
import { DevVocabEditResult } from "../components"
import { useState } from 'react';

function VocabEditModal({ show, handleClose, viewData }) {

    const [showSubmit, setShowSubmit] = useState(false)

    const [obj, setObj] = useState({})

    const CloseSubmit = () => setShowSubmit(false)

    async function save() {
        const vocab = document.getElementById("vocabInput").value
        const sound = document.getElementById("soundInput").value
        const meaning = document.getElementById("meaningInput").value
        const meaningAns = document.getElementById("meaningAnsInput").value
        const POS = document.getElementById("POSInput").value
        const exampleTexts = document.getElementById("exampleTextsInput").value
        const exampleTranslates = document.getElementById("exampleTranslatesInput").value
        const exampleMeanings = document.getElementById("exampleMeaningsInput").value
        const difficulty = document.getElementById("difficultyInput").value

        obj.No = viewData.No
        obj.vocab = vocab;
        obj.sound = sound;
        obj.meaning = meaning;
        obj.meaningAns = meaningAns;
        obj.POS = POS;
        obj.exampleText = exampleTexts;
        obj.exampleTranslate = exampleTranslates;
        obj.exampleMeaning = exampleMeanings;
        obj.difficulty = difficulty;

        setShowSubmit(true)
        // setShow(false)

        return

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        // console.log(JSON.stringify(json))
        await fetch('http://localhost:5000/api/vocab/' + viewData._id, requestOptions)
            .then(res => res.json())
            .then(message => {
                console.log(message)
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
            })
    }

    return (
        <div>
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
                    <button id="saveBtn" onClick={() => { save() }}>Save</button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showSubmit}
                onHide={CloseSubmit}
                backdrop="static"
                keyboard={false}
                size="xl">

                <Modal.Header closeButton style={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Hi
                    {obj && <div>
                        
                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    <button id="returnBtn" onClick={() => { save() }}>Return</button>
                    <button id="confirmBtn" onClick={() => { save() }}>Confirm</button>
                </Modal.Footer>

            </Modal>
        </div>
    )

}

export default VocabEditModal