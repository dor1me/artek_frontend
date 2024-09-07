import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import Carousel from "./TeamComponents/TeamCarousel";
import TeamCarousel from "./TeamComponents/TeamCarousel";

function App() {
  return (
    <div className="App">
      <MainScreen/>
        <TeamCarousel/>
    </div>
  );
}



export default App;
