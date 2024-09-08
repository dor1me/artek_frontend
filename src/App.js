import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import Carousel from "./TeamComponents/TeamCarousel";
import TeamCarousel from "./TeamComponents/TeamCarousel";
import UnityGame from "./Games/Game_1";
import MediaPlayer from "./MediaPlayerCompinents/MediaPlayer";
import Parallax from "./MainComponents/Parallax";
import MapObject from "./MapComponents/MapObject";

function App() {
  return (
    <div className="App">
      <MainScreen/>
      <MapObject/>
      {/*<UnityGame/>*/}
    </div>
  );
}



export default App;
