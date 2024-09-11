import React from 'react'

const Description = ({name, description, className}) => {
    return (
        <span className={className}>
            <span>{name}</span>
            <br/>
            <span>{description}</span>
        </span>
    )
}

export default Description;