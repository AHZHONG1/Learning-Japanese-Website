import { useState, useEffect } from "react";



function PagePagination({ data, func }) {

    const [currentPage, setCurrent] = useState(1)

    let totalPage = 1

    if (data) {
        totalPage = data.data.length / 100
    }

    function handleButtonClick(id) {
        setCurrent(document.getElementById(id).value)
    }

    useEffect(() => {
        setCurrent(1)
    }, [data])

    useEffect(() => {
        if (data === null) {
            document.getElementById(`page1`).disabled = true
            document.getElementById(`page2`).disabled = true
            document.getElementById(`page3`).disabled = true
            document.getElementById(`prevBtn`).disabled = true
            document.getElementById(`nextBtn`).disabled = true
            return
        }
        document.getElementById(`page1`).style.backgroundColor = "white"
        document.getElementById(`page2`).style.backgroundColor = "white"
        document.getElementById(`page3`).style.backgroundColor = "white"
        document.getElementById(`page1`).disabled = false
        document.getElementById(`page2`).disabled = false
        document.getElementById(`page3`).disabled = false
        document.getElementById(`prevBtn`).disabled = false
        document.getElementById(`nextBtn`).disabled = false
        if (currentPage <= 1) {
            document.getElementById(`page1`).style.backgroundColor = "green"
            document.getElementById(`page1`).disabled = true
            document.getElementById(`prevBtn`).disabled = true
        } else if (currentPage >= totalPage) {
            document.getElementById(`page3`).style.backgroundColor = "green"
            document.getElementById(`page3`).disabled = true
            document.getElementById(`nextBtn`).disabled = true
        } else {
            document.getElementById(`page2`).style.backgroundColor = "green"
            document.getElementById(`page2`).disabled = true
        }
        console.log(currentPage)
        var datas = []
        if (data) {
            for (var i = (parseInt(currentPage) - 1) * 100; i < Math.min((parseInt(currentPage)) * 100, data.data.length); ++i) {
                datas.push(data.data[i])
            }
            func(datas)
        }
        console.log(datas)
    }, [data, currentPage])

    return (
        <nav aria-label="Page navigation example">
            <ul className={"pagination justify-content-end"} >
                <p className="page-link bg-info">Page {currentPage}</p>
                <li className="page-item"><button id="prevBtn" className="page-link" onClick={() => { (currentPage > 1) ? setCurrent(parseInt(currentPage) - 1) : setCurrent(1) }}>Previous</button></li>
                <li className="page-item"><button id="page1" className="page-link" onClick={() => { handleButtonClick("page1") }} value={(currentPage <= 2) ? 1 : ((currentPage >= parseInt(totalPage) - 1) ? (parseInt(totalPage) - 2) : (parseInt(currentPage) - 1))}>{(currentPage <= 2) ? 1 : ((currentPage >= parseInt(totalPage) - 1) ? (parseInt(totalPage) - 2) : (parseInt(currentPage) - 1))}</button></li>
                <li className="page-item"><button id="page2" className="page-link" onClick={() => { handleButtonClick("page2") }} value={(currentPage <= 2) ? 2 : ((currentPage >= parseInt(totalPage) - 1) ? (parseInt(totalPage) - 1) : currentPage)}>{(currentPage <= 2) ? 2 : ((currentPage >= parseInt(totalPage) - 1) ? (parseInt(totalPage) - 1) : currentPage)}</button></li>
                <li className="page-item"><button id="page3" className="page-link" onClick={() => { handleButtonClick("page3") }} value={(currentPage <= 2) ? 3 : ((currentPage >= parseInt(totalPage) - 1) ? totalPage : (parseInt(currentPage) + 1))}>{(currentPage <= 2) ? 3 : ((currentPage >= parseInt(totalPage) - 1) ? totalPage : (parseInt(currentPage) + 1))}</button></li>
                <li className="page-item"><button id="nextBtn" className="page-link" onClick={() => { (currentPage < totalPage) ? setCurrent(parseInt(currentPage) + 1) : setCurrent(totalPage) }}>Next</button></li>
            </ul>
        </nav>
    );
}

export default PagePagination;