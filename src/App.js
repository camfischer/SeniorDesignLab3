import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import CameronFischer from "./pages/CameronFischer"
import LukeMartin from "./pages/LukeMartin"
import AustinLetsch from "./pages/AustinLetsch"
import BeckyRicke from "./pages/BeckyRicke"


function App() {
  return (
    <BrowserRouter>
     <div className='HoldLinks'>
        <h1>Links</h1>
        <Link to="/">Home</Link>
      </div>
    <div>
      <Link to="/CameronFischer">Cameron Fischer</Link>
    </div>
    <div>
      <Link to="/LukeMartin">Luke Martin</Link>
    </div>
    <div>
      <Link to="/AustinLetsch">Austin Letsch</Link>
    </div>
    <div>
      <Link to="/BeckyRicke">Becky Ricke</Link>
    </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/CameronFischer" element={<CameronFischer/>}/>
        <Route path="/LukeMartin" element={<LukeMartin/>}/>
        <Route path="/AustinLetsch" element={<AustinLetsch/>}></Route>
        <Route path="/BeckyRicke" element={<BeckyRicke/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//npm install react-router-dom
export default App;
