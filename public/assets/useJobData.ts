import { useEffect, useState } from "react";
import { fetchJobs } from "../../services/jobService"; // API to fetch jobs
import jobJsonTemplate from "./joinus.json"; // Import JSON template

const useJobData = () => {
  const [jobData, setJobData] = useState(jobJsonTemplate); // Initial JSON

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetchJobs(); // Fetch jobs from backend
        const jobs = response?.data || [];

        // Map API response to match joinUs.json structure
        const updatedJson = {
          ...jobJsonTemplate,
          joinUs: jobs.map((job) => ({
            role: job.role,
            location: "coimbatore",
            department: job.department,
            
            details: {
              header: job.Position_Title,
              joblocation: job.joblocation,
              "Job Description": job.Job_Description,
            },
            
            "Job Requirement": {
              "Postiton Title": job.Position_Title,
              Experience: job.Experience,
              Qualification: job.Qualification,
              "Job type": job.Job_type,
              Salary: job.Salary,
              Location: job.location,
            },
            
            btn1Name: "Apply Now",
            btn2Name: "Share",

            "Job Apply": {
              name: "Apply for this job",
              labelCV: "Resume/CV *",
              btnCV: "Select Resume",
              btnLabel: "Upload in either DOC, DOCX or PDF file format (file size not more than 1MB)",
              firstName: "First name*:",
              lastName: "Last name*:",
              mail: "Email*:",
              mob: "Mobile Number*:",
              questionHeader: "Mandatory Questions",
              CCtc: "Current CTC *",
              ECtc: "Expected CTC *",
              PLocation: "Preferred Location *",
              radioBtnLabel: "Are you currently serving your notice period? *",
              portLabel: "Portfolio (if available)",
              filBtnLabel: "Select File",
              subtnLabel: "Submit",
              sltDep: "Select department*:",
              dropDowndep: [
                "Executive-Shift Incharge",
                "Senior Executive-Relationship Management",
                "Senior Graphic Designer",
                "Community Manager",
                "Sales Manager",
                "Analyst-SCM",
                "Junior Graphic Designer"
              ]
            }
          })),
        };

        // Overwrite JSON file dynamically
        setJobData(updatedJson);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    loadJobs();
  }, []);

  return jobData; // The UI will read from this instead of static JSON
};

export default useJobData;
