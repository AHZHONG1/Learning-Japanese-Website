import { useState, useEffect } from 'react';

const useFetch = (url, methods) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        fetch(url, { signal: abortCont.signal, method: {methods} })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                }
            })


        // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return { data };
}

export default useFetch;