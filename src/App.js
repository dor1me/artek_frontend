import React from 'react'
import MainScreen from "./MainComponents/MainScreen";
import './App.css'
import ModalCard from "./ObjectInfoComponents/ModalCard";
import ImageSwitcher from "./MapComponents/ImageChanger";
import Footer from "./Footer/Footer";
import Mouse from "./MainComponents/Mouse";
import ParallaxComponent from "./MainComponents/Parallax";
import Parallax from "./MainComponents/Parallax";
import ScrollComponent from "./MainComponents/ScrollComponent";


function App() {
        return (
    <div className="App">
      <MainScreen/>
        {/*<Mouse/>*/}
      {/*  <ModalCard objectName={'artek_arena'}/>*/}
        <div className='container-map'>
            <ImageSwitcher/>
            <ModalCard objectName={'artek_arena'} classN={'arena'}/>
            <ModalCard objectName={'suuk_su'} classN={'suuk'}/>
            <ModalCard objectName={'school'} classN={'school'}/>
            <ModalCard objectName={'monument'} classN={'monument'}/>
            <ModalCard objectName={'stadium'} classN={'stadium'}/>
            <ModalCard objectName={'audag'} classN={'audag'}/>
            <ModalCard objectName={'stairs'} classN={'stairs'}/>
            <ModalCard objectName={'fortress'} classN={'fortress'}/>
            <ModalCard objectName={'olive'} classN={'olive'}/>
            <ModalCard objectName={'cafe'} classN={'cafe'}/>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
        <ScrollComponent className='footer-scroll'/>

    </div>
  );
}





export default App;
