import { VocabNavBar, VocabLearnPagination, VocabResult, PagePagination } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function VocabLearn() {

    const [data, setData] = useState(null);

    const [dataShow, setDataShow] = useState(null)

    useEffect(() => {
    
    }, [data, dataShow]);

    return (
        <div>
            <VocabNavBar />
            <div className="Page">
                <h1>Vocab Learn page</h1>
                <div className="row">
                    <div className="col-6">
                        <VocabLearnPagination func={setData} />
                    </div>
                    <div className="col-6">
                        <PagePagination data={data} func={setDataShow} />
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
                        {dataShow && dataShow.map((vocab, index) => (
                            <VocabResult data={vocab} key={vocab._id} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div >
    );
}

export default VocabLearn;