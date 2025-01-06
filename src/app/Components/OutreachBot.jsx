"use Client"
import React, { useState } from 'react'

export default function OutreachBot() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [timePeriod, setTimePeriod] = useState("This Month");

    const filters = [
        { name: "All", icon: "/images/all.png" },
        { name: "Facebook", icon: "/images/facebook.png" },
        { name: "Instagram", icon: "/images/instagram.png" },
        { name: "Whatsapp", icon: "/images/whatsapp.png" },
        { name: "Website", icon: "/images/website.png" },

    ];

    const interactions = [
        {
            task: "DM Sent",
            id: "3941221938",
            number: 500,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
        {
            task: "Share Sent",
            id: "3941221938",
            number: 300,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
        {
            task: "Like Sent",
            id: "3941221938",
            number: 1000,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
        {
            task: "Comment Sent",
            id: "3941221938",
            number: 400,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
    ];


    const interactionsReceived = [
        {
            task: "DM Received",
            id: "3941221938",
            number: 500,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
        {
            task: "Like Received",
            id: "3941221938",
            number: 1000,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
        {
            task: "Comment Received",
            id: "3941221938",
            number: 400,
            succeeded: "$316.00",
            waiting: "$316.00",
            failed: "$316.00",
        },
    ];

    return (
        <>
            <div className="w-full flex justify-between items-center px-6 py-4 mt-10">
                {/* Left Section */}
                <div>
                    <h2 className="text-lg font-semibold">Outreachbot Data</h2>
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

            <div className="w-full p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Interactions Sent
                </h2>
                <table className="w-full border">
                    <thead className='border rounded-lg'>
                        <tr className="text-left text-gray-600 text-sm font-medium">
                            <th className="py-3 px-4">Task</th>
                            <th className="py-3 px-4">Number</th>
                            <th className="py-3 px-4">Succeeded</th>
                            <th className="py-3 px-4">Waiting</th>
                            <th className="py-3 px-4">Failed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interactions.map((interaction, index) => (
                            <tr
                                key={index}
                                className=""
                            >
                                <td className="py-3 px-4">
                                    <p className="font-medium text-gray-900">{interaction.task}</p>
                                    <p className="text-sm text-gray-500">ID {interaction.id}</p>
                                </td>
                                <td className="py-3 px-4">{interaction.number}</td>
                                <td className="py-3 px-4">{interaction.succeeded}</td>
                                <td className="py-3 px-4">{interaction.waiting}</td>
                                <td className="py-3 px-4">{interaction.failed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            (
            <div className="w-full p-6 bg-white border rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Interactions Received
                </h2>
                <table className="w-full border">
                    <thead>
                        <tr className="text-left text-gray-600 text-sm font-medium border">
                            <th className="py-3 px-4">Task</th>
                            <th className="py-3 px-4">Number</th>
                            <th className="py-3 px-4">Succeeded</th>
                            <th className="py-3 px-4">Waiting</th>
                            <th className="py-3 px-4">Failed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interactionsReceived.map((interaction, index) => (
                            <tr
                                key={index}
                                className=""
                            >
                                <td className="py-3 px-4">
                                    <p className="font-medium text-gray-900">{interaction.task}</p>
                                    <p className="text-sm text-gray-500">ID {interaction.id}</p>
                                </td>
                                <td className="py-3 px-4">{interaction.number}</td>
                                <td className="py-3 px-4">{interaction.succeeded}</td>
                                <td className="py-3 px-4">{interaction.waiting}</td>
                                <td className="py-3 px-4">{interaction.failed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
