const Navbar = ({ pageTitle = "Dashboard" }) => {
  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-[#111118] border-b border-white/[0.07] px-7 h-[60px] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#43e97b] animate-pulse-dot" />
        <h1 className="font-syne font-bold text-[#f0f0ff] text-[15px] tracking-tight">
          {pageTitle}
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-xs font-dm text-[#f0f0ff]/25 hidden sm:block">
          {dateStr}
        </span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#ff6584] flex items-center justify-center font-syne font-bold text-white text-sm">
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
