"use client";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import VoiceAgentData from "../Components/VoiceAgentData";
import ChatBotData from "../Components/ChatBotData";
import OutreachBot from "../Components/OutreachBot";
import Link from "next/link";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [agentactiveFilter, setAgentActiveFilter] = useState("All");
  const [timePeriod, setTimePeriod] = useState("This Month");
  const [currentPage, setCurrentPage] = useState(2);


  const [agents, setAgents] = useState([
    { id: "3941221938", name: "Voice Agent One", status: "Non Occupied", meetings: "$874.00", cost: "$316.00", checked: false },
    { id: "3941221938", name: "Voice Agent One", status: "Non Occupied", meetings: "$874.00", cost: "$316.00", checked: false },
    { id: "3941221938", name: "Voice Agent One", status: "Non Occupied", meetings: "$874.00", cost: "$316.00", checked: false },
    { id: "3941221938", name: "Voice Agent One", status: "Non Occupied", meetings: "$874.00", cost: "$316.00", checked: false },
    { id: "3941221938", name: "Voice Agent One", status: "Non Occupied", meetings: "$874.00", cost: "$316.00", checked: false },
  ]);

  const filters = [
    { name: "All", icon: "/images/all.png" },
    { name: "Voice Agents", icon: "/images/voiceagent.svg" },
    { name: "Chat Bots", icon: "/images/chatbots.png" },
    { name: "Outreach Bots", icon: "/images/outreachbots.svg" },
  ];



  const cards = [
    {
      id: 1,
      icon: "/images/meetings.svg", // Replace with your icon path
      title: "Meetings Booked",
      count: 10,
      trend: "+8.1%",
      trendIcon: "/images/up-arrow.png", // Replace with your icon path
      trendClass: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      icon: "/images/interest.svg", // Replace with your icon path
      title: "Interested in Booking",
      count: 15,
      trend: "+3.2%",
      trendIcon: "/images/down-arrow.png", // Replace with your icon path
      trendClass: "text-red-600 bg-red-100",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCheckbox = (index) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent, idx) =>
        idx === index
          ? {
            ...agent,
            status: agent.checked ? "Non Occupied" : "Occupied",
            checked: !agent.checked,
          }
          : agent
      )
    );
  };

  return (
    <div className="relative w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transition-transform duration-300 z-20 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-7">
          {/* Logo and Hamburger inside Sidebar */}
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold">Logo</p>
            <button
              onClick={toggleMenu}
              className="text-purple-600 focus:outline-none"
            >
              <img src="/images/hamburger.svg" alt="Close" className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <Link href="/">
            <div className="text-white font-medium mb-4 flex items-center bg-[#71309C] space-x-2 px-3 py-2 rounded-lg">
              <img src="/images/overviewicon.png" alt="Overview" className="w-5 h-5" />
              <span>Overview</span>
            </div>
          </Link>


          {/* Agents Section */}
          <p className="text-gray-500 font-semibold mb-2">Agents</p>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/voiceagent.svg" alt="Voice Agents" className="w-5 h-5" />
            <span>Voice Agents</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/chatbots.png" alt="Chat Bots" className="w-5 h-5" />
            <span>Chat Bots</span>
          </div>
          <Link href="/outreachbots">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/images/outreachbots.svg"
                alt="Outreach Bots"
                className="w-5 h-5"
              />
              <span>Outreach Bots</span>
            </div>
          </Link>

          {/* User Settings Section */}
          <p className="text-gray-500 font-semibold mb-2">User Settings</p>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/images/profileicon.svg" alt="Profile" className="w-5 h-5" />
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/paymenticon.svg" alt="Payment" className="w-5 h-5" />
            <span>Payment</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 flex">
          <img
            src="/images/logout-purple.svg"
            className="w-3 h-3 my-[6px] mr-2"
            alt="Logout"
          />
          <p className="text-[16px] mb-4 cursor-pointer">Log Out</p>

        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-transform duration-300 ${isMenuOpen ? "ml-[250px]" : "ml-0"
          }`}
      >
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Total Performance Section */}
        <div className="w-full
         flex justify-between items-center px-6 py-4 mt-16">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-semibold">Total Performance</h2>
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
        <div className="w-full px-6 py-4 flex justify-between">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex justify-between items-center w-[48%] bg-white border rounded-lg shadow-sm p-6"
            >
              {/* Left Section */}
              <div className="">
                <div className="p-2 rounded-lg bg-purple-100 w-12">
                  <img src={card.icon} alt={card.title} className="w-8 h-8" />
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-600">
                    {card.title}
                  </h4>
                  <p className="text-2xl font-bold text-black">{card.count}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end mb-20">
                <p className="text-sm text-gray-500 ">Since last month</p>
                <div
                  className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium rounded-lg ${card.trendClass}`}
                >
                  <img src={card.trendIcon} alt="Trend" className="w-4 h-4" />
                  <span>{card.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="px-6 py-4 mt-5">
            <h2 className="text-lg font-semibold">Agent Overview</h2>
            <div className="flex border w-fit p-1 rounded-lg mt-2 space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setAgentActiveFilter(filter.name)}
                  className={`flex items-center px-4 py-1 rounded-lg  transition-colors duration-200 ${agentactiveFilter === filter.name
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
        </div>
        <div className="w-full p-6">
          {/* Table */}
          <div className="border p-2 rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-600 text-sm font-medium">
                  <th className="py-3 px-4">
                    <input type="checkbox" className="rounded  text-purple-600" />
                  </th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Meetings Booked</th>
                  <th className="py-3 px-4">Cost</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <tr
                    key={index}
                    className={`text-sm text-gray-700 ${agent.checked ? "bg-purple-100" : "bg-white"
                      }`}
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={agent.checked}
                        onChange={() => toggleCheckbox(index)}
                        className="rounded text-purple-600"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{agent.name}</p>
                        <p className="text-sm text-gray-500">ID {agent.id}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm rounded-full border ${agent.status === "Occupied"
                          ? "text-purple-600 bg-purple-50 border-purple-200"
                          : "text-gray-700 bg-white border-gray-300"
                          }`}
                      >
                        {agent.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{agent.meetings}</td>
                    <td className="py-3 px-4">{agent.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center mt-4">
            <button
              className="text-sm text-gray-600 hover:text-purple-600"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              &lt; Previous
            </button>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 text-sm rounded-full ${page === currentPage
                    ? "bg-purple-100 text-purple-600"
                    : "bg-white text-gray-600"
                    }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <span className="text-sm text-gray-600">...</span>
            </div>
            <button
              className="text-sm text-gray-600 hover:text-purple-600 ml-3"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
            >
              Next &gt;
            </button>
          </div>
        </div>
        <VoiceAgentData />
        <ChatBotData />
        <OutreachBot />
      </div>


    </div>
  );
}
