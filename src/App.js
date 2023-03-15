import { Routes, Route } from "react-router-dom";


import NavBar from "./components/Nav";
import Home from "./components/Home";
import PickPlay from "./components/PickPlay";
import PickEdit from "./components/PickEdit";
import Create from "./components/Create/Create";
import Game from "./components/Game";
import EditPoint from "./components/Create/EditPoint"


import "./style/reset.css"
import "./style/App.css"

function App() {

  return (
    <div id="outerWrap">
      <div id="innerWrap">
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
    </div>
  );
}

export default App;