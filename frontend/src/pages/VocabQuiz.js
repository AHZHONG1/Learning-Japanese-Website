import { VocabNavBar, VocabLearnPagination } from "../components";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function VocabQuiz() {

    const [data, setData] = useState(null);
    const [arr, setArr] = useState(null);

    const [bStart, setBStart] = useState(false);

    const [bVocab, setBVocab] = useState(true);
    const [bSound, setBSound] = useState(false);
    const [bMeaning, setBMeaning] = useState(false);

    var arr1 = [];

    function shuffle() {
        for (let i = arr1.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }

    // useEffect(() => { }, [data]);

    function validation() {
        var checkboxes = document.getElementsByName("QuizType");
        var numberOfCheckedItems = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked)
                numberOfCheckedItems++;
        }
        if (numberOfCheckedItems === 0) {
            alert("You need to select at least one");
            for (var j = 0; j < checkboxes.length; j++) {
                checkboxes[j].checked = false;
            }
            checkboxes[0].checked = true;
        }
        if (numberOfCheckedItems > 2) {
            alert("You can't select more than two types");
            for (var k = 0; k < checkboxes.length; k++) {
                checkboxes[k].checked = false;
            }
            checkboxes[0].checked = true;
        }
    };

    function submitValidation() {
        if (!data) {
            return false;
        }

        var checkboxes = document.getElementsByName("QuizType");
        if (checkboxes[0].checked) {
            setBVocab(true);
        } else {
            setBVocab(false);
        }
        if (checkboxes[1].checked) {
            setBSound(true);
        } else {
            setBSound(false);
        }
        if (checkboxes[2].checked) {
            setBMeaning(true);
        } else {
            setBMeaning(false);
        }

        data && data.data.map((value, index) => (
            arr1.push(value)
        ))

        shuffle()

        setArr(arr1)
        console.log(arr1)
        setBStart(true);
        return true;
    };

    function checkAnswer() {
        if (bVocab) {
            if (document.getElementById("textVocab").value !== arr[0].vocab) {
                alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
                arr.map(value => (
                    arr1.push(value)
                ))
                arr1.push(arr[0])
                arr1.push(arr[0])
                arr1.shift()
                shuffle()
                setArr(arr1)
                console.log(arr)
                setBStart(false);
                setBStart(true);
                return;
            }
        }
        if (bSound) {
            if (document.getElementById("textSound").value !== arr[0].sound) {
                alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
                arr.map(value => (
                    arr1.push(value)
                ))
                arr1.push(arr[0])
                arr1.push(arr[0])
                arr1.shift()
                shuffle()
                setArr(arr1)
                console.log(arr)
                setBStart(false);
                setBStart(true);
                return;
            }
        }
        if (bMeaning) {
            if (document.getElementById("textMeaning").value !== arr[0].meaning) {
                alert(`The answer is ${arr[0].vocab} || ${arr[0].sound} || ${arr[0].meaning}`)
                arr.map(value => (
                    arr1.push(value)
                ))
                arr1.push(arr[0])
                arr1.push(arr[0])
                arr1.shift()
                shuffle()
                setArr(arr1)
                console.log(arr)
                setBStart(false);
                setBStart(true);
                return;
            }
        }
        arr.map(value => (
            arr1.push(value)
        ))
        arr1.shift()
        shuffle()
        setArr(arr1)
        console.log(arr)
        setBStart(false);
        setBStart(true);
    }

    useEffect(() => {
        console.log("Rerender")

    }, [bStart, arr])

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
                                    <legend className="col-form-label col-sm-3 pt-0">Quiz Type: (Select not more than 2 types)</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="QuizType" id="checkVocab" value="Vocab" onClick={validation} defaultChecked="true" />
                                            <label className="form-check-label" htmlFor="checkVocab">
                                                Vocab
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="QuizType" id="checkSound" value="Sound" onClick={validation} />
                                            <label className="form-check-label" htmlFor="checkSound">
                                                Sound
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="QuizType" id="checkMeaning" value="Meaning" onClick={validation} />
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
                                    {!bVocab && <td>{arr[0].vocab}</td>}
                                    {bVocab && <td><input id="textVocab" type="text" /></td>}
                                    {!bSound && <td>{arr[0].sound}</td>}
                                    {bSound && <td><input id="textSound" type="text" /></td>}
                                    {!bMeaning && <td>{arr[0].meaning}</td>}
                                    {bMeaning && <td><input id="textMeaning" type="text" /></td>}
                                </tr>
                            </tbody>
                        </Table>
                        <button className="btn btn-primary" onClick={checkAnswer}>Submit</button>
                        <button className="btn btn-primary" onClick={() => {
                            setBStart(false);
                        }}>Return</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default VocabQuiz;