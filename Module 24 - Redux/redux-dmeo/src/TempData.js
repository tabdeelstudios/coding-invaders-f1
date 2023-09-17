import { useSelector } from 'react-redux';

function TempData(){
    const count = useSelector((state) => state.counter.value);

    return(
        <p>The data is : {count} </p>
    );
}

export default TempData;