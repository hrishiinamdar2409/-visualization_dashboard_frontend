import { NavLink, useLocation } from "react-router-dom";

const DashIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const BarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const DocIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const navItems = [
  { to: "/", label: "Dashboard", Icon: DashIcon },
  { to: "/analytics", label: "Analytics", Icon: BarIcon },
  { to: "/reports", label: "Reports", Icon: DocIcon },
  { to: "/insights", label: "Insights", Icon: InfoIcon },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-[220px] bg-[#111118] border-r border-white/[0.07] min-h-screen p-4 flex flex-col gap-1 sticky top-0 h-screen shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-2 mb-7 mt-1">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#ff6584] flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
        <span className="font-syne font-extrabold text-[#f0f0ff] text-[15px] tracking-tight">
          Visio
        </span>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#f0f0ff]/25 px-2.5 mb-2">
        Navigation
      </p>

      {navItems.map(({ to, label, Icon }) => {
        const active = to === "/" ? pathname === "/" : pathname === to;
        return (
          <NavLink
            key={to}
            to={to}
            className={`relative flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-[13px] font-dm font-medium transition-all duration-150
              ${
                active
                  ? "bg-[#1c1c28] border border-white/[0.09] text-[#f0f0ff]"
                  : "text-[#f0f0ff]/45 hover:bg-[#16161f] hover:text-[#f0f0ff]/75 border border-transparent"
              }`}
          >
            {active && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r bg-[#6c63ff]" />
            )}
            <span className={active ? "text-[#6c63ff]" : "opacity-60"}>
              <Icon />
            </span>
            {label}
          </NavLink>
        );
      })}

      <div className="flex-1" />

      <div className="mx-1 p-3 rounded-xl bg-[#16161f] border border-white/[0.05]">
        <p className="font-dm text-[11px] text-[#f0f0ff]/30">
          Visualization Dashboard
        </p>
        <p className="font-dm text-[10px] text-[#f0f0ff]/15 mt-0.5">v1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
