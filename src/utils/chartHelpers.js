export const aggregateByKey = (data, key) => {
  const map = {};
  data.forEach((item) => {
    const val = item[key];
    if (val) map[val] = (map[val] || 0) + 1;
  });
  return map;
};

export const darkTooltip = {
  backgroundColor: "#1c1c28",
  borderColor: "rgba(255,255,255,0.1)",
  borderWidth: 1,
  titleColor: "#f0f0ff",
  bodyColor: "rgba(240,240,255,0.6)",
  padding: 12,
  cornerRadius: 10,
};

export const axisStyle = {
  ticks: { color: "rgba(240,240,255,0.4)", font: { size: 11 } },
  grid:  { color: "rgba(255,255,255,0.04)" },
  border:{ color: "rgba(255,255,255,0.06)" },
};