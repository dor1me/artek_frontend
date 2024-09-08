import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import Carousel from "./TeamComponents/TeamCarousel";
import TeamCarousel from "./TeamComponents/TeamCarousel";
import UnityGame from "./Games/Game_1";

function App() {
  return (
    <div className="App">
      <MainScreen/>
      <TeamCarousel/>
      {/*<UnityGame/>*/}
    </div>
  );
}



export default App;
