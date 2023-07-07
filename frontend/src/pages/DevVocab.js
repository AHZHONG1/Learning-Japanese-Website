import { DevNavBar, VocabLearnPagination, PagePagination, VocabViewModal, VocabEditModal } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function DevVocab() {

    const [data, setData] = useState(null);

    const [dataShow, setDataShow] = useState(null)

    const [action, setAction] = useState("View")

    const [showView, setShowView] = useState(false)

    const [showEdit, setShowEdit] = useState(false)

    const [viewData, setViewData] = useState(null)

    const handleCloseView = () => setShowView(false)

    const handleCloseEdit = () => setShowEdit(false)

    const handleShow = (action, index) => {
        if (action === "View") {
            setShowView(true);
            setViewData(dataShow[index])
        }
        if (action === "Edit") {
            setShowEdit(true)
            setViewData(dataShow[index])
        }
    }

    function previous() {
        console.log("prevBtn clicked")
        const index = (viewData.No - 1) % 100
        console.log(index)
        if (index <= 1) {
        }
        if (index > 0) {
            setViewData(dataShow[index - 1])
        }
    }

    function next() {
        console.log("nextBtn clicked")
        const index = (viewData.No - 1) % 100
        console.log(index)
        if (index >= 98) {
        }
        if (index < 99) {
            setViewData(dataShow[index + 1])
        }
    }

    // useEffect(() => {

    // }, [showEdit])

    useEffect(() => {
        if (viewData && document.getElementById("prevBtn1") && document.getElementById("nextBtn1")) {
            document.getElementById("prevBtn1").disabled = false
            document.getElementById("nextBtn1").disabled = false
            if ((viewData.No - 1) % 100 <= 0) {
                document.getElementById("prevBtn1").disabled = true
            }
            if ((viewData.No - 1) % 100 >= 99) {
                document.getElementById("nextBtn1").disabled = true
            }
        }

    }, [data, dataShow, showView, action, viewData])

    return (
        <div>
            <DevNavBar func={setAction} />
            <div className="Page">
                <h1>Dev Vocab View page</h1>
                <div className="row">
                    <div className="col-6">
                        <VocabLearnPagination func={setData} />
                    </div>
                    <div className="col-6">
                        <PagePagination data={data} func={setDataShow} number={100} />
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: "60px" }}>#</th>
                            <th style={{ width: "170px" }}>Vocab</th>
                            <th style={{ width: "250px" }}>Meaning</th>
                            <th style={{ width: "100px" }}>MeaningQuiz</th>
                            <th>Difficulty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataShow && dataShow.map((vocab, index) => (
                            <tr key={vocab._id}>
                                <td>{vocab.No}</td>
                                <td>{vocab.vocab}</td>
                                <td>{vocab.meaning}</td>
                                <td>{vocab.meaningAns}</td>
                                <td>{vocab.difficulty}</td>
                                <td><button onClick={() => { handleShow(action, index) }} id="actionBtn" >{action}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <VocabViewModal show={showView} handleClose={handleCloseView} viewData={viewData} previous={previous} next={next} />
                <VocabEditModal show={showEdit} setShow={setShowEdit} handleClose={handleCloseEdit} viewData={viewData} />
            </div>
        </div>
    );
}

export default DevVocab;