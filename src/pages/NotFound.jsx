import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a0f] gap-4">
    <p className="font-syne font-extrabold text-[120px] leading-none tracking-tight text-[#1c1c28]">
      404
    </p>
    <h1 className="font-syne font-bold text-2xl text-[#f0f0ff] tracking-tight">
      Page not found
    </h1>
    <p className="text-sm font-dm text-[#f0f0ff]/30 mb-2">
      The route you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="bg-[#6c63ff] text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
    >
      Back to Dashboard
    </Link>
  </div>
);

export default NotFound;
