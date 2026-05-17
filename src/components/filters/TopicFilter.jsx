const TopicFilter = ({ topics, filters, setFilters }) => (
  <div>
    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/30 mb-1.5">
      Topic
    </label>
    <select
      className="w-full bg-[#1c1c28] border border-white/[0.07] rounded-xl px-3 py-2.5 text-sm text-[#f0f0ff] font-dm appearance-none outline-none focus:border-[#6c63ff] transition-colors cursor-pointer"
      value={filters.topic}
      onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
    >
      <option value="">All Topics</option>
      {topics.map((t, i) => (
        <option key={i} value={t}>
          {t}
        </option>
      ))}
    </select>
  </div>
);

export default TopicFilter;
