
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
 import Iterm from "./Container/Content/Iterm"
import Navbar from './Container/Navbar/Navbar';
import Scheduled from './Container/Scheduled item/Scheduled';
import Sidebar from './Container/SideNavbar/Sidebar';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
     <Sidebar />
     <Routes>
      <Route path="/" exact element={<Iterm />} />
      <Route path="/scheduled" exact element={<Scheduled />} />
     </Routes>
  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
