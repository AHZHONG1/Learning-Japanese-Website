import { DevNavBar, VocabLearnPagination, PagePagination, VocabViewModal, VocabEditModal } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function DevVocab() {

    const [data, setData] = useState([null, null, null, null, null, null]);

    const [data1, setData1] = useState(null);

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

    function fetchData(url, index) {
        fetch(url, { method: "GET" }) /*設定使用GET*/
            .then(res => res.json())
            .then(data => {
                /*接到request data後要做的事情*/
                if (data.success === true) {
                    setData((prevData) => {
                        prevData[index] = data;
                        return prevData;
                    })
                } else {
                    setData([null, null, null, null, null, null]);
                }
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.log(e)
                setData([null, null, null, null, null, null]);
            })
    }

    useEffect(() => {
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/1", 0);
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/2", 1);
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/3", 2);
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/4", 3);
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/5", 4);
        fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/6", 5);
        //console.log(data);
    }, []);

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
                        <VocabLearnPagination data={data} func={setData1} />
                    </div>
                    <div className="col-6">
                        <PagePagination data={data1} func={setDataShow} number={100} />
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