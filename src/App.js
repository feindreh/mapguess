import { Routes, Route } from "react-router-dom";

import "./App.css"
import "./reset.css"

import NavBar from "./components/Nav";
import Home from "./components/Home";
import PickPlay from "./components/PickPlay";
import PickEdit from "./components/PickEdit";
import Create from "./components/Create/Create";
import Game from "./components/Game";
import EditPoint from "./components/Create/EditPoint"




function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/pickPlay" element = {<PickPlay/>}/>
        <Route path="/pickEdit" element = {<PickEdit/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/create/:paramId" element={<Create/>}/>
        <Route path="/play/:id" element = {<Game/>}/>
        <Route path="/editPoint/:mapID/:pointID" element={<EditPoint/>}></Route>
      </Routes>
    </div>
  );
}

export default App;