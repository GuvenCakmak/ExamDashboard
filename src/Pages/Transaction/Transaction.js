import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'

function Transactions() {

    const [carts, setCarts] = useState({ carts: [] });

    useEffect(() => {

        fetch("https://dummyjson.com/cart")
            .then((data) => data.json())
            .then((data) => setCarts(data))

    }, [])





    const columns = [

        { field: 'id', headerName: 'ID', width: 200, },
        { field: 'userId', headerName: 'UserID', width: 200, },
        { field: 'date', headerName: 'CreatedAt', width: 300, valueGetter: (params) => params.row.date = '2023-04-05' },
        { field: 'totalQuantity', headerName: 'AmountProducts', width: 200, },
        { field: 'total', headerName: 'cost', width: 200, },



    ];


    return (

        <Box sx={{ height: 700, width: '100%', }}>
            <DataGrid sx={{ color: "white", }}
                rows={carts.carts}
                columns={columns}
                getRowId={(row) => row.id}
            />

        </Box>
    )
}

export default Transactions;
