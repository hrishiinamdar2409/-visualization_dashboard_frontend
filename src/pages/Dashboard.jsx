import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import SummaryCard from "../components/cards/SummaryCard";
import StatsCard from "../components/cards/StatsCard";

import FilterPanel from "../components/filters/FilterPanel";

import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import RegionChart from "../components/charts/RegionChart";

import Loader from "../components/common/Loader";

import {
  fetchAllData,
  fetchFilteredData,
  fetchTopics,
  fetchRegions,
  fetchCountries,
  fetchSectors,
  fetchSources,
  fetchPestles,
} from "../services/dashboardService";

import { emptyFilters } from "../utils/filterHelpers";

const TABLE_COLS = [
  "Topic",
  "Sector",
  "Region",
  "Country",
  "Intensity",
  "Relevance",
  "Likelihood",
];

const Dashboard = ({ pageTitle = "Dashboard" }) => {
  // ======================================================
  // STATES
  // ======================================================

  const [data, setData] = useState([]);

  const [topics, setTopics] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);

  const [sectors, setSectors] = useState([]);
  const [sources, setSources] = useState([]);
  const [pestles, setPestles] = useState([]);
  // const [years, setYears] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(emptyFilters);

  // ======================================================
  // INITIAL LOAD
  // ======================================================

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);

        const [
          allData,
          topicsData,
          regionsData,
          countriesData,
          sectorsData,
          pestlesData,
          sourcesData,
        ] = await Promise.all([
          fetchAllData(),
          fetchTopics(),
          fetchRegions(),
          fetchCountries(),
          fetchSectors(),
          fetchPestles(),
          fetchSources(),
        ]);

        setData(allData || []);

        setTopics(topicsData || []);
        setRegions(regionsData || []);
        setCountries(countriesData || []);

        setSectors(sectorsData || []);
        setPestles(pestlesData || []);
        setSources(sourcesData || []);
        //setYears(yearsData || []);
      } catch (error) {
        console.error("Dashboard Load Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // ======================================================
  // FILTER DATA
  // ======================================================

  useEffect(() => {
    const loadFilteredData = async () => {
      try {
        const active = Object.values(filters).some((v) => v !== "");

        if (!active) {
          const allData = await fetchAllData();
          setData(allData || []);
          return;
        }

        const filtered = await fetchFilteredData(filters);

        setData(filtered || []);
      } catch (error) {
        console.error("Filter Error:", error);
      }
    };

    loadFilteredData();
  }, [filters]);

  // ======================================================
  // HELPERS
  // ======================================================

  const avg = (key) => {
    if (!data.length) return 0;

    const validData = data.filter((d) => d[key] !== "" && d[key] !== null);

    if (!validData.length) return 0;

    const total = validData.reduce(
      (sum, item) => sum + Number(item[key] || 0),
      0,
    );

    return (total / validData.length).toFixed(1);
  };

  const uniqueCountries = new Set(data.map((d) => d.country).filter(Boolean))
    .size;

  // ======================================================
  // LOADING
  // ======================================================

  if (loading) return <Loader />;

  // ======================================================
  // UI
  // ======================================================

  return (
    <DashboardLayout pageTitle={pageTitle}>
      {/* HEADER */}

      <div className="mb-7">
        <h1 className="font-syne text-3xl font-extrabold text-[#f0f0ff] tracking-tight leading-none mb-1.5">
          {pageTitle}
        </h1>

        <p className="text-sm text-[#f0f0ff]/30">
          Real-time analytics across all your data sources
        </p>
      </div>

      {/* KPI ROW */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="Total Records"
          value={data.length.toLocaleString()}
          subtitle="Active in current view"
          colorClass="from-[#6c63ff]/10"
          borderClass="border-[#6c63ff]/20"
          accentText="text-[#6c63ff]"
        />

        <StatsCard
          title="Avg. Intensity"
          value={avg("intensity")}
          colorClass="from-[#ff6584]/10"
          borderClass="border-[#ff6584]/20"
          icon="⚡"
        />

        <StatsCard
          title="Avg. Relevance"
          value={avg("relevance")}
          colorClass="from-[#43e97b]/10"
          borderClass="border-[#43e97b]/20"
          icon="🎯"
        />

        <StatsCard
          title="Countries"
          value={uniqueCountries}
          colorClass="from-[#f7971e]/10"
          borderClass="border-[#f7971e]/20"
          icon="🌍"
        />
      </div>

      {/* FILTER PANEL */}

      <FilterPanel
        countries={countries}
        topics={topics}
        regions={regions}
        sectors={sectors}
        pestles={pestles}
        sources={sources}
        filters={filters}
        setFilters={setFilters}
      />

      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6">
        <BarChart data={data} />

        <PieChart data={data} />

        <LineChart data={data} />

        <RegionChart data={data} />
      </div>

      {/* TABLE */}

      <div className="animate-fade-up bg-[#111118] border border-white/[0.07] rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
          <div>
            <h2 className="font-syne font-bold text-[#f0f0ff] tracking-tight">
              Recent Records
            </h2>

            <p className="text-xs text-[#f0f0ff]/25 mt-0.5">
              Showing first 10 entries
            </p>
          </div>

          <span className="bg-[#1c1c28] border border-white/[0.07] rounded-lg px-3 py-1 text-[11px] font-dm font-medium text-[#f0f0ff]/40">
            {data.length} total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/[0.07] bg-[#16161f]">
                {TABLE_COLS.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/25 font-dm whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.slice(0, 10).map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.04] hover:bg-[#16161f] transition-colors duration-150"
                >
                  {[
                    row.topic,
                    row.sector,
                    row.region,
                    row.country,
                    row.intensity,
                    row.relevance,
                    row.likelihood,
                  ].map((val, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 text-[12px] font-dm whitespace-nowrap ${
                        j >= 4
                          ? "text-[#6c63ff] font-semibold"
                          : "text-[#f0f0ff]/45"
                      }`}
                    >
                      {val || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
