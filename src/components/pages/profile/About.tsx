import React from "react";
import { AddImage, Pencil } from "../../../../public/icons/iconsExport";
import Image from "next/image";

const About = () => {
  return (
    <div className=" max-w-[1059px] w-full mx-auto mt-52 min-[442px]:mt-28 min-[693px]:mt-16">
      <div className="max-w-[486px] w-full flex flex-col gap-5">
        <div className="bg-white border border-[#D9D9D9] pt-4 pb-1 px-4 rounded-md text-[#00000099]">
          <div className="flex gap-5 text-xs">
            <p>A few words about myself</p> <Pencil className="h-4 w-4" />
          </div>
          <textarea className="w-full focus:outline-none"></textarea>
        </div>
        <div className="bg-white border border-[#D9D9D9] py-3 px-2 rounded-md flex items-center flex-wrap gap-6">
          <div className="h-[70px] w-[70px] relative">
            <Image
              alt="profile_pic"
              layout="fill"
              src="/images/profile_picture.png"
            />
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-[70px] w-[70px] rounded-md border border-[#D9D9D9] flex flex-col items-center gap-1 justify-center text-[8px] text-[#00000099]"
            >
              <p>Add Photo</p>
              <AddImage className="h-8 w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
