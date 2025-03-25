import React from "react";
import {
  Create,
  MountainBiking,
  Museum,
  RiceBowl,
  Tango,
  Umbrella,
} from "../../../../../public/icons/iconsExport";

const MyHobbies = () => {
  const icons = [
    { icon: MountainBiking, bg: "bg-dtRed", name: "Biking" },
    { icon: RiceBowl, bg: "bg-dtYellow", name: "Cooking" },
    { icon: Tango, bg: "bg-dtPurple", name: "Dancing" },
    { icon: Museum, bg: "bg-dtCyan", name: "Museum & Arts" },
  ];
  return (
    <div className="w-[323px] h-[408px] bg-white border border-[#D9D9D9] rounded-md py-2 px-3">
      <div className="flex justify-between items-center text-sm font-medium">
        <p>My Hobbies</p>
        <Create className="h-5 w-5" />
      </div>
      <div className="flex gap-4 items-center flex-wrap mt-4 text-[8px] text-center">
        <div className="flex flex-col items-center gap-1 w-[56px]">
          <Umbrella className="h-[53px] w-[56px]" />
          <p>Laying on the beach</p>
        </div>
        {icons.map((Icon, i) => (
          <div key={i} className={`flex flex-col items-center gap-1 w-[50px]`}>
            <div className={`h-[50px] w-[50px] p-2 rounded-full ${Icon.bg}`}>
              <Icon.icon className="h-full w-full" />
            </div>
            <p>{Icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHobbies;
