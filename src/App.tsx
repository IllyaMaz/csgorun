import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./components/globalStule";
import Double from "./pages/double";
import RollRun from "./pages/rollRun";
import JackRun from "./pages/jackRun";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/double" element={<Double/>}/>
        <Route path="/rollrun" element={<RollRun/>}/>
        <Route path="/jackrun" element={<JackRun/>}/>
      </Routes>
    </>
    
  );
}

export default App;
