"use client";
import { useState } from "react";
import { TravelAgent } from "../../../../public/icons/iconsExport";
import ReusableDropDown from "../../props/DropDown";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState({
    label: "Dating",
    value: "dating",
  });
  const options = [
    { label: "Dating", value: "dating" },
    { label: "Marriage", value: "marriage" },
    { label: "Friendship", value: "friendship" },
    { label: "Proposal", value: "proposal" },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto px-5 pt-10">
      <div className="flex items-center gap-5 md:gap-20 flex-wrap">
        <div className="flex items-center justify-center gap-4">
          <TravelAgent className="h-[100px] w-[100px]" />
          <div>
            <h2 className="text-sm font-semibold mb-2">Welcome, Temiloluwa</h2>
            <p className="font-medium text-[9px] mb-1">
              My Profile Completeness
            </p>
            <div className="flex items-center gap-2 font-semibold text-[9px]">
              <div className="bg-dtGray2 h-[8px] w-[135px] min-[378px]:w-[176px] w-fulll rounded-full">
                <div className="w-[60%] h-full bg-dtRed rounded-full z-10" />
              </div>
              <p>60%</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <h2 className="text-sm font-semibold whitespace-nowrap">
            Relationship Type:
          </h2>
          <ReusableDropDown
            options={options}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
          />
        </div>
      </div>
      <DashboardCards />
    </div>
  );
};

export default Dashboard;
