export default function hooksDemo() {

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