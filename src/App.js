import './App.css';
import Home from './pages/home';
import Index from './pages/index';
import Establish from './pages/establish';
// 路由使用
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/*" element={<Index />}></Route>
        <Route path="/establish" element={<Establish />}></Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
        
  );
}

export default App;
