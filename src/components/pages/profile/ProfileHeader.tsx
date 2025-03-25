"use client";
import Image from "next/image";
import React from "react";
import { Create, PlusIcon } from "../../../../public/icons/iconsExport";
import { useRouter } from "next/navigation";

const ProfileHeader = () => {
  const router = useRouter();
  return (
    <div className=" max-w-[1059px] w-full mx-auto relative">
      <div className="h-[198px] flex relative">
        <Image
          alt="profile_banner"
          layout="fill"
          src="/images/profile_banner.png"
        />
        <div className="absolute min-h-full h-full w-full px-5 pt-3 top-0 left-0 flex flex-col gap-4">
          <div className="h-full w-full flex justify-between items-center text-white text-xs">
            <button
              className="bg-[#00000099] py-2 px-4 rounded"
              onClick={() => router.back()}
            >
              Back
            </button>
            <button className="bg-[#00000099] py-2 px-4 rounded">
              Update Cover
            </button>
          </div>
          <div className="h-full flex justify-between items-end flex-wrap gap-5 text-xs ml-5 -mr-4">
            <div className="flex flex-wrap gap-5">
              <div className="h-[180px] w-[180px] relative">
                <Image
                  alt="profile_pic"
                  layout="fill"
                  src="/images/profile_picture.png"
                />
                <PlusIcon className="h-7 w-7 absolute -bottom-4 -right-4" />
              </div>
              <div className="py-5 text-base font-medium text-black  min-[439px]:text-white  md:text-black">
                <div className="flex gap-5">
                  <p>Temiloluwa, 27</p>
                  <Create className="h-5 w-5" />
                </div>
                <p>Lagos</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-2">
              <button className="bg-dtRed py-2 px-4 text-[12px] rounded-full text-white cursor-pointer">
                Edit Profile
              </button>
              <button className="bg-dtRed py-2 px-4 text-[12px] rounded-full text-white cursor-pointer">
                Edit Match Setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
