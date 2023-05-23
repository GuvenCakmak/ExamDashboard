import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Header from "../../Components/Header";
import Navbar from "../../Components/Bars/Navbar/Navbar";

function Customers() {

  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {

    fetch("https://dummyjson.com/users")
      .then((data) => data.json())
      .then((data) => setUsers(data))

  }, [])


  const columns = [

    { field: 'id', headerName: 'ID', width: 120, },
    { field: 'firstName', headerName: 'Name', width: 150, },
    { field: 'email', headerName: 'Email', width: 220, },
    { field: 'phone', headerName: 'Phone Number', width: 200, },


  ];
  console.log(users)

  return (

    <Box sx={{ height: 700, width: '100%', display: "flex" }}>
      <SidebarNav />
      <Box sx={{ width: '100%' }} >
        <Navbar />
        <Header title="CUSTOMERS" subtitle="Welcome to your customer page" />
        <DataGrid sx={{ color: "white", }}
          rows={users.users}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Customers;
