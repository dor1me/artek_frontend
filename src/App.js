import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import ImageSwitcher from "./MapComponents/ImageChanger";
import Scroll from "./MainComponents/ScrollComponent";
import TestGame from "./Games/TestGame";
import './App.css'
import Map from "./MapComponents/Map";
import ModalCard from "./ObjectInfoComponents/ModalCard";

function App() {
  return (
    <div className="App">
      <MainScreen/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <ModalCard/>
      {/*<ImageSwitcher/>*/}
      {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}

    </div>
  );
}





export default App;
