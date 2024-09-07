import React from 'react';
import TeamCarouselPhoto from "./TeamCarouselDescription";
import TeamCarouselDescription from "./TeamCarouselDescription";

const TeamCarouselItem = ({props}) => {
 return (
     <div>
         <TeamCarouselPhoto name={props.name}/>
         <TeamCarouselDescription name={props.name} description={props.description}/>
     </div>
 )
}

export default TeamCarouselItem;