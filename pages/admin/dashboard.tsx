"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import CreateJob from "./CreateJob";
import JobList from "./JobList";
import IssuesList from "./IssuesList";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/auth/login"); // Redirect to login if not authenticated
    }
  }, []);
  const [selectedSection, setSelectedSection] = useState("list");

  return (
    <div className="flex bg-white min-h-screen text-black">
      
      <Sidebar setSelectedSection={setSelectedSection} />

      <div className="p-6 w-full bg-white text-black">
        <h1 className="text-2xl poppins select-none font-base mb-4">Admin Dashboard</h1>

        {selectedSection === "create" && (
          <div className="bg-white p-6 shadow-lg rounded-lg text-black">
            <CreateJob />
          </div>
        )}
        {selectedSection === "list" && <JobList />}
        {selectedSection === "issues" && <IssuesList />}
      </div>
    </div>
  );
};

export default Dashboard;
