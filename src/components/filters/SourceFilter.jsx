const SourceFilter = ({ sources, filters, setFilters }) => (
  <div>
    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/30 mb-1.5">
      Source
    </label>

    <select
      className="w-full bg-[#1c1c28] border border-white/[0.07] rounded-xl px-3 py-2.5 text-sm text-[#f0f0ff] font-dm appearance-none outline-none focus:border-[#6c63ff] transition-colors cursor-pointer"
      value={filters.source}
      onChange={(e) =>
        setFilters({
          ...filters,
          source: e.target.value,
        })
      }
    >
      <option value="">All Sources</option>

      {sources.map((source, i) => (
        <option key={i} value={source}>
          {source}
        </option>
      ))}
    </select>
  </div>
);

export default SourceFilter;
