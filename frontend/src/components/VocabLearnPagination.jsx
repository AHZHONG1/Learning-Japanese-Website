

function VocabLearnPagination(props) {

    function handleButtonClick(url, button1) {
        fetch(url, { method: "GET" }) /*設定使用GET*/
            .then(res => res.json())
            .then(data => {
                /*接到request data後要做的事情*/
                document.getElementById("diff1").disabled = false;
                document.getElementById("diff2").disabled = false;
                document.getElementById("diff3").disabled = false;
                document.getElementById("diff4").disabled = false;
                document.getElementById("diff5").disabled = false;
                document.getElementById("diff6").disabled = false;
                document.getElementById(button1).disabled = true;
                document.getElementById("diff1").style.backgroundColor = "white";
                document.getElementById("diff2").style.backgroundColor = "white";
                document.getElementById("diff3").style.backgroundColor = "white";
                document.getElementById("diff4").style.backgroundColor = "white";
                document.getElementById("diff5").style.backgroundColor = "white";
                document.getElementById("diff6").style.backgroundColor = "white";
                document.getElementById(button1).style.backgroundColor = "red";
                if (data.success === true) {
                    console.log(data);
                    props.func(data);
                } else {
                    props.func(null);
                }
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
            })
    }


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <p className="page-link">Difficulty:</p>
                <li className="page-item"><button id="diff1" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/1", "diff1")}>1</button></li>
                <li className="page-item"><button id="diff2" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/2", "diff2")}>2</button></li>
                <li className="page-item"><button id="diff3" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/3", "diff3")}>3</button></li>
                <li className="page-item"><button id="diff4" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/4", "diff4")}>4</button></li>
                <li className="page-item"><button id="diff5" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/5", "diff5")}>5</button></li>
                <li className="page-item"><button id="diff6" className="page-link" onClick={() => handleButtonClick("http://localhost:5000/api/vocab/difficulty/6", "diff6")}>6</button></li>
            </ul>
        </nav>
    );
}

export default VocabLearnPagination;