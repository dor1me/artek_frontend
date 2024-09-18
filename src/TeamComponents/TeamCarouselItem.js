import React, {useState} from 'react';
import TeamCarouselPhoto from "./TeamCarouselDescription";
import TeamCarouselDescription from "./TeamCarouselDescription";

const TeamCarouselItem = ({props}) => {
    const [hover, setHover] = useState(false);
    const Portrait = `./source/portraits/${props.name}.png`;
 return (
     <div
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
     >
         <img src={Portrait}/>
         <TeamCarouselPhoto name={props.name}/>
         <TeamCarouselDescription name={props.name} description={props.description}/>
     </div>
 )
}

export default TeamCarouselItem;