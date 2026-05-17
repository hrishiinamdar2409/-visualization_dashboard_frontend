import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { darkTooltip } from "../../utils/chartHelpers";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#6c63ff",
  "#ff6584",
  "#43e97b",
  "#f7971e",
  "#38bdf8",
  "#a78bfa",
  "#fb923c",
];

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

const PieChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <ChartCard
        title="Topic Distribution"
        subtitle="Share of topics in current dataset"
      >
        <div className="flex items-center justify-center h-48 text-sm text-[#f0f0ff]/25">
          No data available
        </div>
      </ChartCard>
    );
  }

  const topicMap = {};
  data.forEach((d) => {
    if (d.topic) topicMap[d.topic] = (topicMap[d.topic] || 0) + 1;
  });

  const labels = Object.keys(topicMap).slice(0, 7);
  const values = Object.values(topicMap).slice(0, 7);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: COLORS.map((c) => `${c}cc`),
        borderColor: COLORS,
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "65%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "rgba(240,240,255,0.55)",
          font: { size: 12, family: "DM Sans" },
          padding: 14,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: darkTooltip,
    },
  };

  return (
    <ChartCard
      title="Topic Distribution"
      subtitle="Share of topics in current dataset"
    >
      <Doughnut data={chartData} options={options} />
    </ChartCard>
  );
};

export default PieChart;
