"use client";
import React from "react";

export default function Workflow() {
  return (
    <div className="p-6 h-[700px]">
      {/* Outer Box */}
      <div className=" border border-gray-200 rounded-lg h-[600px]">
        {/* Minimize and Maximize Buttons */}
        <div className=" justify-end mt-4 flex space-x-2 mr-5">
          <span className=" mx-3 text-[20px] ">-</span>
          <span className="text-[20px] ">+</span>
        </div>

        {/* Inner Box */}
        <div className="relative h-[85%] m-4 border border-gray-200 rounded-lg">
          {/* Greet the Caller Node */}
          <div className="absolute left-10 top-16 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h4 className="font-medium">Greet the Caller</h4>
            <p className="text-sm text-gray-500">Ask how you can assist them.</p>
            <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-black"></span>
          </div>

          {/* Identify Need Node */}
          <div className="absolute left-48 top-48 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h4 className="font-medium">Identify Need</h4>
            <p className="text-sm text-gray-500">
              Determine customer's request.
            </p>
            <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-black"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
