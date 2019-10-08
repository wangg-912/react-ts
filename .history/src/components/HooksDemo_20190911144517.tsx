import React, {useState, useEffect} from 'react';
import {message} from "antd"
const Demoshook = () => {
    const [count,
        changeCount] = useState(0);
    useEffect(() => {
        message.info(`count发生变动，最新值为${count}`)
    }, [count]);
    return (
        <div>
            {count}
            <button
                onClick={() => {
                changeCount(Math.ceil(Math.random() * 1000));
            }}>
                改变count
            </button>
        </div>
    )

}
export default Demoshook