import { VocabNavBar, VocabLearnPagination, VocabResult, PagePagination } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function VocabLearn() {

    const [data, setData] = useState([null, null, null, null, null, null]);

    const [dataShow1, setDataShow1] = useState(null)

    const [dataShow2, setDataShow2] = useState(null)

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
                    document.getElementById("diff1").click();
                } else {
                    setData([null, null, null, null, null, null]);
                }
                return;
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
        console.log(dataShow2)
    }, [data, dataShow1, dataShow2]);

    return (
        <div>
            <VocabNavBar />
            <div className="Page">
                <h1>Vocab Learn page</h1>
                <div className="row">
                    <div className="col-6">
                        <VocabLearnPagination data={data} func={setDataShow1} />
                    </div>
                    <div className="col-6">
                        <PagePagination data={dataShow1} func={setDataShow2} number={100} />
                    </div>
                </div>
                <p className="text-end">Total: {1000} data found</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: "60px" }}>#</th>
                            <th style={{ width: "170px" }}>Vocab</th>
                            <th style={{ width: "170px" }}>Sound</th>
                            <th style={{ width: "250px" }}>Meaning</th>
                            <th style={{ width: "100px" }}>MeaningQuiz</th>
                            <th style={{ width: "140px" }}>Part of Speech</th>
                            <th>Sentences</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataShow2 && dataShow2.map((vocab, index) => (
                            <VocabResult data={vocab} key={vocab._id} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div >
    );
}

export default VocabLearn;