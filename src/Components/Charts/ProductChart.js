import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Shoes',
        Amountsold: 165,

    },
    {
        name: 'Phones',
        Amountsold: 123,

    },
    {
        name: 'Clothes',
        Amountsold: 65,

    },
    {
        name: 'Watches',
        Amountsold: 300,

    },
    {
        name: 'Jewelry',
        Amountsold: 16,

    },

];

export default class Example extends PureComponent {


    render() {
        return (
            <ResponsiveContainer width={400} height={300} >
                <BarChart width={450} height={250} data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
                    <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
                    <Tooltip />
                    <Bar dataKey="Amountsold" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        );
    }
}