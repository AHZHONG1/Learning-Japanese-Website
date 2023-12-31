import { DevNavBar } from "../components";

function DevAdd() {

    async function addAll() {
        for (var count = 0; count < 6000; count += 100) {
            var json = require(`../data/vocab${count}.json`);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            };
            console.log(JSON.stringify(json))
            await fetch(process.env.REACT_APP_hosting_URL + '/api/vocabs', requestOptions)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
            })
            
            console.log(count)
        }
    }

    return (
        <div>
            <DevNavBar />
            <div className="Page">
                <h1>Dev Add page</h1>
                <button onClick={addAll}>Add</button>
            </div>
        </div>
    );
}

export default DevAdd;