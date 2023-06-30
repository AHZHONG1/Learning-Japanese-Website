import Table from 'react-bootstrap/Table';

function DevVocabViewResult({ data }) {

    var exampletexts = data.exampleText.split("|| ")
    exampletexts.pop()
    var exampleTranslates = data.exampleTranslate.split("|| ")
    exampleTranslates.pop()
    var exampleMeanings = data.exampleMeaning.split("|| ")
    exampleMeanings.pop()

    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <th style={{width: "200px"}}>#</th>
                    <td>{data.No}</td>
                </tr>
                <tr>
                    <th>Vocab</th>
                    <td>{data.vocab}</td>
                </tr>
                <tr>
                    <th>Sound</th>
                    <td>{data.sound}</td>
                </tr>
                <tr>
                    <th>Meaning</th>
                    <td>{data.meaning}</td>
                </tr>
                <tr>
                    <th>MeaningQuiz</th>
                    <td>{data.meaningAns}</td>
                </tr>
                <tr>
                    <th>Part of Speech</th>
                    <td>{data.POS}</td>
                </tr>
                <tr>
                    <th>Example Text</th>
                    <td>
                        <ol style={{marginLeft: "8px", paddingLeft: "10px"}} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampletexts[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th>Example Translate</th>
                    <td>
                        <ol style={{marginLeft: "8px", paddingLeft: "10px"}} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampleTranslates[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th>Example Meaning</th>
                    <td>
                        <ol style={{marginLeft: "8px", paddingLeft: "10px"}} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampleMeanings[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>{data.difficulty}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DevVocabViewResult;