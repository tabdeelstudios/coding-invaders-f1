import { useDispatch } from 'react-redux'
import { increment } from './counterSlice'

function AddCounter(){
    const dispatch = useDispatch();

    return (
        <button onClick={()=>dispatch(increment())}>Add</button>
    );
}

export default AddCounter;