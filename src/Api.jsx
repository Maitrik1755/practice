import React, { useEffect, useState } from 'react'

const Api = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            setApiData(data);
            console.log("my data", data);

        }
        fetchApi();

    }, [])

    const person = ["abac", "xyxz", "pop"];

    return (
        <>
            <div>
                {person.map((person, index) => (<h1 key={index}>{person}</h1>))}
            </div>

            <div >{apiData.map((data) => <div key={data.id} style={{ backgroundColor: 'red', margin: '10px', border: '2px solid yellow', borderRadius: '10px', textAlign: 'center' }}>
                <h3>{data.title}</h3>
            </div>)}</div>


        </>
    )
}

export default Api