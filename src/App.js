import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import ImageSwitcher from "./MapComponents/ImageChanger";
import Scroll from "./MainComponents/ScrollComponent";
import TestGame from "./Games/TestGame";
import './App.css'
import Map from "./MapComponents/Map";
import ModalCard from "./ObjectInfoComponents/ModalCard";
import TeamCarousel from "./TeamComponents/TeamCarousel";
import {CrossIcon} from "./Icons/CrossIcon";


function App() {
  return (
    <div className="App">
      <MainScreen/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <ModalCard objectName={'artek_arena'}/>
      <CrossIcon/>
      {/*<TeamCarousel/>*/}
    </div>
  );
}





export default App;
