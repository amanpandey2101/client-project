import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function FormAction({ handleSubmit, type = "Button", action = "submit", text }) {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an asynchronous request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    handleSubmit(e); // Pass the event object to handleSubmit
  };

  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-[#F55621] bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onClick={handleFormSubmit}
          disabled={loading}
        >
          {loading ? <ClipLoader size={20} color="#FFFFFF" /> : text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
