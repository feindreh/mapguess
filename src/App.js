import { Routes, Route } from "react-router-dom";

import "./App.css"
import "./reset.css"

import NavBar from "./components/Nav";
import Home from "./components/Home";
import Game from "./components/Game";




function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/play" element = {<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;