import {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count+1);
    }

    function decrementCount(){
        setCount(count-1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Add</button>
            <button onClick={decrementCount}>Subtract</button>
        </div>
    )
}

export default Counter;