import React, { useState, useEffect } from 'react';
import './View.css';
import axios from 'axios';

const View = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        fetchtable();
    }, []);

    const fetchtable = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let index = window.location.search.split('?')[1] - 1;
        setInfo(result.data[index]);
    }

    return (
        <>
            {info ?
                <div className='viewdata'>
                    <form>
                        <input type="text" className='fname' value={info.name} />

                        <input type="text" className='fname' value={info.username} />

                        <input type="Email" className='fname' value={info.email} />

                        <input type="Email" className='fname' value={info.phone} />
                    </form>
                </div>
                : null}
        </>
    )
}

export default View;