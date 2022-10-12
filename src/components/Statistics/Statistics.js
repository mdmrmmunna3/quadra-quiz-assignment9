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
            <div >
                <ResponsiveContainer width={"100%"} aspect={2}>
                    <LineChart width={500} height={500} data={newRechart}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;