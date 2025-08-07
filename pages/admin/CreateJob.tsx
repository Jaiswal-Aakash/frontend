import { useState } from "react";
import { createJob } from "../../services/jobService";
import { Button } from "../../components/ui/Button";

const CreateJobPage = () => {
  const [newJob, setNewJob] = useState({
    role: "",
      joblocation: "",
      Job_Description: "",
      Position_Title: "",
      Experience: "",
      Qualification: "",
      Job_type: "",
      Salary: "",
      location: "",
      department: "",
  });

  const handleCreateJob = async () => {
    if (Object.values(newJob).some((value) => value.trim() === "")) {
      alert("All fields are required.");
      return;
    }

    await createJob(newJob);
    setNewJob({
      role: "",
      joblocation: "",
      Job_Description: "",
      Position_Title: "",
      Experience: "",
      Qualification: "",
      Job_type: "",
      Salary: "",
      location: "",
      department: "",
    });
    alert("Job Created Successfully!");
  };

  return (
    <div className="w-full">
      <div className="p-2 sm:p-3 md:p-4">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold poppins mb-2 sm:mb-3 md:mb-4 text-gray-800">Create Job</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
          {Object.keys(newJob).map((key) => (
            <div key={key} className="space-y-1">
              <label className="block text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-700 poppins capitalize">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                className="w-full p-1.5 sm:p-2 md:p-3 border border-gray-300 text-[8px] sm:text-[10px] md:text-xs poppins placeholder:text-[8px] sm:placeholder:text-[10px] md:placeholder:text-xs placeholder:text-gray-500 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                type="text"
                placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                value={(newJob as any)[key]}
                onChange={(e) => setNewJob({ ...newJob, [key]: e.target.value })}
              />
            </div>
          ))}
        </div>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={handleCreateJob} 
          className="poppins w-full sm:w-auto text-[8px] sm:text-[10px] md:text-xs"
        >
          Create Job
        </Button>
      </div>
    </div>
  );
};

export default CreateJobPage;
