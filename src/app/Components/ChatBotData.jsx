"use client"
import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ChatBotData() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [timePeriod, setTimePeriod] = useState("This Month");

    const filters = [
        { name: "All", icon: "/images/all.png" },
        { name: "Facebook", icon: "/images/facebook.png" },
        { name: "Instagram", icon: "/images/instagram.png" },
        { name: "Whatsapp", icon: "/images/whatsapp.png" },
        { name: "Website", icon: "/images/website.png" },

    ];

    const cards = [
        {
            id: 1,
            icon: "/images/user.png",
            title: "Total Clients",
            value: "100",
            trend: "+8.1%",
            trendIcon: "/images/up-arrow.png",
            trendClass: "bg-green-100 text-green-600",
        },
        {
            id: 2,
            icon: "/images/messaging.png",
            title: "Total Dialogues",
            value: "500",
            trend: "+3.2%",
            trendIcon: "/images/down-arrow.png",
            trendClass: "bg-red-100 text-red-600",
        },
        {
            id: 3,
            icon: "/images/total-costs.png",
            title: "Total Costs",
            value: "$20",
            trend: "+3.2%",
            trendIcon: "/images/down-arrow.png",
            trendClass: "bg-red-100 text-red-600",
        },
    ];



    const charts = [[
        { name: "Problem Reports", value: 20, color: "#D8B4E2" },
        { name: "Inquiries", value: 80, color: "#71309C" }
    ],
    [
        { name: "Problem Reports - Dialogues", value: 400, color: "#D8B4E2" },
        { name: "Inquiries - Dialogues", value: 200, color: "#71309C" },
    ],
    ];

    const chartstats = ["Clients", "Dialogues"];



    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value } = payload[0];
            const percentage = ((value / 100) * 100).toFixed(0);
            return (
                <div className="p-2 bg-white shadow-md rounded-lg text-sm border border-gray-200">
                    <div className="flex items-center space-x-2">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: payload[0].color }}
                        ></span>
                        <p className="text-gray-600">{name}</p>
                    </div>
                    <p className="text-gray-900 font-medium">{`${value} (${percentage}%)`}</p>
                </div>
            );
        }
        return null;
    };


    return (
        <>
            <div className="w-full
         flex justify-between items-center px-6 py-4 ">
                {/* Left Section */}
                <div>
                    <h2 className="text-lg font-semibold">Chatbot Data</h2>
                    <div className=" border p-1 flex rounded-lg mt-2 space-x-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`flex items-center px-4 py-1 rounded-lg  transition-colors duration-200 ${activeFilter === filter.name
                                    ? "bg-purple-100 text-purple-600 border-purple-200"
                                    : "bg-white text-gray-700 border-gray-200"
                                    }`}
                            >
                                <img src={filter.icon} alt={filter.name} className="w-5 h-5 mr-2" />
                                <span>{filter.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <div className="relative mt-9">
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
                        {/* Dropdown options can be added here */}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between px-6 py-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="flex flex-col justify-between bg-white border rounded-lg shadow-sm w-[32%] p-6"
                    >
                        <div className="p-2 rounded-lg bg-purple-100 w-12">
                            <img src={card.icon} alt={card.title} className="w-8 h-8" />
                        </div>
                        <div className="mt-3">
                            <h4 className="text-sm font-medium text-gray-600">{card.title}</h4>
                            <p className="text-2xl font-bold text-black">{card.value}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 ">
                            <span className="text-sm text-gray-500 ">Since last month</span>
                            <div
                                className={`flex items-center px-2 py-1 text-sm font-medium rounded-lg ${card.trendClass}`}
                            >
                                <img src={card.trendIcon} alt="Trend" className="w-4 h-4 mr-1" />
                                {card.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full p-6 bg-white border rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-6">Clients and Dialogues</h2>
                <div className="flex justify-between items-center">
                    <div className="w-full justify-center flex p-6 bg-white border rounded-lg shadow-sm">
                        {charts.map((v, i) => (
                            <div className="flex justify-between mr-7 ml-7">
                                {/* Legend */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 rounded-full bg-[#71309C]"></span>
                                        <p className="text-sm text-gray-600">Inquiries - {chartstats[i]}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <span className="w-3 h-3 rounded-full bg-[#D8B4E2]"></span>
                                        <p className="text-sm text-gray-600">Problem Reports - {chartstats[i]}</p>
                                    </div>
                                </div>

                                {/* Donut Chart */}
                                <div className="flex flex-col items-center relative">
                                    <PieChart width={250} height={250}>
                                        <Pie
                                            data={v}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={90}
                                            fill="#8884d8"
                                            paddingAngle={2}
                                        >
                                            {v.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.color}
                                                    stroke={entry.color}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                    {/* Text in the middle of the donut */}
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                                        style={{ pointerEvents: "none" }}
                                    >
                                        <p className="text-2xl font-bold text-black">100</p>
                                        <p className="text-sm text-gray-600">{chartstats[i]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </div>
        </>
    )
}
