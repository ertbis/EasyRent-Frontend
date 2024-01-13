import React, { FC } from "react";

const PLoading:FC<any> = ({setOpenEdit}) => {
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

      <div className="mt-2  flex justify-center mb-[5rem] w-[90%] ">
            <a onClick={() => setOpenEdit(true)}  className="mb-4  font-medium  text-center py-2 text-green-700"> Log Out</a>
          </div>
    </div>
  );
};

export default PLoading;