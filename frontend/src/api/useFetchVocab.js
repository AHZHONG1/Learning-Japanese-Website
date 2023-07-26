import { useEffect } from 'react';

const useFetchVocab = (data, setData, setLoading) => {

    async function fetchData(url, index) {
        await fetch(url, { method: "GET" }) /*設定使用GET*/
            .then(res => res.json())
            .then(data => {
                /*接到request data後要做的事情*/
                if (data.success === true) {
                    setData((prevData) => {
                        prevData[index] = data;
                        return prevData;
                    })
                } else {
                    setData([null, null, null, null, null, null]);
                }
                console.log(index + ": " + console.time)
                return;
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.log(e)
                setData([null, null, null, null, null, null]);
            })
    }

    useEffect(() => {
        async function fetchAll() {
            await Promise.all([fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/1", 0),
            fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/2", 1),
            fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/3", 2),
            fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/4", 3),
            fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/5", 4),
            fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/6", 5)])
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/1", 0);
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/2", 1);
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/3", 2);
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/4", 3);
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/5", 4);
            // await fetchData(process.env.REACT_APP_hosting_URL + "/api/vocab/difficulty/6", 5);
            console.log("Finishing")
            setLoading(false)
            document.getElementById("diff1").click();
        }
        fetchAll()
    }, [])

    return { data };
}

export default useFetchVocab;