import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
import CompanyTree from "./CompanyTree";
import Settelment from "./Settelment";
import AddUsers from "./AddUsers";
import PendingPaid from "./PendingPaid";
const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <div className={`main-content w-100 ${isSidebarOpen ? "shifted" : ""}`}>
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="content mt-5 mx-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users-info" element={<Users />} />
            <Route path="/company-tree" element={<CompanyTree />} />
            <Route path="/set" element={<Settelment />} />
            <Route path="/addusers" element={<AddUsers />} />
            <Route path="/addusers/:id" element={<AddUsers />} />
            <Route path="/pendingPaid" element={<PendingPaid />} />
            {/* Add more routes as needed */}
          </Routes>
          {/* <Routes>
            <Route path="/addusers" element={<AddUsers />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
