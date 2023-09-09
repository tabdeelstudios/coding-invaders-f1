import {useState, useEffect} from 'react';
import TeamMember from "./TeamMember";
import './OurTeam.css';

function OurTeam(){
    const [allTeamMembers, setTeamMembers] = useState([]);
    
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => setTeamMembers(data.results));
      }, []);

    const content = allTeamMembers.map((member) =>
    <TeamMember
        key={member.login.uuid}
        imgLink={member.picture.thumbnail}
        designation={member.name.first}
        contact={member.email} />
    );
 
    return(
        <section id="ourTeam">
            {content}
        </section>
    )
}

export default OurTeam;