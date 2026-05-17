import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children, pageTitle }) => (
  <div className="flex min-h-screen bg-[#0a0a0f]">
    <Sidebar />
    <div className="flex-1 flex flex-col min-w-0">
      <Navbar pageTitle={pageTitle} />
      <main className="flex-1 p-7 overflow-y-auto">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
