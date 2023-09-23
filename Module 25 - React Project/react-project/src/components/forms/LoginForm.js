import { useDispatch } from 'react-redux';
import { authLogin } from './../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authLogin());
        navigate("/");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <input type="submit" value="Login"/>
        </form>
    );
}

export default LoginForm;