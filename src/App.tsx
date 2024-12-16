import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./components/globalStule";
import Double from "./pages/double";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/double" element={<Double/>}/>
      </Routes>
    </>
    
  );
}

export default App;
