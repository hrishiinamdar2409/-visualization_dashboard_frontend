import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Insights from "../pages/Insights";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
