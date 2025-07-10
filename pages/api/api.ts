import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.lhome.co.in/api";

// Function to fetch all issues
export const fetchIssues = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetchAllList`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching issues:", error);
    return [];
  }
};

export const deleteIssue = async (issueId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deleteIssue/${issueId}`);
    
    if (response.status === 200) {
      return true;
    } else {
      console.error("Unexpected response:", response);
      return false;
    }
  } catch (error) {
    console.error("Error deleting issue:", error);
    return false;
  }
};

// Fetch User Details
export const fetchUserDetails = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

