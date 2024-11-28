import React from 'react'
import { Bar,Doughnut,Line } from 'react-chartjs-2'

import revenueData from "../revenueData.json"
import sourceData from "../sourceData.json"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    ArcElement,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);


const dashboard = () => {
  return (
    <div>
        <div style={{width:'80vw',height:'40vh',display:'flex',justifyContent:'space-around'}}>
            <Bar
                data={{
                    labels: sourceData.map((data)=> data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            ],
                            borderRadius: 5,
                        },
                        ],
                }}
                options = {{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "Bar Chart",
                        },
                    },
                }}
            />
            <Doughnut
                data={{
                    labels: sourceData.map((data)=> data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            ],
                            borderRadius: 5,
                        },
                        ],
                }}
                options = {{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "Doughnut",
                        },
                    },
                }}
            />
        </div>
        <Line
            data={{
                labels: revenueData.map((data)=> data.label),
                datasets: [
                    {
                    label: "Revenue",
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                    },
                    {
                    label: "Cost",
                    data: revenueData.map((data) => data.cost),
                    backgroundColor: "#FF3030",
                    borderColor: "#FF3030",
                    },
                ]
            }}
            options = {{
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Monthly Cost and Revenue",
                    },
                },
            }}
        />
    </div>
  )
}

export default dashboard
