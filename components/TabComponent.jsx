"use client";
import React, { useState } from "react";
import PerformanceCard from "./PerformanceCard";

const TabComponent = ({crypto}) => {
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
        <div className="h-0 relative bottom-[2px] border border-[#DEE1E6] w-full mb-[20px]"></div>
        <div className="max-w-[881px] rounded-[8px] bg-[#FFFFFF] flex flex-col p-[24px] ">
          {activeTab === "overview" && (
            <div className="flex flex-col gap-[24px]">
              <PerformanceCard crypto={crypto} />
            </div>
          )}
          {activeTab === "fundamentals" && <div>Fundamentals Content</div>}
          {activeTab === "news insights" && <div>News Insights Content</div>}
          {activeTab === "sentiments" && <div>Sentiments Content</div>}
          {activeTab === "team" && <div>Team Content</div>}
          {activeTab === "technicals" && <div>Technicals Content</div>}
          {activeTab === "tokenomics" && <div>Tokenomics Content</div>}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;