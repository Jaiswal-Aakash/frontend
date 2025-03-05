// import {Button} from "../components/ui/Button";
// // import {Input} from "../components/ui/Input";
// import {Table} from "../components/ui/Table";
// import { useEffect, useState } from "react";
// import { fetchJobs, deleteJob } from "../../services/jobService";
// import Sidebar from "../components/ui/Sidebar";
// import { FaTrash } from "react-icons/fa";

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     loadJobs();
//   }, []);

//   const loadJobs = async () => {
//     try {
//       const response = await fetchJobs();
//       setJobs(response.data); // Ensure response is correct
//     } catch (error) {
//       console.error("Failed to load jobs");
//     }
//   };

//   const handleDeleteJob = async (id: number) => {
//     await deleteJob(id);
//     loadJobs();
//   };

//   return (
//     <div className="flex">
//       {/* <Sidebar /> */}
//       <div className="p-6 w-full">
//         <h1 className="text-2xl font-bold mb-4">Job List</h1>
//         <Table>
//           <thead>
//             <tr>
//               <th>Role</th>
//               <th>Location</th>
//               <th>Department</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <tr key={job.id}>
//                 <td>{job.role}</td>
//                 <td>{job.location}</td>
//                 <td>{job.department}</td>
//                 <td>
//                   <Button onClick={() => handleDeleteJob(job.id)} className="bg-red-500">
//                     <FaTrash />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default JobsPage;
