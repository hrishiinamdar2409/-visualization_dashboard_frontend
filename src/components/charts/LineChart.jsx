import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { darkTooltip, axisStyle } from "../../utils/chartHelpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const ChartCard = ({ title, subtitle, children }) => (
  <div className="animate-fade-up bg-[#111118] border border-white/[0.07] rounded-2xl p-6">
    <div className="mb-5">
      <h2 className="font-syne font-bold text-[#f0f0ff] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-xs text-[#f0f0ff]/25 mt-1">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const LineChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <ChartCard
        title="Relevance Trend"
        subtitle="Relevance scores over topics"
      >
        <div className="flex items-center justify-center h-48 text-sm text-[#f0f0ff]/25">
          No data available
        </div>
      </ChartCard>
    );
  }

  const labels = data.slice(0, 10).map((d) => d.topic || "N/A");
  const chartData = {
    labels,
    datasets: [
      {
        label: "Relevance",
        data: data.slice(0, 10).map((d) => d.relevance),
        borderColor: "#ff6584",
        backgroundColor: "rgba(255,101,132,0.1)",
        pointBackgroundColor: "#ff6584",
        pointBorderColor: "rgba(255,101,132,0.3)",
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: darkTooltip },
    scales: { x: axisStyle, y: axisStyle },
  };

  return (
    <ChartCard title="Relevance Trend" subtitle="Relevance scores over topics">
      <Line data={chartData} options={options} />
    </ChartCard>
  );
};

export default LineChart;
