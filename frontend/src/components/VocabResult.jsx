

function VocabResult({ data }) {

    var exampletexts = data.exampleText.split("|| ")
    exampletexts.pop()
    var exampleTranslates = data.exampleTranslate.split("|| ")
    exampleTranslates.pop()
    var exampleMeanings = data.exampleMeaning.split("|| ")
    exampleMeanings.pop()

    return (
        <tr>
            <td>{data.No}</td>
            <td>{data.vocab}</td>
            <td>{data.sound}</td>
            <td>{data.meaning}</td>
            <td>{data.POS}</td>
            <td>
                <ol>
                    {exampletexts && exampletexts.map((value, index) => (
                        <li>
                            <div>{exampletexts[index]}</div>
                            <div>{exampleTranslates[index]}</div>
                            <div>{exampleMeanings[index]}</div>
                        </li>
                    ))}
                    {/* <li>
                        <div>{exampletexts[0]}</div>
                        <div>{exampleTranslates[0]}</div>
                        <div>{exampleMeanings[0]}</div>
                    </li>
                    <li>
                        <div>{exampletexts[1]}</div>
                        <div>{exampleTranslates[1]}</div>
                        <div>{exampleMeanings[1]}</div>
                    </li> */}
                </ol>
            </td>
            <td>{data.difficulty}</td>
        </tr>
    )
}

export default VocabResult;