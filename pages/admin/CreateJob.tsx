import { useState } from "react";
import { createJob } from "../../services/jobService";
import { Button } from "../components/ui/Button";

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
    <div className="flex">
      <div className="p-1 w-full">
        <h1 className="text-xl font-base poppins mb-4">Create Job</h1>
        <div className="grid grid-cols-3 gap-9 mb-9">
          {Object.keys(newJob).map((key) => (
            <input
  className="w-full p-3 border border-black-300 text-xl poppins placeholder:text-xl placeholder:text-grey-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  type="text"
  placeholder={key}
  value={(newJob as any)[key]}
  onChange={(e) => setNewJob({ ...newJob, [key]: e.target.value })}
/>

          ))}
        </div>
        <Button onClick={handleCreateJob} className="mb-6 poppins text-sm">Create Job</Button>
      </div>
    </div>
  );
};

export default CreateJobPage;
