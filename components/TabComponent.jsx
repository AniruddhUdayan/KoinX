'use client'
import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const getTabClassName = (tabName) => {
    return `inline-block text-[16px] py-2 mx-4 ${
      activeTab === tabName
        ? "font-[600] text-[#0052FE] border-b-4 border-[#0052FE]"
        : "font-[500]"
    }`;
  };
  

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <button
            className={getTabClassName("overview")}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={getTabClassName("fundamentals")}
            onClick={() => setActiveTab("fundamentals")}
          >
            Fundamentals
          </button>
          <button
            className={getTabClassName("news insights")}
            onClick={() => setActiveTab("news insights")}
          >
            News Insights
          </button>
          <button
            className={getTabClassName("sentiments")}
            onClick={() => setActiveTab("sentiments")}
          >
            Sentiments
          </button>
          <button
            className={getTabClassName("team")}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
          <button
            className={getTabClassName("technicals")}
            onClick={() => setActiveTab("technicals")}
          >
            Technicals
          </button>
          <button
            className={getTabClassName("tokenomics")}
            onClick={() => setActiveTab("tokenomics")}
          >
            Tokenomics
          </button>
        </div>
        <div className="h-0 relative bottom-[2px] border border-[#DEE1E6] w-full"></div>
      </div>
    </div>
  );
};

export default TabComponent;
