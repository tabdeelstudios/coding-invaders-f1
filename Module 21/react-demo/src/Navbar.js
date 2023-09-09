import logo from './logo.svg'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <img src={logo}/>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;