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
    <div className="h-screen select-none w-64 bg-gray-900 text-white flex flex-col justify-between">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
        <ul>
          {[
            { name: "Create Job", key: "create" },
            { name: "Job List", key: "list" },
            { name: "Customer Issues", key: "issues" },
          ].map((item) => (
            <li key={item.key} className="mb-4">
              <button
                onClick={() => handleSectionClick(item.key)}
                className={`w-full text-left text-xl p-3 rounded-lg transition ${
                  activeSection === item.key
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
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
        className="mb-6 mx-8 p-2 text-xl bg-red-500 hover:bg-red-700 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
