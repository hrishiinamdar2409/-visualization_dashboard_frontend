const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a0f] gap-5">
    <div className="w-12 h-12 rounded-full border-2 border-[#1c1c28] border-t-[#6c63ff] animate-spin-ring" />
    <p className="font-dm text-xs uppercase tracking-widest text-[#f0f0ff]/30">
      Loading data…
    </p>
  </div>
);

export default Loader;
