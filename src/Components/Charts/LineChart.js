import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, LineChart, Line, AreaChart, ResponsiveContainer,
    Area
} from 'recharts';

const data = [
    {
        month: 'Jan', kr: 4000,
    },
    {
        month: 'Feb', kr: 3000,
    },
    {
        month: 'Mar', kr: 2000,
    },
    {
        month: 'Apr', kr: 2780,
    },
    {
        month: 'May', kr: 1890,
    },
    {
        month: 'Jun', kr: 2390,
    },
    {
        month: 'Jul', kr: 3490,
    },
    {
        month: 'Aug', kr: 3000,
    },
    {
        month: 'Sep', kr: 2500,
    },
    {
        month: 'Oct', kr: 2700,
    },
    {
        month: 'Nov', kr: 3000,
    },
    {
        month: 'Dec', kr: 2500,
    },
];


function RevenueChart() {
    return (
        <AreaChart
            width={800}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >

            <XAxis dataKey="month" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <Tooltip />
            <Area type="monotone" dataKey="kr" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    )
};

export default RevenueChart;
