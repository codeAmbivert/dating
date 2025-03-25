import Image from "next/image";
import React, { useState } from "react";
import {
  Favorite,
  Favorite2,
  Verified,
} from "../../../../public/icons/iconsExport";

interface cardProps {
  user: {
    name: string;
    age: number | string;
    match: number | string;
    location: string;
    verified: boolean;
    description: string;
    banner: string;
    avatar: React.ElementType;
    greenbtn: boolean;
  };
}

const Card = ({ user }: cardProps) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[232px] h-full relative rounded-b-lg shadow overflow-hidden ">
      <Image src={user?.banner} alt="Davina" height={84} width={232} />
      <div className="px-3 py-2 bg-white relative h-full">
        <user.avatar className="h-14 w-14 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2" />
        <div className="flex justify-between text-[10px] font-medium">
          <div className="">
            <p>
              {user?.name}, {user?.age}
            </p>
            <p>{user?.location}</p>
          </div>
          <div></div>
          <div className="text-right">
            <p>{user?.match}% Match</p>
            {user?.verified && (
              <div className="inline-flex items-center gap-1">
                <Verified size={20} />
                Verified Address
              </div>
            )}
          </div>
        </div>
        <p className="leading-3 text-[9px] font-light mt-2">
          {user?.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <button
            className={`${
              user.greenbtn ? "bg-dtDarkGreen" : "bg-dtRed"
            }  py-1 px-4 text-[9px] rounded-full text-white cursor-pointer`}
          >
            {user.greenbtn ? "View Info" : "More Info"}
            
          </button>

          <div className="w-fit cursor-pointer" onClick={() => setLike(!like)}>
            {like ? <Favorite size={20} /> : <Favorite2 size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
