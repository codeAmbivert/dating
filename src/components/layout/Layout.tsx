"use client";
import { useState } from "react";
import { Menu } from "../../../public/icons/iconsExport";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <div
        className={`fixed left-5 top-20 lg:top-28 transition-all ease-in-out cursor-pointer p-1  z-[100] rounded`}
        onClick={() => setOpenModal(true)}
      >
        <Menu size={10} />
      </div>
      <div className="bg-dtGray3 min-h-screen pt-[72px]">{children}</div>

      <Sidebar isOpen={openModal} onClose={(state) => setOpenModal(state)} />
    </>
  );
};

export default Layout;
