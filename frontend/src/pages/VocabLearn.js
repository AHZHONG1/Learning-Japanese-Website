import { VocabNavBar, VocabLearnPagination, VocabResult, PagePagination, Loading } from "../components";
import useFetchVocab from "../api/useFetchVocab";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function VocabLearn() {

    const [data, setData] = useState([null, null, null, null, null, null]);

    const [dataShow1, setDataShow1] = useState(null)

    const [dataShow2, setDataShow2] = useState(null)

    const [loading, setLoading] = useState(true)

    useFetchVocab(data, setData, setLoading)

    useEffect(() => {
        console.log("Click")

    }, [data, dataShow1, dataShow2, loading]);

    return (
        <div>
            {loading && <Loading />}
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