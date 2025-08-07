import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = ({
  setSelectedSection,
}: {
  setSelectedSection: (section: string) => void;
}) => {
  const [activeSection, setActiveSection] = useState<string>("list");
  const router = useRouter();

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setSelectedSection(section);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/auth/login");
  };

  return (
    <div className="h-screen select-none w-36 sm:w-40 md:w-48 lg:w-64 bg-gray-900 text-white flex flex-col justify-between shadow-lg">
      <div className="p-2 sm:p-3 md:p-4 lg:p-6">
        <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">Admin Panel</h2>
        <ul className="space-y-1 sm:space-y-2">
          {[
            { name: "Create Job", key: "create" },
            { name: "Job List", key: "list" },
            { name: "Customer Issues", key: "issues" },
          ].map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleSectionClick(item.key)}
                className={`w-full text-left text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg transition-all duration-200 ${
                  activeSection === item.key
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-700 hover:shadow-md"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 mx-2 sm:mx-3 md:mx-4 lg:mx-6 p-1 sm:p-2 md:p-3 text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg bg-red-500 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
