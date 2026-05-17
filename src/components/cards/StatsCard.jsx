const StatsCard = ({
  title,
  value,
  icon,
  colorClass = "from-[#6c63ff]/10",
  borderClass = "border-[#6c63ff]/20",
  change,
}) => (
  <div
    className={`animate-fade-up relative overflow-hidden bg-[#111118] border rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/10 ${borderClass}`}
  >
    {/* glow blob */}
    <div
      className={`absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-br ${colorClass} to-transparent translate-x-8 -translate-y-8 blur-xl`}
    />

    <div className="relative flex justify-between items-start">
      <div>
        <p className="font-dm text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/40 mb-3">
          {title}
        </p>
        <p className="font-syne text-4xl font-extrabold text-[#f0f0ff] leading-none">
          {value}
        </p>
        {change !== undefined && (
          <p
            className={`mt-2 text-xs font-medium ${change >= 0 ? "text-[#43e97b]" : "text-[#ff6584]"}`}
          >
            {change >= 0 ? "▲" : "▼"} {Math.abs(change)}% vs last period
          </p>
        )}
      </div>
      {icon && (
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-white/5 border border-white/5`}
        >
          {icon}
        </div>
      )}
    </div>

    {/* bottom accent */}
    <div
      className={`absolute bottom-0 left-0 w-2/5 h-0.5 bg-gradient-to-r ${colorClass} to-transparent`}
    />
  </div>
);

export default StatsCard;
