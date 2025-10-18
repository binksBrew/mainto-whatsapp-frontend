import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://api.trinetraventures.com/dashboard-data", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (data.status === "ok") {
          setChartData({
            labels: data.months,
            datasets: [
              {
                label: "Expected Rent (₹)",
                backgroundColor: "#4FC3F7",
                data: data.expected,
              },
              {
                label: "Collected Rent (₹)",
                backgroundColor: "#F8BBD0",
                data: data.collected,
              },
            ],
          });
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading data...</p>;
  if (!chartData) return <p style={{ textAlign: "center" }}>No data available.</p>;

  return (
    <div className="dashboard-card">
      <h2>Monthly Rent Overview</h2>
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1200,
              easing: "easeOutCubic",
            },
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 15,
                  padding: 15,
                  font: { size: 13 },
                },
              },
              tooltip: {
                backgroundColor: "#0D9488",
                titleColor: "#fff",
                bodyColor: "#fff",
              },
            },
            scales: {
              x: {
                grid: { display: false },
                barPercentage: 0.35,
                categoryPercentage: 0.6,
              },
              y: {
                beginAtZero: true,
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: { stepSize: 1000 },
              },
            },
          }}
          height={300}
        />
      </div>
    </div>
  );
}
