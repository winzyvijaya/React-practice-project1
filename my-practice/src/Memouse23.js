import React, { useState, useMemo} from 'react'


function Memouse23() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const MulticountMemo = useMemo(function Multicount() {
        console.warn("function called!")
        return count * 5

    },[count])
    return (
        <div>
            <h1>useMemo Component</h1>
            <h1> Count: {count}</h1>
            <h1>Item: {item}</h1>
            <h1>{MulticountMemo}</h1>
            <button onClick={() => setCount(count + 1)}>Update Me!</button>
            <button onClick={() => setItem(item * 2)}>Update Item!</button>
        </div>
    );
}
export default Memouse23;