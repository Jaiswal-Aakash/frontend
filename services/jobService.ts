import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_URL;

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/roleList`);
    console.log("Fetched Jobs:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
    return [];
  }
};

export const createJob = async (jobData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobroleList`, jobData);
    return response.data;
  } catch (error) {
    console.error("Error creating job", error);
    throw error;
  }
};

export const deleteJob = async (jobId: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/jobrole/${jobId}`);
  } catch (error) {
    console.error("Error deleting job", error);
    throw error;
  }
};
