
import './App.css';
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import İzlenenler from "./pages/İzlenenler";
import İzlemeListesi from "./pages/İzlemeListesi";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/izlenenler" element={<İzlenenler/>}/>
        <Route  path="/izlemelistesi" element={<İzlemeListesi/>}/>
      </Routes>
    
    </>
  );
}

export default App;
