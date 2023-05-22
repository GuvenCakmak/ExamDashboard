import "./scss/main.scss"
import Home from "./Pages/Home/Home";
import { Route, Routes, Router } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard";
import SidebarNav from "./Components/Bars/sidebar/Sidebar";
import Navbar from "./Components/Bars/Navbar/Navbar";
import Showbars from "./Components/Bars/Showbars";
import Sidetest from "./Components/Bars/sidebar/sidetest";
import Layout from "./Components/Bars/sidebar/Layout";
import Products from "./Pages/Product/Product";
import { useAuth0 } from "@auth0/auth0-react";
import Customers from "./Pages/Customer/Customers";

function App() {


  return (


    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Customers" element={<Customers />} />
      </Routes>
    </>

  );

}

export default App;
