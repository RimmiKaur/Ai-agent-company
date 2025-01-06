"use client";
import React, { useState } from "react";

import Overview from "./Overview";
import BasicSetting from "./BasicSetting";
import Workflow from "./Workflow";
import TalkToTheAgent from "./TalkToTheAgent";

export default function Tabbing() {
  const [activeTab, setActiveTab] = useState("Basic Setting");

  const tabs = ["Overview", "Basic Setting", "Workflow", "Talk to the Agent"];

  // Map tab names to components
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Basic Setting":
        return <BasicSetting />;
      case "Workflow":
        return <Workflow />;
      case "Talk to the Agent":
        return <TalkToTheAgent />;
      default:
        return null;
    }
  };

  return (
    <div className="ml-[35vw] w-[64vw]">
      {/* Tabs */}
      <div className="w-full border-b">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-7 py-1 text-[16px] ${activeTab === tab ? "text-black" : "text-gray-500"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black transition-all duration-300"></div>
              )}
            </button>
          ))}
        </div>
        <div className="h-[1px] bg-[#E5E7EB] w-[100px]"></div>
      </div>

      {/* Tab Content */}
      <div className="p-4">{renderContent()}</div>
    </div>
  );
}
