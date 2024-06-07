import React from "react";

const LoadingPlaceholder = () => {
  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-32">
      <div className="card w-64 bg-base-100 shadow-xl ">
        <figure className=" bg-slate-500 p-4">
          <div className="h-full w-full py-20 bg-green-200 rounded-md"></div>
        </figure>
        <div className="card-body bg-gray-200 animate-pulse">
          <h2 className="w-2/3 rounded h-4 bg-gray-300"></h2>
          <p className="w-full h-3 bg-blue-100 rounded animate-pulse"></p>
          <div className="card-actions justify-end">
            <button className="btn px-14 bg-gray-400 animate-pulse"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
