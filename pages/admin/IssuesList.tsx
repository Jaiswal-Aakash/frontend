"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchIssues, deleteIssue, fetchUserDetails } from "../api/api";  
import CustomTable from "../../components/ui/CustomTable";
import { Button } from "../../components/ui/Button";
import { toast } from "react-toastify";

interface Issue {
  id: number;
  userId: number;
  issue: string;
  createdAt: string;
}
interface UserDetails {
  id: number;
  name: string;
  number: string;
  email: string;
  pincode: string;
}

export default function IssuesList() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [issueToDelete, setIssueToDelete] = useState<number | null>(null);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    setLoading(true);
    const data = await fetchIssues();
    setIssues(data);
    setLoading(false);
  };

  const handleDelete = async () => {
    if (issueToDelete === null) return;

    console.log("Deleting issue with ID:", issueToDelete);

    const issue = issues.find((i) => i.id === issueToDelete);
    if (!issue) {
      console.error("Issue not found in state.");
      return;
    }

    const success = await deleteIssue(issueToDelete);
    console.log("Delete API Response:", success);

    if (success) {
      toast.success("Issue deleted successfully!");

      // Close confirmation modal immediately
      setConfirmDelete(false);
      setIssueToDelete(null);

      setIssues((prevIssues) =>
        prevIssues.filter((i) => i.id !== issueToDelete)
      );

      // Fetch user details before sending email
      let userDetails: UserDetails | null = null;
      try {
        userDetails = await fetchUserDetails(issue.userId);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }

      if (!userDetails || !userDetails.email) {
        toast.error("User email not found. Cannot send email.");
        return;
      }

      console.log("Sending email notification to:", userDetails.email);
      const url = process.env.NEXT_PUBLIC_URL;

      try {
        const response = await fetch(`${url}/sendIssuemail`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userDetails.email,
            issue: issue.issue,
            name: "Customer Support Team",
          }),
        });

        const data = await response.json();
        console.log("Email API Response:", data);

        if (response.ok) {
          toast.success("Email notification sent!");
        } else {
          toast.error("Failed to send email.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("An error occurred while sending email.");
      }
    } else {
      toast.error("Failed to delete issue. Please try again.");
    }
  };

  const handleViewDetails = async (userId: number) => {
    try {
      const userDetails = await fetchUserDetails(userId);
      setSelectedUser(userDetails);
      setModalOpen(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("User not found.");
      } else {
        toast.error("Failed to fetch user details.");
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg poppins font-base mb-4">Customer Issues</h2>
      {loading ? (
        <p className="text-sm">Loading issues...</p>
      ) : (
        <div className="max-w-full max-h-[400px] overflow-y-auto overflow-x-auto border rounded-md">
          <CustomTable
            headers={["ID", "User ID", "Issue", "Created At", "Action"]}
            data={issues}
            renderRow={(issue) => (
              <tr key={issue.id} className="border-b text-xs">
                <td className="p-2 w-[40px] poppins text-base text-center">
                  {issue.id}
                </td>
                <td className="p-2 w-[80px] poppins max-w-[80px] text-base break-words whitespace-normal text-center">
                  {issue.userId}
                </td>
                <td className="p-2 w-[250px] poppins text-base break-words">
                  {issue.issue}
                </td>
                <td className="p-2 w-[120px] poppins text-base text-center">
                  {new Date(issue.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2 w-[80px] poppins text-base text-center">
                  <Button
                    variant="outline"
                    size="xs"
                    className=" px-0 py-1 text-base poppins mr-3 w-[129px] bg-blue-500 hover:bg-blue-600 px-2 py-1"
                    onClick={() => handleViewDetails(issue.userId)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="destructive"
                    size="xs"
                    className="text-base bg-red-500 hover:bg-red-600 poppins px-2 py-1"
                    onClick={() => {
                      setIssueToDelete(issue.id);
                      setConfirmDelete(true);
                    }}
                  >
                    Close Issue
                  </Button>
                </td>
              </tr>
            )}
          />
        </div>
      )}
      {modalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 ml-35 rounded-lg shadow-lg w-90">
            <h3 className="text-lg poppins font-semibold mb-4">User Details</h3>
            <p className="poppins">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="poppins">
              <strong>Phone:</strong> {selectedUser.number}
            </p>
            <p className="poppins">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="poppins">
              <strong>Pincode:</strong> {selectedUser.pincode}
            </p>
            <button
              className="mt-4 px-4 py-2 poppins bg-gray-500 text-white rounded hover:bg-gray-700"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 ml-35 rounded-lg shadow-lg w-80">
            <h3 className="text-lg poppins font-semibold mb-4">
              Confirm Action
            </h3>
            <p className="poppins">
              Are you sure you want to close this issue?
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="px-9 py-2 poppins bg-red-500 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 poppins bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
