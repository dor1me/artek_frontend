import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import './App.css'
import ModalCard from "./ObjectInfoComponents/ModalCard";
import ImageSwitcher from "./MapComponents/ImageChanger";
import Footer from "./Footer/Footer";
import Mouse from "./MainComponents/Mouse";


function App() {
        return (
    <div className="App">
      {/*<MainScreen/>*/}
        {/*<Mouse/>*/}
      {/*  <ModalCard objectName={'artek_arena'}/>*/}
      <ImageSwitcher/>
        <ModalCard objectName={'artek_arena'} classN={'arena'}/>
      {/*<Footer/>*/}
    </div>
  );
}





export default App;
