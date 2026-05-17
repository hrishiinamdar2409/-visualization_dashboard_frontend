const EmptyState = ({ message = "No data matches your filters" }) => (
  <div className="animate-fade-up bg-[#111118] border border-dashed border-white/10 rounded-2xl p-16 text-center">
    <div className="text-4xl opacity-30 mb-4">◎</div>
    <h2 className="font-syne font-bold text-lg text-[#f0f0ff]/50 mb-2">
      Empty State
    </h2>
    <p className="text-sm text-[#f0f0ff]/25">{message}</p>
  </div>
);

export default EmptyState;
