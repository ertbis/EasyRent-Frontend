import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center  bg-transparent  md:h-[30rem] h-full w-full ">
      <style>
        {`
          .spinner {
            width: 12rem;
            height: 12rem;
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

export default Loading;