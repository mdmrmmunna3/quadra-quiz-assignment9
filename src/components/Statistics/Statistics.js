import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const rechart = useLoaderData();
    const newRechart = rechart.data;
    console.log(newRechart)
    return (
        <div>
            <h3 className='lg:text-2xl text-fuchsia-500 font-semibold text-center mb-3'>Quiz Rechart Are Here:</h3>
            <div className='flex justify-center items-center'>
                <LineChart width={400} height={400} data={newRechart}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;