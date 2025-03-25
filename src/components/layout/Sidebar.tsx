import Link from "next/link";
import { TravelAgent } from "../../../public/icons/iconsExport";
import { sidebar } from "../utils/sidebar";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: (state: boolean) => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const handleCloseModal = () => {
    onClose(false);
  };
  return (
    <div>
      {isOpen && (
        <div
          onClick={() => handleCloseModal()}
          className="fixed top-0 left-0 min-h-screen h-full w-full bg-[#00000033] z-[110]"
        />
      )}
      <div
        className={`duration-500 max-w-[284px] fixed top-16 lg:top-40 left-5 w-full flex flex-col gap-4 justify-center items-center z-[111] bg-white rounded-lg py-10 ${
          isOpen ? "translate-x-0" : "-translate-x-[400px]"
        }`}
      >
        <TravelAgent height={75} width={75.91} />
        <p className="font-medium">Temiloluwa</p>
        <div className="max-w-[177px] w-full flex flex-col gap-4 mt-2">
          {sidebar.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => handleCloseModal()}
              className={`flex items-center gap-3 text-xs p-2 pl-4 w-full rounded-md ${
                pathname === item.link ? "bg-dtRed text-white" : ""
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
