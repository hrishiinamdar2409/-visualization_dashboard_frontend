import CountryFilter from "./CountryFilter";
import TopicFilter from "./TopicFilter";
import RegionFilter from "./RegionFilter";
import SectorFilter from "./SectorFilter";
import PestleFilter from "./PestleFilter";
import SourceFilter from "./SourceFilter";

import { hasActiveFilters, emptyFilters } from "../../utils/filterHelpers";

const FilterPanel = ({
  countries,
  topics,
  regions,
  sectors,
  pestles,
  sources,
  filters,
  setFilters,
}) => {
  const active = hasActiveFilters(filters);

  return (
    <div className="animate-fade-up bg-[#111118] border border-white/[0.07] rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-syne font-bold text-[#f0f0ff] tracking-tight">
            Filters
          </h2>

          <p className="text-xs text-[#f0f0ff]/25 mt-0.5">
            Narrow down the dashboard data
          </p>
        </div>

        {active && (
          <button
            onClick={() => setFilters(emptyFilters)}
            className="text-xs font-dm font-medium text-[#f0f0ff]/40 border border-white/10 rounded-lg px-3.5 py-1.5 hover:border-[#ff6584]/50 hover:text-[#ff6584] transition-all"
          >
            ✕ Reset Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CountryFilter
          countries={countries}
          filters={filters}
          setFilters={setFilters}
        />

        <TopicFilter
          topics={topics}
          filters={filters}
          setFilters={setFilters}
        />

        <RegionFilter
          regions={regions}
          filters={filters}
          setFilters={setFilters}
        />

        <SectorFilter
          sectors={sectors}
          filters={filters}
          setFilters={setFilters}
        />

        <PestleFilter
          pestles={pestles}
          filters={filters}
          setFilters={setFilters}
        />

        <SourceFilter
          sources={sources}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
