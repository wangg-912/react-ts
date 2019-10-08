import {useState} from 'react';
const Demoshook = () => {

    const [count,
        changeCount] = useState(0);
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