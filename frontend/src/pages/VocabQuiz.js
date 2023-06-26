import { VocabNavBar, VocabLearnPagination } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

function VocabQuiz() {

    const [data, setData] = useState(null);
    const [arr, setArr] = useState([]);
    const [correctNo, setCorrectNo] = useState(0);
    const [totalNo, setTotalNo] = useState(0);


    const [bStart, setBStart] = useState(false);

    const [bVocab, setBVocab] = useState(true);
    const [bSound, setBSound] = useState(false);
    const [bMeaning, setBMeaning] = useState(false);

    function shuffle() {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // useEffect(() => { }, [data]);

    function submitValidation() {
        if (!data) {
            return false;
        }

        var radioboxes = document.getElementsByName("QuizType");
        if (radioboxes[0].checked) {
            setBVocab(true);
        } else {
            setBVocab(false);
        }
        if (radioboxes[1].checked) {
            setBSound(true);
        } else {
            setBSound(false);
        }
        if (radioboxes[2].checked) {
            setBMeaning(true);
        } else {
            setBMeaning(false);
        }

        data && data.data.map((value, index) => (
            arr.push(value)
        ))

        shuffle()
        setBStart(true);
        setTotalNo(arr.length);
        return true;
    };

    function checkAnswer() {
        console.log("Start")
        console.log(arr)
        if (bVocab) {
            if (document.getElementById("textVocab").value !== arr[0].vocab) {
                alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
                arr.push(arr[0])
                arr.push(arr[0])
                setTotalNo(totalNo + 1)
            } else {
                setCorrectNo(correctNo + 1)
            }
            document.getElementById("textVocab").value = ""
            arr.shift()
            if (arr.length === 0) {
                document.getElementById("return").click();
                return;
            }
            shuffle()
            setArr(current => [...current])
            return;
        }
        if (bSound) {
            if (document.getElementById("textSound").value !== arr[0].sound) {
                alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
                arr.push(arr[0])
                arr.push(arr[0])
                setTotalNo(totalNo + 1)
            } else {
                setCorrectNo(correctNo + 1)
            }
            document.getElementById("textSound").value = ""
            arr.shift()
            if (arr.length === 0) {
                document.getElementById("return").click();
                return;
            }
            shuffle()
            setArr(current => [...current])
            return;
        }
        if (bMeaning) {
            const strs = arr[0].meaning.split(', ')
            for (var i = 0; i < strs.length; ++i) {
                console.log(strs[i])
                if (document.getElementById("textMeaning").value === strs[i]) {
                    document.getElementById("textMeaning").value = ""
                    setCorrectNo(correctNo + 1)
                    arr.shift()
                    if (arr.length === 0) {
                        document.getElementById("return").click();
                        return;
                    }
                    shuffle()
                    setArr(current => [...current])
                    return;
                }
            }
            document.getElementById("textMeaning").value = ""
            setTotalNo(totalNo + 1)
            alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
            arr.push(arr[0])
            arr.push(arr[0])
            arr.shift()
            shuffle()
            setArr(current => [...current])
            return;
        }
    }

    useEffect(() => {
        console.log("Rerender")
        if (bVocab && document.getElementById("textVocab")) {
            console.log("1")
            document.getElementById("textVocab").addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    document.getElementById("submit").click();
                }
            });
        }
        if (bSound && document.getElementById("textSound")) {
            console.log("2")
            document.getElementById("textSound").addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    document.getElementById("submit").click();
                }
            });
        }
        if (bMeaning && document.getElementById("textMeaning")) {
            console.log("3")
            document.getElementById("textMeaning").addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    document.getElementById("submit").click();
                }
            });
        }
    }, [bStart])



    var percentage = correctNo / totalNo * 100;

    return (
        <div>
            <VocabNavBar />
            <div className="Page">

                <h1>Vocab Quiz page</h1>
                {!bStart &&
                    <div>
                        <VocabLearnPagination func={setData} />

                        <form onSubmit={submitValidation}>
                            <fieldset>
                                <div className="row">
                                    <legend className="col-form-label col-sm-3 pt-0">Quiz Type: (Select 1 only)</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="QuizType" id="checkVocab" value="Vocab" defaultChecked="true" />
                                            <label className="form-check-label" htmlFor="checkVocab">
                                                Vocab
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="QuizType" id="checkSound" value="Sound" />
                                            <label className="form-check-label" htmlFor="checkSound">
                                                Sound
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="QuizType" id="checkMeaning" value="Meaning" />
                                            <label className="form-check-label" htmlFor="checkMeaning">
                                                Meaning
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary mb-2">Start Quiz</button>
                        </form>
                    </div>}
                {
                    bStart &&
                    <div>
                        <ProgressBar min={0} max={totalNo} now={correctNo} label={`${percentage}%`} />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Vocab</th>
                                    <th>Sound</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {bVocab && <td><input id="textVocab" type="text" /></td>}
                                    {bVocab && <td></td>}
                                    {bVocab && <td>{arr[0].meaning}</td>}
                                    {bSound && <td>{arr[0].vocab}</td>}
                                    {bSound && <td><input id="textSound" type="text" /></td>}
                                    {bSound && <td></td>}
                                    {bMeaning && <td>{arr[0].vocab}</td>}
                                    {bMeaning && <td></td>}
                                    {bMeaning && <td><td><input id="textMeaning" type="text" /></td></td>}
                                </tr>
                            </tbody>
                        </Table>
                        <button id="submit" className="btn btn-primary" onClick={checkAnswer}>Submit</button>
                        <Link to={"/vocab"}><button id="return" className="btn btn-primary">Return</button></Link>

                    </div>
                }
            </div>
        </div>
    );
}

export default VocabQuiz;