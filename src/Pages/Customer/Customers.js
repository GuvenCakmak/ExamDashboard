import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'

function Customers() {

  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {

    fetch("https://dummyjson.com/users")
      .then((data) => data.json())
      .then((data) => setUsers(data))

  }, [])


  const columns = [

    { field: 'id', headerName: 'ID', width: 300, },
    { field: 'firstName', headerName: 'Name', width: 450, },
    { field: 'email', headerName: 'Email', width: 450, },
    { field: 'phone', headerName: 'Phone Number', width: 450, },


  ];
  console.log(users)

  return (

    <Box sx={{ height: 700, width: '100%', }}>
      <DataGrid sx={{ color: "white", }}
        rows={users.users}
        columns={columns}
      />

    </Box>
  )
}

export default Customers;
