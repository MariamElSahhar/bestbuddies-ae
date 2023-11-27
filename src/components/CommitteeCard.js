import React from 'react'

const CommitteeCard = ({name}) => {
    const photo = name + '.png';
    const bio = name;
    return (
    <div className='committe-card'>
        <img src={photo} alt={name}></img>
        <h2>{name}</h2>
        <p>{bio}</p>
    </div>
    )
}

export default CommitteeCard
