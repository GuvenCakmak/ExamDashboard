
import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


function PieProduct() {


  const data = [
    { name: 'Shoes', Amount: 7 },
    { name: 'Phones', Amount: 4 },
    { name: 'Clothes', Amount: 10 },
    { name: 'Watches', Amount: 6 },
    { name: 'Jewelry', Amount: 3 }
  ];


  return (
    <PieChart width={400} height={300}>
      <Tooltip />
      <Pie data={data} dataKey="Amount" outerRadius={150} fill='#4588FE' />
    </PieChart>
  );
}

export default PieProduct;