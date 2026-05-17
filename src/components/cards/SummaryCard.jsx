const SummaryCard = ({
  title,
  value,
  subtitle,
  colorClass = "from-[#6c63ff]/10",
  borderClass = "border-[#6c63ff]/20",
  accentText = "text-[#6c63ff]",
}) => (
  <div
    className={`animate-fade-up relative overflow-hidden bg-gradient-to-br ${colorClass} via-[#111118] to-[#111118] border ${borderClass} rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default`}
  >
    {/* decorative rings */}
    <div className="absolute top-0 right-0 w-24 h-24 rounded-full border border-white/5 translate-x-8 -translate-y-8" />
    <div className="absolute top-0 right-0 w-36 h-36 rounded-full border border-white/[0.03] translate-x-12 -translate-y-12" />

    <p
      className={`font-dm text-[10px] font-semibold uppercase tracking-widest mb-2.5 ${accentText} opacity-80`}
    >
      {title}
    </p>
    <p className="font-syne text-5xl font-extrabold text-[#f0f0ff] leading-none">
      {value}
    </p>
    {subtitle && <p className="text-sm text-[#f0f0ff]/40 mt-2">{subtitle}</p>}
  </div>
);

export default SummaryCard;
