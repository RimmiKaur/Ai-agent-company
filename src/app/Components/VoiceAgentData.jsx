"use client";
import React, { useState } from "react";

export default function VoiceAgentData() {
  const [timePeriod, setTimePeriod] = useState("This Month");
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const segments = [
    { id: 1, label: "Within 30s", percentage: "40 - 40%", color: "bg-purple-700", width: "60%" },
    { id: 2, label: "30s-60s", percentage: "30 - 30%", color: "bg-purple-500", width: "30%" },
    { id: 3, label: "Over 1 min", percentage: "10 - 10%", color: "bg-purple-300", width: "10%" },
  ];

  const cards = [
    {
      id: 1,
      icon: "/images/total-contacts.png",
      title: "Total Contacts",
      count: 500,
      trend: "+8.1%",
      trendIcon: "/images/up-arrow.png",
      trendClass: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      icon: "/images/contacts-called.png",
      title: "Contacts Called",
      count: "300 / 500",
      trend: "+8.1%",
      trendIcon: "/images/up-arrow.png",
      trendClass: "text-green-600 bg-green-100",
      subcards: [
        {
          icon: "/images/successful-calls.png",
          title: "Successful Calls",
          count: 200,
        },
        {
          icon: "/images/unsuccessful-calls.png",
          title: "Unsuccessful Calls",
          count: 100,
        },
      ],
    },
    {
      id: 3,
      icon: "/images/remaining-contacts.png",
      title: "Remaining Contacts",
      count: "200 / 500",
      trend: "+8.1%",
      trendIcon: "/images/up-arrow.png",
      trendClass: "text-green-600 bg-green-100",
    },
    {
      id: 4,
      icon: "/images/total-costs.png",
      title: "Total Costs",
      count: "$20",
      trend: "+8.1%",
      trendIcon: "/images/up-arrow.png",
      trendClass: "text-green-600 bg-green-100",
    },
  ];

  return (
    <div className="w-full px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Voice Agent Data</h2>
        <div className="relative">
          <button
            className="flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg focus:outline-none"
            onClick={() => console.log("Dropdown clicked")}
          >
            <span>{timePeriod}</span>
            <img
              src="/images/downarrow.png"
              alt="Dropdown"
              className="w-4 h-4 ml-2 text-gray-500"
            />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="xl:flex xl:justify-between lg:grid  lg:grid-cols-2  gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-sm p-6  justify-between"
          >
            <div className="flex">
              <div className=" items-center">
                <div className="p-2 rounded-lg bg-purple-100 w-12">
                  <img src={card.icon} alt={card.title} className="w-8 h-8" />
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-600">
                    {card.title}
                  </h4>
                  <p className="text-2xl font-bold text-black">{card.count}</p>
                </div>
              </div>
              <div>
                {card.subcards && (
                  <div className="ml-5">
                    {card.subcards.map((subcard, index) => (
                      <div
                        key={index}
                        className="bg-purple-50 mb-3  border border-purple-300 rounded-lg flex items-center space-x-2"
                      >
                        <div className="p-1 rounded-lg  w-12">
                          <img
                            src={subcard.icon}
                            alt={subcard.title}
                            className="w-15 h-10"
                          />
                        </div>
                        <h4 className="text-sm font-medium text-purple-600">
                          {subcard.title}
                        </h4>
                        <p className="text-xl  ml-5 font-semibold pr-5 text-black">
                          {subcard.count}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {card.trend && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500 mr-[90px]">Since last month</p>
                <div
                  className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium rounded-lg  ${card.trendClass}`}
                >
                  <img src={card.trendIcon} alt="Trend" className="w-4 h-4 " />
                  <span>{card.trend}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full  py-6">
        <div className="bg-white border rounded-lg shadow-sm p-6 relative">
          {/* Header */}
          <div className="p-2 rounded-lg bg-purple-100 w-12">
            <img src="/images/clock-01.png" alt="Successful Calls Duration" className="w-8 h-8" />
          </div>
          <div className="mt-3">
            <h4 className="text-sm font-medium text-gray-600">Successful Calls Duration</h4>
            <p className="text-2xl font-bold text-black">200</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 relative">
            <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              {segments.map((segment, index) => (
                <div
                  key={segment.id}
                  className={`h-4 ${segment.color} rounded-lg`}
                  style={{
                    width: segment.width,
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => setHoveredSegment({ ...segment, target: e.target })}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              ))}
            </div>

            {/* Tooltip */}
            {hoveredSegment && (
              <div
                className="absolute z-10 p-2 bg-white border rounded-lg shadow-lg text-sm"
                style={{
                  top: "120%", // Slightly below the progress bar
                  left: `${hoveredSegment.target.offsetLeft + hoveredSegment.target.offsetWidth / 2}px`,
                  transform: "translateX(-50%)", // Center the tooltip horizontally
                }}
              >
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full ${hoveredSegment.color}`} />
                  <span className="font-medium text-gray-600">{hoveredSegment.label}</span>
                  <span className="font-bold text-black">{hoveredSegment.percentage}</span>
                </div>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            {segments.map((segment) => (
              <div key={segment.id} className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${segment.color}`} />
                <span>{segment.label}</span>
                <span className="font-medium text-gray-900">{segment.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
