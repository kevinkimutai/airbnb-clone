import React from "react";

const EmptyListing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-1/3 flex justify-center items-center flex-col p-4 border-black rounded-md">
        <h2 className="mb-2 ">oops!,No Matching Listing</h2>
        <p className="mb-2 ">Retry With different search parameters </p>
        <button className="p-2 text-lg border border-black hover:border-2 transition">
          Try With Different Params
        </button>
      </div>
    </div>
  );
};

export default EmptyListing;
