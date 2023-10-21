import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0  flex z-[1000] justify-center items-center  bg-[#ffffffb3]  md:h-[30rem] h-full w-[100vw] ">
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