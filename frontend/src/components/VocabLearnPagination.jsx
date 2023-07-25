
import { useEffect } from "react";


function VocabLearnPagination(props) {

    function handleButtonClick(button1) {
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

        props.func(props.data[parseInt(document.getElementById(button1).value) - 1]);
    }



    useEffect(() => {

    }, [])

    return (
        <nav aria-label="Page navigation example">
            <ul className={"pagination ".concat(props.class1)} >
                <p className="page-link">Difficulty:</p>
                <li className="page-item"><button value={1} id="diff1" className="page-link" onClick={() => handleButtonClick("diff1")}>1</button></li>
                <li className="page-item"><button value={2} id="diff2" className="page-link" onClick={() => handleButtonClick("diff2")}>2</button></li>
                <li className="page-item"><button value={3} id="diff3" className="page-link" onClick={() => handleButtonClick("diff3")}>3</button></li>
                <li className="page-item"><button value={4} id="diff4" className="page-link" onClick={() => handleButtonClick("diff4")}>4</button></li>
                <li className="page-item"><button value={5} id="diff5" className="page-link" onClick={() => handleButtonClick("diff5")}>5</button></li>
                <li className="page-item"><button value={6} id="diff6" className="page-link" onClick={() => handleButtonClick("diff6")}>6</button></li>
            </ul>
        </nav>
    );
}

export default VocabLearnPagination;