import { VocabNavBar, VocabLearnPagination, VocabResult } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function VocabLearn() {

    const [data, setData] = useState(null);

    useEffect(() => { }, [data]);

    return (
        <div>
            <VocabNavBar />
            <div className="Page">
                <h1>Vocab Learn page</h1>
                <VocabLearnPagination func={setData} />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Vocab</th>
                            <th>Sound</th>
                            <th>Meaning</th>
                            <th>Part of Speech</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.data.map((vocab, index) => (
                            <VocabResult data={vocab} key={vocab._id} count={index + 1} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </div >
    );
}

export default VocabLearn;