import Table from 'react-bootstrap/Table';

function DevVocabEditResult({ data }) {
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
                    <th style={{ width: "200px" }}>#</th>
                    <td>{data.No}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Vocab</th>
                    <td>{data.vocab}</td>
                    <td><input defaultValue={data.vocab} id='vocabInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Sound</th>
                    <td>{data.sound}</td>
                    <td><input defaultValue={data.sound} id='soundInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Meaning</th>
                    <td>{data.meaning}</td>
                    <td><input defaultValue={data.meaning} id='meaningInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>MeaningQuiz</th>
                    <td>{data.meaningAns}</td>
                    <td><input defaultValue={data.meaningAns} id='meaningAnsInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Part of Speech</th>
                    <td>{data.POS}</td>
                    <td><input defaultValue={data.POS} id='POSInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Example Text</th>
                    <td>
                        <ol style={{ marginLeft: "8px", paddingLeft: "10px" }} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampletexts[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td><input defaultValue={data.exampleText} id='exampleTextsInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Example Translate</th>
                    <td>
                        <ol style={{ marginLeft: "8px", paddingLeft: "10px" }} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampleTranslates[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td><input defaultValue={data.exampleTranslate} id='exampleTranslatesInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Example Meaning</th>
                    <td>
                        <ol style={{ marginLeft: "8px", paddingLeft: "10px" }} className='mb-0'>
                            {exampletexts && exampletexts.map((value, index) => (
                                <li key={index}>
                                    {exampleMeanings[index]}
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td><input defaultValue={data.exampleMeaning} id='exampleMeaningsInput' typeof='text'></input></td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>{data.difficulty}</td>
                    <td><input defaultValue={data.difficulty} id='difficultyInput' typeof='text'></input></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DevVocabEditResult