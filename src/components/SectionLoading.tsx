import React from "react";

const SectionLoading = () => {
  return (
    <div className="flex   flex-col justify-center items-center  bg-[#ffffffb3]   h-[60vh] w-[90vw] ">
     <p className="text-gray-800">Fecthing Properties.... </p>
      <style>
        {`
          .spinner {
            width: 9rem;
            height: 9rem;
            border: 10px solid #dddddd;
            border-top-color: #27CD27;
            border-radius: 50%;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0turn);
            }

            to {
              transform: rotate(1turn);
            }
          }
        `}
      </style>
      <div className="spinner"></div>
    </div>
  );
};

export default SectionLoading;