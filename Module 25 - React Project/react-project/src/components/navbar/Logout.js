import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authLogout } from "../../redux/authSlice";

function Logout(){
    const dispatch = useDispatch();

    return (
        <Link to='/' onClick={()=>dispatch(authLogout())}><button>Logout</button></Link>
    );
}

export default Logout;