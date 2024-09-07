import React from 'react';
import TeamCarouselPhoto from "./TeamCarouselDescription";
import TeamCarouselDescription from "./TeamCarouselDescription";

const TeamCarouselItem = ({name}) => {
 return (
     <div>
         <TeamCarouselPhoto name={name}/>
         <TeamCarouselDescription name={name} description={}/>

     </div>
 )
}

export default TeamCarouselItem;