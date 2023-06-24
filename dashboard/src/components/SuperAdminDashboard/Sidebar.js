import React, { useEffect, useState } from "react";
import Sections from "../../constants/section";
import { GrClose } from "react-icons/gr";
import { PiUserCircleThin } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const separatorSidebar = document.getElementById("separator-sidebar");
    const separatorSidebarToggle = document.querySelector(
      '[data-drawer-toggle="separator-sidebar"]'
    );

    const handleToggleSidebar = () => {
      separatorSidebar.classList.toggle("-translate-x-full");
      setIsOpen(!isOpen);
    };

    separatorSidebarToggle.addEventListener("click", handleToggleSidebar);

    return () => {
      separatorSidebarToggle.removeEventListener("click", handleToggleSidebar);
    };
  }, [isOpen]);

  const handleCloseSidebar = () => {
    const separatorSidebar = document.getElementById("separator-sidebar");
    separatorSidebar.classList.toggle("-translate-x-full");
    setIsOpen(false);
  };

  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "" : "-translate-x-full"
        } sm:translate-x-0 sm:w-20 md:w-64`}
        aria-label="Sidebar"
      >
        <button
          onClick={handleCloseSidebar}
          className="mt-6 relative left-52 min-[768px]:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <GrClose size={20} />
        </button>
        

        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="flex justify-center font-bold text-3xl mb-4 mt-4">
            Dashboard
          </h1>
          <ul className="space-y-2 font-medium">
            {Sections.map((section, index) => (
              <li className="hover:cursor-pointer" key={index} value={section.path}>
                <a
                  href={section.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  value={section.name}
                >
                  <span className="ml-3">{section.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 md:ml-72">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 text-center">
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
            Total Business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">1000</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 text-center">
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
          Distributor Commision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">500</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 text-center">
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
          Retailer  Commision            
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">300</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 text-center">
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
          Your Earning 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">10000</p>
        </div>
        <div className="absolute top-4 right-4 hover:cursor-pointer">
          <PiUserCircleThin size={44} className="hover:h-12 hover:w-12 transition-all ease-in-out duration-150" />
        </div>
      </div>
      <div className="relative top-72 flex justify-center bg-[#42e33d] z-10 max-[768px]:top-6">
        <h2>100% Permission</h2>
      </div>

    </div>
  );
};

export default Sidebar;
