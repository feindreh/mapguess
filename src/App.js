import { Routes, Route } from "react-router-dom";

import "./App.css"
import "./reset.css"

import NavBar from "./components/Nav";
import Home from "./components/Home";
import PickPlay from "./components/PickPlay";
import PickEdit from "./components/PickEdit";
import Create from "./components/Create/Create";
import Game from "./components/Game";




function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/pickPlay" element = {<PickPlay/>}/>
        <Route path="/pickEdit" element = {<PickEdit/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/create/:paramid" element={<Create/>}/>
        <Route path="/play" element = {<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;