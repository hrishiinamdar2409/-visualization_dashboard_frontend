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

const RegionChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <ChartCard
        title="Regional Distribution"
        subtitle="Record count by region"
      >
        <div className="flex items-center justify-center h-48 text-sm text-[#f0f0ff]/25">
          No data available
        </div>
      </ChartCard>
    );
  }

  const regionMap = {};
  data.forEach((d) => {
    if (d.region) regionMap[d.region] = (regionMap[d.region] || 0) + 1;
  });

  const labels = Object.keys(regionMap).slice(0, 8);
  const values = Object.values(regionMap).slice(0, 8);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Records",
        data: values,
        backgroundColor: labels.map(
          (_, i) => `hsla(${160 + i * 15},65%,55%,0.7)`,
        ),
        borderColor: labels.map((_, i) => `hsla(${160 + i * 15},70%,60%,1)`),
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: { legend: { display: false }, tooltip: darkTooltip },
    scales: {
      x: axisStyle,
      y: { ...axisStyle, grid: { display: false } },
    },
  };

  return (
    <ChartCard title="Regional Distribution" subtitle="Record count by region">
      <Bar data={chartData} options={options} />
    </ChartCard>
  );
};

export default RegionChart;
