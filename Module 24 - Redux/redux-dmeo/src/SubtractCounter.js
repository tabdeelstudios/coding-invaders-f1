import { useDispatch } from 'react-redux'
import { decrement } from './counterSlice'

function SubtractCounter(){
    const dispatch = useDispatch();

    return (
        <button onClick={()=>dispatch(decrement())}>Subtract</button>
    );
}

export default SubtractCounter;