const SectorFilter = ({ sectors, filters, setFilters }) => (
  <div>
    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/30 mb-1.5">
      Sector
    </label>

    <select
      className="w-full bg-[#1c1c28] border border-white/[0.07] rounded-xl px-3 py-2.5 text-sm text-[#f0f0ff] font-dm appearance-none outline-none focus:border-[#6c63ff] transition-colors cursor-pointer"
      value={filters.sector}
      onChange={(e) =>
        setFilters({
          ...filters,
          sector: e.target.value,
        })
      }
    >
      <option value="">All Sectors</option>

      {sectors.map((sector, i) => (
        <option key={i} value={sector}>
          {sector}
        </option>
      ))}
    </select>
  </div>
);

export default SectorFilter;
