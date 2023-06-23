

function VocabResult({ data, count }) {
    return (
        <tr>
            <td>{count}</td>
            <td>{data.vocab}</td>
            <td>{data.sound}</td>
            <td>{data.meaning}</td>
            <td>{data.POS}</td>
            <td>{data.difficulty}</td>
        </tr>
    )
}

export default VocabResult;