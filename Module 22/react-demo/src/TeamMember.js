import { Link } from "react-router-dom";

function TeamMember(props){
    return (
        <div className="profile">
            <img src={props.imgLink} />
            <h2>{props.designation}</h2>
            <p>{props.contact}</p>
            <Link to='/profile'>Go to profile</Link>
        </div>
    )
}

export default TeamMember;