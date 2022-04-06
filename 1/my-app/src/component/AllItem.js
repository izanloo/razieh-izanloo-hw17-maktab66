import React, { useState, useEffect, useContext } from 'react'
import List from './List';

export default function AllItem() {
    let [dataApi, setDataApi] = useState("");
    const fetchData = () => {
        fetch('https://624a9ef1fd7e30c51c0f941a.mockapi.io/items')
            .then(response => response.json())
            .then(json => setDataApi(json))
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <h1 className='bg-blue'>AllItem</h1>
            {dataApi && dataApi.length > 0 && dataApi.map(i => <List label={i} />)}
        </div>
    )
}
