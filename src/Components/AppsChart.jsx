import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const AppsChart = () => {
    const { id } = useParams();
    const { apps } = useApps();
    const app = apps.find(a => a.id === Number(id));

    const appChartData = app?.ratings
        ?.map(singleObj => ({
            name: singleObj.name,
            count: singleObj.count,
        }))
        .reverse();

    return (
        <div className="w-full h-[400px] p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
                Ratings
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={appChartData}
                    margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AppsChart;
