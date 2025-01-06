"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Link from "next/link";

export default function SideBar() {
  const [isAgentsOpen, setIsAgentsOpen] = useState(false); // State for Agents dropdown
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for Settings dropdown
  const [isOutreachBotsActive, setIsOutreachBotsActive] = useState(false); // State to toggle between pages
  const router = useRouter(); // Next.js router for navigation

  // Toggle function to switch between pages
  const toggleOutreachBots = () => {
    if (isOutreachBotsActive) {
      router.push("/"); // Navigate to Home page
    } else {
      router.push("/outreachbots"); // Navigate to Outreach Bots page
    }
    setIsOutreachBotsActive(!isOutreachBotsActive); // Toggle the state
  };

  return (
    <>
      <div className="flex relative  ">
        <div className="flex h-[100vh] fixed top-0 left-0 bg-white">
          {/* Sidebar */}
          <div className="w-[255px] h-full border-r relative border-gray-200">
            <div className="container mx-auto p-4 relative">
              <h3 className="text-xl font-bold mb-4">Command</h3>
              <div className="ml-[40px]">
                {/* Overview */}
                <Link href="/overview">
                  <div
                    className="flex items-center space-x-4 mb-4 cursor-pointer"
                    onClick={() => router.push("/")} // Navigate to Home page
                  >
                    <img src="/images/overview.png" alt="Overview" />
                    <p className="text-[16px]">Overview</p>
                  </div>
                </Link>

                {/* Agents */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsAgentsOpen(!isAgentsOpen)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img src="/images/agents.png" alt="Agents" />
                    <p className="text-[16px]">Agents</p>
                  </div>
                  <div className="mr-2">
                    <img
                      src="/images/downarrow.png"
                      alt="Toggle Agents"
                      className={`transform ${isAgentsOpen ? "rotate-180" : "rotate-0"
                        } transition-transform w-3 h-3 mb-4`}
                    />
                  </div>
                </div>

                {/* Agents Submenu */}
                {isAgentsOpen && (
                  <div className="ml-[34px]">
                    <p className="text-[16px] mb-4 cursor-pointer">Voice Agents</p>
                    <p className="text-[16px] mb-4 cursor-pointer">Chat Bots</p>
                    <p
                      className="text-[16px] mb-4 cursor-pointer"
                      onClick={toggleOutreachBots} // Call toggle function
                    >
                      Outreach Bots
                    </p>
                  </div>
                )}

                {/* Settings */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img src="/images/setting.png" alt="Settings" />
                    <p className="text-[16px]">Settings</p>
                  </div>
                  <div className="mr-2">
                    <img
                      src="/images/downarrow.png"
                      alt="Toggle Settings"
                      className={`transform ${isSettingsOpen ? "rotate-180" : "rotate-0"
                        } transition-transform w-3 h-3 mb-4`}
                    />
                  </div>
                </div>

                {/* Settings Submenu */}
                {isSettingsOpen && (
                  <div className="ml-[34px]">
                    <p className="text-[16px] mb-4 cursor-pointer">Profile</p>
                    <p className="text-[16px] mb-4 cursor-pointer">Payment</p>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-10 flex">
              <img
                src="/images/logout.png"
                className="w-3 h-3 my-[6px] mr-2"
                alt="Logout"
              />
              <p className="text-[16px] mb-4 cursor-pointer">Log Out</p>

            </div>
          </div>

          {/* Main Content Area */}
        </div>
        <div className="flex w-[288px] fixed top-0 left-[255px] bg-white">
          <div className="w-[288px]">
            <div className="flex bg-black px-[40px] w-[255px] h-[40px] py-2 mx-[15px] my-5 rounded-lg">
              <img
                src="/images/plus.png"
                className="w-3 h-3 my-[6px] mr-2"
                alt="Create New Agent"
              />
              <p className="text-white"> Create New Agent</p>
            </div>

            <div className="p-4 space-y-4 pl-[25px]">
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="agent"
                  id="sales-agent"
                  className="w-4 h-4"
                />
                <div>
                  <h4 className="text-[16px]">Sales Agent</h4>
                  <p className="text-sm text-gray-500">
                    Last modified: Jan 15, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  name="agent"
                  id="support-agent"
                  className="w-4 h-4"
                />
                <div>
                  <h4 className="text-[16px]">Support Agent</h4>
                  <p className="text-sm text-gray-500">
                    Last modified: Jan 12, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1px] h-[100vh] bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}
