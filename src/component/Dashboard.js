import React from "react";
import "./style.css";
import { Bar, Scatter, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LineElement,
  LinearScale,
  Tooltip,
  PointElement,
  Legend,
} from "chart.js";
ChartJS.register(
  BarElement,
  CategoryScale,
  LineElement,
  ArcElement,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

const Utils = {
  numbers({ count, min, max }) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
  },
  scatterData(count) {
    const points = [];
    for (let i = 0; i < count; i++) {
      points.push({ x: Math.random() * 100, y: Math.random() * 100 });
    }
    return points;
  },

  CHART_COLORS: {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
  },
};

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// Data for Bar Chart
const barData = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS),
      borderColor: "rgba(0, 0, 0, 0.1)", // Optional: Border for each bar
      borderWidth: 1,
    },
  ],
};

// scattert
const scatterData = {
  datasets: [
    {
      label: "Scatter Dataset",
      data: Utils.scatterData(10),
      backgroundColor: "rgb(75, 192, 192)",
      pointRadius: 6,
    },
  ],
};
// line data
const lineData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "Line Chart Dataset",
      data: [10, 20, -5, 15, 10, 25],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      pointRadius: 6,
      pointHoverRadius: 10,
      tension: 0.4,
      fill: false,
    },
  ],
};

// Chart options
const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Days",
      },
    },
    y: {
      title: {
        display: true,
        text: "Values",
      },
    },
  },
};

// pie
const pieData = {
  labels: ["Orders Completed", "Pending Orders", "Cancelled Orders"],
  datasets: [
    {
      label: "Orders",
      data: [60, 30, 10],
      backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
    },
  ],
};

// Options for the pie chart
const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};

// multaxix
const multiAxisData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "Total Orders",
      data: [120, 150, 100, 130, 170, 200],
      borderColor: "rgb(255, 221, 51)",
      backgroundColor: "rgba(255, 221, 51, 0.2)",
      pointRadius: 6,
      pointHoverRadius: 10,
      yAxisID: "y1",
    },
    {
      label: "Revenue",
      data: [50, 70, 40, 60, 90, 110],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      pointRadius: 6,
      pointHoverRadius: 10,
      yAxisID: "y2",
    },
  ],
};

const multiAxisOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Days",
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Total Orders",
      },
    },
    y2: {
      type: "linear",
      display: true,
      position: "right",
      title: {
        display: true,
        text: "Revenue",
      },
      grid: {
        drawOnChartArea: false, // Avoid grid lines for the second axis
      },
    },
  },
};

const Dashboard = () => {
  return (
    <>
      <div className="mar">
        <div className="container">
          <div className="row">
            <div className="col-sm-3  mt-5 mb-5">
              <div className="card  border bg">
                <div className="card-body">
                  <h2>71,305</h2>
                  <p className="text-muted">Online Signup</p>
                  <Bar data={barData} />
                </div>
              </div>
            </div>
            <div className="col-sm-3  mt-5 mb-5">
              <div className="card border bg">
                <div className="card-body">
                  <h2>9,302</h2>
                  <p className="text-muted">New Visitors Today</p>
                  <Line data={multiAxisData} options={multiAxisOptions} />
                </div>
              </div>
            </div>
            {/* new */}

            <div className="col-sm-3  mt-5 mb-5">
              <div className="card border bg">
                <div className="card-body">
                  <h2>9,302</h2>
                  <p className="text-muted">Monthly Total Orders</p>
                  <Scatter data={scatterData} />
                </div>
              </div>
            </div>
            <div className="col-sm-3  mt-5 mb-5">
              <div className="card border bg">
                <div className="card-body">
                  <h2>7,302</h2>
                  <p className="text-muted">Total Revenue This Year</p>
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>

            {/* new */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
