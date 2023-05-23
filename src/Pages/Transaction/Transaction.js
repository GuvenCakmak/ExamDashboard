import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Header from "../../Components/Header";
import Navbar from "../../Components/Bars/Navbar/Navbar";

function Transactions() {

    const [carts, setCarts] = useState({ carts: [] });

    useEffect(() => {

        fetch("https://dummyjson.com/cart")
            .then((data) => data.json())
            .then((data) => setCarts(data))

    }, [])





    const columns = [

        { field: 'id', headerName: 'ID', width: 120, },
        { field: 'userId', headerName: 'UserID', width: 120, },
        { field: 'date', headerName: 'CreatedAt', width: 200, valueGetter: (params) => params.row.date = '2023-04-05' },
        { field: 'totalQuantity', headerName: 'AmountProducts', width: 120, },
        { field: 'total', headerName: 'cost', width: 120, },



    ];


    return (

        <Box sx={{ height: 700, width: '100%', display: "flex" }}>
            <SidebarNav />
            <Box sx={{ width: '100%' }}>
                <Navbar />
                <Header title="TRANSACTIONS" subtitle="Welcome to your transaction page" />
                <DataGrid sx={{ color: "white", }}
                    rows={carts.carts}
                    columns={columns}
                    getRowId={(row) => row.id}
                />
            </Box>
        </Box>
    )
}

export default Transactions;
