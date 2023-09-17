import { useDispatch } from 'react-redux'
import { storeLike } from './inputReducer'
import { useState } from 'react';

function StoreLikes(){

    const [like, setLike] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(storeLike(like));
    }

    const handleChange=(e)=>{
        setLike(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="What do you like?"/>
                <input type="submit"/>
            </form>
            
        </div>
    )
}

export default StoreLikes;