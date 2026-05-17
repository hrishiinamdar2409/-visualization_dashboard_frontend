import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { darkTooltip, axisStyle } from "../../utils/chartHelpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

const BarChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <ChartCard
        title="Intensity Analysis"
        subtitle="Top 10 topics by intensity score"
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
        label: "Intensity",
        data: data.slice(0, 10).map((d) => d.intensity),
        backgroundColor: labels.map(
          (_, i) => `hsla(${245 + i * 8},70%,65%,0.75)`,
        ),
        borderColor: labels.map((_, i) => `hsla(${245 + i * 8},80%,70%,1)`),
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: darkTooltip },
    scales: { x: axisStyle, y: axisStyle },
  };

  return (
    <ChartCard
      title="Intensity Analysis"
      subtitle="Top 10 topics by intensity score"
    >
      <Bar data={chartData} options={options} />
    </ChartCard>
  );
};

export default BarChart;
