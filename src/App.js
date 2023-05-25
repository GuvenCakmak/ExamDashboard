import "./scss/main.scss"
import Home from "./Pages/Home/Home";
import { Route, Routes, } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Product/Product";
import Customers from "./Pages/Customer/Customers";
import Transactions from "./Pages/Transaction/Transaction";
import Line from "./Pages/Line";
import Pie from "./Pages/pie";
import Bar from "./Pages/bar";

function App() {


  return (


    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Line" element={<Line />} />
        <Route path="/Pie" element={<Pie />} />
        <Route path="/Bar" element={<Bar />} />
      </Routes>
    </>

  );

}

export default App;
