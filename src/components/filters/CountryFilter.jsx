const CountryFilter = ({ countries, filters, setFilters }) => (
  <div>
    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/30 mb-1.5">
      Country
    </label>
    <select
      className="w-full bg-[#1c1c28] border border-white/[0.07] rounded-xl px-3 py-2.5 text-sm text-[#f0f0ff] font-dm appearance-none outline-none focus:border-[#6c63ff] transition-colors cursor-pointer"
      value={filters.country}
      onChange={(e) => setFilters({ ...filters, country: e.target.value })}
    >
      <option value="">All Countries</option>
      {countries.map((c, i) => (
        <option key={i} value={c}>
          {c}
        </option>
      ))}
    </select>
  </div>
);

export default CountryFilter;
