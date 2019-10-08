import React, {useState, useEffect} from 'react';
import {message, Button} from "antd"

export default function Demoshook() {
    const [count,
        changeCount] = useState(0);
    useEffect(() => {
        message.info(`count发生变动，最新值为${count}`)
    }, [count]);
    return (
        <div>
            {count}
            <Button type="primary">
                onClick={() => {
                    changeCount(Math.ceil(Math.random() * 1000));
                }}> 改变count
            </Button>
        </div>