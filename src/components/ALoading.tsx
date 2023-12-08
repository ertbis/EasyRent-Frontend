import React from "react";

const ALoading = () => {
  return (
    <div className="flex absolute top-0 left-0  flex-col justify-center items-center  bg-[#ffffffb3] md:rounded-xl   w-full h-full  ">
     <p className="text-gray-800">Loading.... </p>
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

export default ALoading;