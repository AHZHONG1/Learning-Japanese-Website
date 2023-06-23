

function VocabLearnPagination(props) {

    function handleButtonClick(url) {
        fetch(url, { method: "GET" }) /*設定使用GET*/
            .then(res => res.json())
            .then(data => {
                /*接到request data後要做的事情*/
                console.log(data);
                props.func(data);
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
            })
    }


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <p className="page-link">Difficulty:</p>
                <li className="page-item"><button className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/1")}>1</button></li>
                <li className="page-item"><button className="page-link" href="#">2</button></li>
                <li className="page-item"><button className="page-link" href="#">3</button></li>
                <li className="page-item"><button className="page-link" href="#">4</button></li>
                <li className="page-item"><button className="page-link" href="#">5</button></li>
                <li className="page-item"><button className="page-link" href="#">6</button></li>
            </ul>
        </nav>
    );
}

export default VocabLearnPagination;