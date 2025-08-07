"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchJobs, deleteJob } from '../../services/jobService';
import { Button } from "../../components/ui/Button";
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
    <div className="p-2 sm:p-3 md:p-4 shadow-lg bg-white rounded-lg max-w-7xl mx-auto">
      <h2 className="text-sm sm:text-base md:text-lg font-base mb-2 sm:mb-3 md:mb-4 poppins text-black">Job List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-black min-w-[400px] max-w-[600px]">
                     <thead>
             <tr className="bg-gray-200">
               {heading.map((item, index)=>
                   <th key={index} className="border p-1 poppins text-[8px] sm:text-[10px] md:text-xs font-semibold w-[8%]">{item}</th>
               )}
             </tr>
           </thead>
           <tbody>
             {jobs.length > 0 ? (
               jobs.map((job) => (
                 <tr key={job.id} className="text-center bg-white hover:bg-gray-50">
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.role}>{job.role}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.location}>{job.location}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.department}>{job.department}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.joblocation}>{job.joblocation}</td>
                   <td className="border poppins text-[6px] sm:text-[8px] md:text-[10px] p-1 max-w-[120px] truncate w-[25%]" title={job.Job_Description}>{job.Job_Description}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.Position_Title}>{job.Position_Title}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.Experience}>{job.Experience}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.Qualification}>{job.Qualification}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.Job_type}>{job.Job_type}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 truncate w-[8%]" title={job.Salary}>{job.Salary}</td>
                   <td className="border poppins text-[8px] sm:text-[10px] md:text-xs p-1 w-[8%]">
                     <Button 
                       variant="danger" 
                       size="xs" 
                       onClick={() => handleDeleteJob(job.id)} 
                       className="p-0.5 text-[6px] sm:text-[8px] md:text-[10px]"
                     >
                       <FaTrash />
                     </Button>
                   </td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan={11} className="border p-2 sm:p-3 md:p-4 text-center text-black poppins text-xs sm:text-sm md:text-base">
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
