import './App.css';
import Home from './pages/home';
import Index from './pages/index';
import Login from './pages/login';
import Establish from './pages/establish';
import ClockIn from './pages/establish/clockIn';
// 路由使用
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/*" element={<Login />}></Route> */}
        <Route path="/*" element={<Index />}></Route>
        {/* <Route path="/index" element={<Index />}></Route> */}
        <Route path="/establish" element={<Establish />}></Route>
        <Route path="/clockIn" element={<ClockIn />}></Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
        
  );
}

export default App;
