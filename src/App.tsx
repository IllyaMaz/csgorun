import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./components/globalStule";
import Double from "./pages/double";
import RollRun from "./pages/rollRun";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/double" element={<Double/>}/>
        <Route path="/rollrun" element={<RollRun/>}/>
      </Routes>
    </>
    
  );
}

export default App;
