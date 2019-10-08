import React, {useState, useEffect} from 'react';
import {message, Button} from "antd"
const Demoshook = () => {
    const [count,
        setCount] = useState(0);
    useEffect(() => {
        message.info(`count发生变动，最新值为${count}`)
    }, [count]);
    return (
        <div>
            {count}
            <Button
                type="primary"
                onClick={() => {
                setCount(count + 1);
            }}>递增</Button>
            <Button
                type="primary"
                onClick={() => {
                setCount(count - 1 < 0
                    ? 0
                    : count - 1);
            }}>递减</Button>

        </div>
    )
}

export default Demoshook;