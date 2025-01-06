"use client";
import React from "react";

export default function Overview() {
  return (
    <div className="p-6 space-y-8 ">
      {/* Voice Agents Performance Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Voice Agents Performance</h3>
        <div className="grid grid-cols-5 gap-4">
          {/* Performance Cards */}
          {[
            {
              title: "Calls Made",
              value: "1,234",
              change: "+12%",
              icon: "/images/call.png",
            },
            {
              title: "Total Time",
              value: "256h",
              change: "+8%",
              icon: "/images/clock.png",
            },
            {
              title: "Meetings Booked",
              value: "89",
              change: "+15%",
              icon: "/images/calendar.png",
            },
            {
              title: "Unsuccessful Calls",
              value: "45",
              change: "-5%",
              icon: "/images/cross.png",
            },
            {
              title: "Total Costs",
              value: "$2.5k",
              change: "+10%",
              icon: "/images/dollar.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Top Row: Icon and Percentage */}
              <div className="flex items-center mb-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-4 h-4 mr-[90px]"
                />
                <span className="text-sm text-gray-500">{item.change}</span>
              </div>

              {/* Title */}
              <p className="text-sm text-gray-500">{item.title}</p>

              {/* Value */}
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>



      {/* Agent Tasks Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Agent Tasks</h3>
          <button className="flex items-center px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800">
            + Add a Task
          </button>
        </div>
        <table className="w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b">Task Name</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Success Count</th>
              <th className="px-4 py-2 border-b">Waiting Count</th>
              <th className="px-4 py-2 border-b">Failed Count</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                task: "Cold Calling Campaign",
                status: "Completed",
                success: 45,
                waiting: 0,
                failed: 3,
              },
              {
                task: "Follow-up Calls",
                status: "Pending",
                success: 28,
                waiting: 12,
                failed: 5,
              },
              {
                task: "Lead Qualification",
                status: "In Progress",
                success: 67,
                waiting: 23,
                failed: 8,
              },
            ].map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{row.task}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className='px-2 py-1 text-xs rounded-lg bg-gray-100'
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">{row.success}</td>
                <td className="px-4 py-2 border-b">{row.waiting}</td>
                <td className="px-4 py-2 border-b">{row.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
