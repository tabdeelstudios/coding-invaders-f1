import { Link } from 'react-router-dom';
import './Card.css';

function Card(props){
    return(
        <div className="card" style={{backgroundColor:`${props.bgColor}`}}>
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
            <hr/>
            <Link to={`/details/${props.heading}`}><div className='cardLink'><p>Explore More</p><span>&gt;</span></div></Link>
        </div>
    )
}

export default Card;