import React from 'react'

const Description = ({name, description}) => {
    return (
        <div>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    )
}

export default Description;