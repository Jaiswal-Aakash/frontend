"use client";

import { useEffect, useState } from "react";
import { fetchJobs, deleteJob } from "../../services/jobService";
import { Button } from "../components/ui/Button";
import { FaTrash } from "react-icons/fa";

const JobList = () => {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const response = await fetchJobs();
      setJobs(response?.data || []);
    } catch (error) {
      console.error("Failed to load jobs:", error);
    }
  };

  const handleDeleteJob = async (id: number) => {
    await deleteJob(id);
    loadJobs();
  };
  const heading = ["Role","Location","Department","Job Location","Description","Position Title","Experience","Qualification","Job Type","Salary","Action"]

  return (
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h2 className="text0xl font-base mb-4 poppins text-black">Job List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-black">
          <thead>
            <tr className="bg-gray-200">
              {heading.map((item)=>
                  <th className="border p-0 poppins text-sm font-semibold">{item}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id} className="text-center bg-white">
                  <td className="border poppins text-sm p-3">{job.role}</td>
                  <td className="border poppins text-sm p-3">{job.location}</td>
                  <td className="border poppins text-sm p-3">{job.department}</td>
                  <td className="border poppins text-sm p-3">{job.joblocation}</td>
                  <td className="border poppins text-xs p-3">{job.Job_Description}</td>
                  <td className="border poppins text-sm p-3">{job.Position_Title}</td>
                  <td className="border poppins text-sm p-3">{job.Experience}</td>
                  <td className="border poppins text-sm p-3">{job.Qualification}</td>
                  <td className="border poppins text-sm p-3">{job.Job_type}</td>
                  <td className="border poppins text-sm p-3">{job.Salary}</td>
                  <td className="border poppins text-sm p-3">
                    <Button onClick={() => handleDeleteJob(job.id)} className="bg-red-500 hover:bg-red-600 p-2">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} className="border p-4 text-center text-black">
                  No jobs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
