import React from "react";

const TeamMemberCard = ({name , jobTitle}) => {
    return(
        <div className="member-card">
            <h3>{name}</h3>
            <p>{jobTitle}</p>

        </div>
    )
}

export default TeamMemberCard;
