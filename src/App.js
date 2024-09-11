import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import Carousel from "./TeamComponents/TeamCarousel";
import TeamCarousel from "./TeamComponents/TeamCarousel";
import UnityGame from "./Games/Game_1";
import MediaPlayer from "./MediaPlayerCompinents/MediaPlayer";
import Parallax from "./MainComponents/Parallax";
import MapObject from "./MapComponents/MapObject";
import GamePlayer from "./MediaPlayerCompinents/GamePlayer";
import Map from "./MapComponents/Map";
import ObjectPopupInfo from "./ObjectInfoComponents/ObjectPopupInfo";
import Description from "./MapComponents/Description";

function App() {
  return (
    <div className="App">
      <MainScreen/>
        <Map/>
    </div>
  );
}





export default App;
