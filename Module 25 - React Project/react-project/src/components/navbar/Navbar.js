import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import './../../styles/navbar.css';

function Navbar(){
    const checkLogin = useSelector((state) => state.auth.isLoggedIn);
    
    return (
        console.log("authLogin is set to "+checkLogin),
        <nav>
            <h2>Quotes Project</h2>
            <Link to='/quotes'>Quotes</Link>
            { checkLogin ? <Logout/> : <Login/> }
        </nav>
    );
}

export default Navbar;