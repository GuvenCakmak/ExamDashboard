import "./scss/main.scss"
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard";
import SidebarNav from "./Components/Bars/sidebar/Sidebar";
import Navbar from "./Components/Bars/Navbar/Navbar";
import Showbars from "./Components/Bars/Showbars";


function App() {


  return (
    <>
      <Showbars>
        <Navbar />
        <SidebarNav />
      </Showbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </>

  );

}

export default App;
