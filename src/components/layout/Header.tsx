import {
  Alarm,
  Filter,
  Logo,
  Search,
  TravelAgent,
} from "../../../public/icons/iconsExport";

const Header = () => {
  return (
    <div className="fixed w-full top-0 left-0 h-[71px] flex items-center justify-center border-b-2 border-dtBorder px-5 md:px-10 bg-white z-50">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Logo className="h-[60px] w-[124px]" />
        <div className="max-w-[70rem] w-full flex items-center justify-between ml-20">
          <div className="flex items-center gap-5">
            <div className="w-[202px] h-[35px] rounded-full border-[2px] border-[#3E7BEA] bg-dtGray pl-5 sm:flex items-center hidden">
              <Search className="min-h-[15px] min-w-[15px] h-[15px] w-[15px]" />
              <input
                className="h-full w-full bg-transparent focus:outline-none pl-3 text-xs"
                placeholder="Search"
              />
            </div>
            <div className="h-[33px] w-[85px] sm:flex gap-2 px-3 py-1 rounded-full border border-dtGRay items-center text-xs hidden">
              <Filter className="h-[15px] w-[15px]" />
              Filter
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Alarm className="h-[25px] w-[25px]" />
            <TravelAgent width={50} height={50.61} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
